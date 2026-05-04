# Sohzo — Landing

Vite + React + TS + Tailwind v4. Cloudflare Pages.

## Dev

```sh
bun install
bun run dev
```

## Env

Copy `.env.example` → `.env.local` and set:

- `VITE_VEMETRIC_TOKEN` — Vemetric project token. Tracking is disabled in dev.

## Build

```sh
bun run build
```

Output: `dist/`. Static, no SSR.

## Deploy (Cloudflare Pages)

First time:

```sh
bunx wrangler login
bun run deploy
```

`wrangler.toml` is set; subsequent deploys use the `sohzo` project.

For Git-driven deploys, point Cloudflare Pages at this repo with:

- Build cmd: `bun run build`
- Output: `dist`
- Env: `VITE_VEMETRIC_TOKEN` set in production

## Notes

- Fonts: Satoshi (.otf) served from `/public/fonts`. Confirm your Indian Type Foundry license for production use.
- App Store URL is a placeholder in `Hero.tsx` and `Plus.tsx` — replace once the listing exists.
- 12 category sample topics in `src/data/categories.ts` are illustrative; tune copy when ready.
