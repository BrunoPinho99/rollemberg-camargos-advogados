<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Diretrizes de Otimização de Leitura e Tokens

Para manter a máxima eficiência no uso de tokens, agilidade e precisão técnica neste projeto (`attest-advocacia`):

1. **Escopo Restrito de Leitura e Busca:**
   - **NUNCA** realize buscas completas, varreduras globais, `grep` recursivo irrestrito ou leituras em massa dentro de:
     - `node_modules/`
     - `.next/`
     - `.vercel/`
     - `package-lock.json`
   - Não carregue arquivos de cache, builds temporários ou logs no contexto.

2. **Inspeção de Dependências e Versões:**
   - Para consultar bibliotecas instaladas, versões, scripts ou plugins, consulte **estritamente** o arquivo `package.json`.

3. **Foco e Precisão Cirúrgica nas Alterações:**
   - Concentre leituras, edições e pesquisas estritamente nos arquivos e diretórios relevantes solicitados no prompt (ex: `src/`, `public/`, `src/components/`, `src/app/`, `src/content/`).
   - Evite expandir o escopo ou modificar arquivos além do objetivo específico da demanda.
