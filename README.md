# Federico Giuliani — CV interactivo

Sitio personal bilingüe (EN/ES) hecho con React, TypeScript, Vite, Framer Motion y Three.js.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://127.0.0.1:5183
pnpm build    # genera dist/
pnpm lint
```

## Deploy

Se publica en GitHub Pages (https://feedeeg29.github.io) con GitHub Actions
(`.github/workflows/deploy.yml`) cada vez que se hace push a `main`.

Los archivos de `public/` (Cupones App, su política de privacidad y la verificación
de Google) se publican en la raíz del sitio y no deben borrarse.
