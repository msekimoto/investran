<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { documentMap, documents, navigationGroups } from './content'

const DEFAULT_DOCUMENT = 'README.md'
const currentPath = ref(DEFAULT_DOCUMENT)
const query = ref('')
const menuOpen = ref(false)
const outline = ref([])
const contentElement = ref(null)
let mermaidInstance

marked.setOptions({ gfm: true, breaks: false })

const currentDocument = computed(
  () => documentMap.get(currentPath.value.toLowerCase()) ?? documentMap.get(DEFAULT_DOCUMENT.toLowerCase()),
)

const renderedContent = computed(() => DOMPurify.sanitize(marked.parse(currentDocument.value.content)))

const searchResults = computed(() => {
  const terms = query.value
    .toLocaleLowerCase('pt-BR')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (!terms.length) return []

  return documents
    .map((document) => {
      const title = document.title.toLocaleLowerCase('pt-BR')
      const score = terms.reduce((total, term) => {
        if (title.includes(term)) return total + 8
        if (document.searchText.includes(term)) return total + 1
        return total
      }, 0)
      return { ...document, score }
    })
    .filter((document) => document.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'pt-BR'))
    .slice(0, 12)
})

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function parseHash() {
  const raw = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''))
  const [path, heading] = raw.split('::')
  const requested = documentMap.get((path || DEFAULT_DOCUMENT).toLowerCase())
  currentPath.value = requested?.path ?? DEFAULT_DOCUMENT
  menuOpen.value = false
  query.value = ''
  renderEnhancements(heading)
}

function navigate(path, heading = '') {
  const target = `#/${path}${heading ? `::${heading}` : ''}`
  if (window.location.hash === target) {
    parseHash()
  } else {
    window.location.hash = target
  }
}

function resolveDocumentLink(href) {
  const [linkPath, heading = ''] = href.split('#')
  if (!linkPath) return { path: currentDocument.value.path, heading }

  const baseParts = currentDocument.value.path.split('/')
  baseParts.pop()
  for (const part of linkPath.replace(/^\.\//, '').split('/')) {
    if (part === '..') baseParts.pop()
    else if (part !== '.') baseParts.push(part)
  }

  const path = baseParts.join('/')
  return documentMap.has(path.toLowerCase()) ? { path, heading } : null
}

function handleContentClick(event) {
  const link = event.target.closest('a')
  if (!link) return

  const href = link.getAttribute('href') ?? ''
  if (/^(https?:|mailto:)/i.test(href)) {
    link.setAttribute('target', '_blank')
    link.setAttribute('rel', 'noreferrer')
    return
  }

  const target = resolveDocumentLink(href)
  if (!target) return
  event.preventDefault()
  navigate(target.path, target.heading)
}

async function renderEnhancements(requestedHeading = '') {
  await nextTick()
  if (!contentElement.value) return

  const usedSlugs = new Map()
  outline.value = [...contentElement.value.querySelectorAll('h2, h3')].map((heading) => {
    const baseSlug = slugify(heading.textContent) || 'secao'
    const count = usedSlugs.get(baseSlug) ?? 0
    usedSlugs.set(baseSlug, count + 1)
    heading.id = count ? `${baseSlug}-${count + 1}` : baseSlug
    return { id: heading.id, title: heading.textContent, level: Number(heading.tagName.slice(1)) }
  })

  const diagrams = [...contentElement.value.querySelectorAll('pre code.language-mermaid')]
  diagrams.forEach((code, index) => {
    const container = document.createElement('div')
    container.className = 'mermaid'
    container.id = `mermaid-${index}`
    container.textContent = code.textContent
    code.parentElement.replaceWith(container)
  })
  if (diagrams.length) {
    try {
      if (!mermaidInstance) {
        mermaidInstance = (await import('mermaid')).default
        mermaidInstance.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'strict' })
      }
      await mermaidInstance.run({ nodes: contentElement.value.querySelectorAll('.mermaid') })
    } catch (error) {
      console.error('Não foi possível renderizar um diagrama Mermaid.', error)
    }
  }

  if (requestedHeading) {
    document.getElementById(requestedHeading)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0 })
  }
}

function openSource() {
  window.open(`https://github.com/msekimoto/investran/blob/main/${currentDocument.value.path}`, '_blank', 'noreferrer')
}

watch(renderedContent, () => renderEnhancements())

onMounted(() => {
  window.addEventListener('hashchange', parseHash)
  parseHash()
})

onBeforeUnmount(() => window.removeEventListener('hashchange', parseHash))
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <button class="menu-button" aria-label="Abrir navegação" @click="menuOpen = !menuOpen">☰</button>
      <button class="brand" @click="navigate(DEFAULT_DOCUMENT)">
        <span class="brand-mark">I</span>
        <span><strong>Investran</strong><small>Base de conhecimento</small></span>
      </button>
      <div class="search-wrap">
        <span aria-hidden="true">⌕</span>
        <input v-model="query" type="search" placeholder="Buscar na documentação…" aria-label="Buscar na documentação" />
        <div v-if="query" class="search-results">
          <p v-if="!searchResults.length">Nenhum documento encontrado.</p>
          <button v-for="result in searchResults" :key="result.path" @click="navigate(result.path)">
            <strong>{{ result.title }}</strong>
            <small>{{ result.groupLabel }}</small>
          </button>
        </div>
      </div>
      <a class="github-link" href="https://github.com/msekimoto/investran" target="_blank" rel="noreferrer">GitHub</a>
    </header>

    <div class="workspace">
      <aside class="sidebar" :class="{ open: menuOpen }">
        <nav aria-label="Documentação">
          <section v-for="group in navigationGroups" :key="group.id" class="nav-group">
            <h2>{{ group.label }}</h2>
            <button
              v-for="document in group.documents"
              :key="document.path"
              :class="{ active: document.path === currentDocument.path }"
              @click="navigate(document.path)"
            >
              {{ document.title }}
            </button>
          </section>
        </nav>
      </aside>
      <button v-if="menuOpen" class="backdrop" aria-label="Fechar navegação" @click="menuOpen = false"></button>

      <main class="main-content">
        <div class="document-meta">
          <span>{{ currentDocument.groupLabel }}</span>
          <button @click="openSource">Editar no GitHub ↗</button>
        </div>
        <article ref="contentElement" class="markdown-body" @click="handleContentClick" v-html="renderedContent"></article>
        <footer class="document-footer">
          <p>Encontrou algo desatualizado? Edite o arquivo Markdown correspondente; a wiki será reconstruída automaticamente.</p>
          <button @click="openSource">Abrir arquivo-fonte</button>
        </footer>
      </main>

      <aside v-if="outline.length" class="outline">
        <strong>Nesta página</strong>
        <a
          v-for="item in outline"
          :key="item.id"
          :class="`level-${item.level}`"
          :href="`#/${currentDocument.path}::${item.id}`"
        >{{ item.title }}</a>
      </aside>
    </div>
  </div>
</template>
