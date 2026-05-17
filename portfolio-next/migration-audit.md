# Auditoria de Migração — Vue → Next.js + TypeScript + Tailwind

Resumo rápido: este relatório mapeia rotas, componentes e assets do projeto Vue existente que devem ser migrados para o novo app Next.js (`portfolio-next`). Também indica prioridade e observações técnicas.

## Rotas encontradas (`src/router/index.js`)
- `/` → `Hero.vue` — prioridade: alta
- `/about` → `About.vue` — prioridade: alta
- `/portfolio` → `Portfolio.vue` — prioridade: alta
- `/contact` → `Contact.vue` — prioridade: alta

Observação: o projeto atual também usa âncoras internas (`#portfolio`, `#about` etc.) — você pode optar por manter seções numa única página (`pages/index.tsx`) ou criar páginas separadas no Next (`pages/about.tsx`, `pages/portfolio.tsx`, `pages/contact.tsx`).

## Componentes (src/components)
- `Hero.vue` — animações com `gsap`, efeito de digitação, referências DOM. (alta)
- `Navbar.vue` — menu responsivo com toggle, usa classes Bootstrap atualmente. (alta)
- `About.vue` — texto + imagem (`@/assets/img/my-img.jpeg`). (alta)
- `Portfolio.vue` — lista de projetos, importa várias imagens via `@/assets/img/*`. (alta)
- `Contact.vue` — formulário que usa `emailjs-com`. (alta)
- `Skills.vue` — seção de habilidades (média)
- `Footer.vue` — rodapé com links (média)

## Assets detectados
- Imagens referenciadas em `src/components/Portfolio.vue`:
  - `messages-generator.jpeg`
  - `screen-game.jpeg`
  - `xtrememovies.jpeg`
  - `todolist.png`
  - `jsmusic.png`
  - `portal-noticias.png`
  - `calc-imc.png`
- Imagem em `About.vue`: `my-img.jpeg`
- Estilos globais: `src/assets/global.css` (reset, cores e comportamento de scroll)

Recomendação: mover `src/assets/img/*` para `public/img/` no Next e atualizar referências para `/img/<file>` ou usar `next/image`.

## Dependências e comportamento JS a migrar
- `gsap` — animações no `Hero.vue` (instalar `gsap` no Next).
- `emailjs-com` — usado no `Contact.vue` (instalar `emailjs-com` e configurar env vars se necessário).
- Font icons (FontAwesome) e classes Bootstrap aparecem no CSS/HTML: recomendo migrar para utilitários Tailwind e usar `react-icons` ou incluir FontAwesome via pacote React.

## Estratégia sugerida (incremental)
1. Copiar assets para `portfolio-next/public/img/` e verificar paths. (prioridade: alta)
2. Criar layout base em Next: `components/Navbar.tsx`, `components/Footer.tsx`. Importar no `pages/_app.tsx` ou `app/layout.tsx` (se usar App Router). (alta)
3. Migrar `Hero`, `About`, `Portfolio`, `Contact` como componentes React+TSX; testar cada um isoladamente. (alta)
4. Substituir CSS global por classes Tailwind; manter `global.css` apenas para resets customizados se necessário. (média)
5. Converter lógica Vue (`ref`, `onMounted`, `reactive`) para hooks React (`useState`, `useEffect`, `useRef`, `useMemo`). (alta)
6. Instalar dependências auxiliares: `gsap`, `emailjs-com`, `react-icons` (opcional). (alta)
7. Testar localmente e otimizar imagens usando `next/image`. (alta)

## Arquivos de referência no repo Vue
- `src/router/index.js` — mapeamento das rotas
- `src/components/*.vue` — todos os componentes listados acima
- `src/assets/global.css` — estilos base

## Riscos / observações
- Uso de Bootstrap + classes utilitárias exigirá reescrita visual para Tailwind.
- Alguns comportamentos de CSS scoped devem ser adaptados para Tailwind ou CSS Modules.
- EmailJS exige que as chaves/IDs não fiquem hardcoded — migrar para variáveis de ambiente.

## Próximas ações recomendadas (curto prazo)
- [x] Criar scaffold Next.js + TypeScript + Tailwind (`portfolio-next`).
- [ ] Mover imagens para `portfolio-next/public/img/` e atualizar paths nas importações.
- [ ] Gerar exemplos convertidos para `Hero` e `Navbar` para usar como template.

---
Arquivo gerado automaticamente: `portfolio-next/migration-audit.md`
