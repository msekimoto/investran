import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, relative, resolve } from 'node:path';

const root = process.cwd();
const ignoredDirectories = new Set(['.git', 'dist', 'node_modules']);
const documentationRoots = ['README.md', 'CONTRIBUTING.md', 'SECURITY.md', 'docs', 'runbooks', 'templates'];
const requiredRunbookControls = [
  '## Document control',
  '| Status |',
  '| Technical owner |',
  '| Functional owner |',
  '| Last validation |',
  '| Next review |',
  '| Evidence |',
];
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/i,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/,
  /(?:password|passwd|pwd)\s*=\s*[^\s<>{}\[\]"']{8,}/i,
];

function markdownFiles(path) {
  if (!existsSync(path)) return [];
  if (statSync(path).isFile()) return extname(path) === '.md' ? [path] : [];

  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) return markdownFiles(resolve(path, entry.name));
    return entry.isFile() && extname(entry.name) === '.md' ? [resolve(path, entry.name)] : [];
  });
}

const files = documentationRoots.flatMap((entry) => markdownFiles(resolve(root, entry)));
const errors = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const displayName = relative(root, file);

  for (const pattern of secretPatterns) {
    if (pattern.test(content)) errors.push(`${displayName}: possível segredo detectado (${pattern}).`);
  }

  for (const match of content.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|#)/i.test(target)) continue;

    const fileTarget = target.split('#', 1)[0];
    if (fileTarget && !existsSync(resolve(dirname(file), fileTarget))) {
      errors.push(`${displayName}: link local inexistente: ${target}`);
    }
  }
}

for (const file of markdownFiles(resolve(root, 'runbooks'))) {
  const content = readFileSync(file, 'utf8');
  for (const control of requiredRunbookControls) {
    if (!content.includes(control)) {
      errors.push(`${relative(root, file)}: controle obrigatório ausente: ${control}`);
    }
  }
}

if (errors.length) {
  console.error(`Validação da documentação encontrou ${errors.length} problema(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Documentação validada: ${files.length} arquivo(s), links locais e controles dos runbooks aprovados.`);
}
