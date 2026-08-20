const modules = import.meta.glob(
  [
    '../README.md',
    '../CONTRIBUTING.md',
    '../SECURITY.md',
    '../docs/**/*.md',
    '../runbooks/**/*.md',
    '../templates/**/*.md',
  ],
  { eager: true, query: '?raw', import: 'default' },
)

const groupLabels = {
  home: 'Início',
  docs: 'Guias principais',
  arquitetura: 'Arquitetura',
  dominio: 'Domínio e entidades',
  'active-templates': 'Active Templates',
  'allocation-rules': 'Allocation Rules',
  api: 'API REST',
  integracoes: 'Integrações e SDK',
  reporting: 'Report Wizard e Web Reports',
  runbooks: 'Runbooks',
  templates: 'Templates',
  governance: 'Governança',
}

const groupOrder = [
  'home',
  'docs',
  'arquitetura',
  'dominio',
  'active-templates',
  'allocation-rules',
  'reporting',
  'api',
  'integracoes',
  'runbooks',
  'templates',
  'governance',
]

function normalizePath(modulePath) {
  return modulePath.replace(/^\.\.\//, '').replaceAll('\\', '/')
}

function extractTitle(content, path) {
  const heading = content.match(/^#\s+(.+)$/m)?.[1]
  if (heading) return heading.replace(/\*\*|`/g, '').trim()
  return path.split('/').pop().replace(/\.md$/, '').replaceAll('-', ' ')
}

function extractSummary(content) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith('#') && !line.startsWith('>') && !line.startsWith('|'))
    ?.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '') ?? ''
}

function getGroup(path) {
  if (path === 'README.md') return 'home'
  if (path === 'CONTRIBUTING.md' || path === 'SECURITY.md') return 'governance'
  if (path.startsWith('runbooks/')) return 'runbooks'
  if (path.startsWith('templates/')) return 'templates'

  const parts = path.split('/')
  return parts.length > 2 ? parts[1] : 'docs'
}

function cleanForSearch(content) {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#[\]()*_`>|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase('pt-BR')
}

export const documents = Object.entries(modules)
  .map(([modulePath, content]) => {
    const path = normalizePath(modulePath)
    const group = getGroup(path)
    return {
      path,
      content,
      title: extractTitle(content, path),
      summary: extractSummary(content),
      group,
      groupLabel: groupLabels[group] ?? group.replaceAll('-', ' '),
      searchText: cleanForSearch(content),
    }
  })
  .sort((a, b) => {
    const groupDiff = groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group)
    return groupDiff || a.path.localeCompare(b.path, 'pt-BR', { numeric: true })
  })

export const documentMap = new Map(documents.map((document) => [document.path.toLowerCase(), document]))

export const navigationGroups = groupOrder
  .map((group) => ({
    id: group,
    label: groupLabels[group],
    documents: documents.filter((document) => document.group === group),
  }))
  .filter((group) => group.documents.length)
