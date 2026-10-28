# Petra + Erik — Tea Shop Demo

A public portfolio edition of the latest Petra + Erik tea-shop project: a warm, interactive 3D shop and a companion conventional storefront, built with Next.js, React, Three.js, and TypeScript.

**[Open the interactive demo](https://arku75.github.io/petra-tea-shop-demo/)** · **[Open the classic shop](https://arku75.github.io/petra-tea-shop-demo/clasica/)** · [Developer portfolio](https://github.com/arku75/arku75)

## What you can try

- Explore seven connected 3D rooms: entrance, living room, house teas, premium teas, about, contact, and basket.
- Switch to the classic responsive storefront using the same product catalogue and basket.
- Change the interface and catalogue between Spanish, English, and Slovenian.
- Browse and filter teas, inspect illustrated ingredients, view seasonal boxes, and explore hand-carved spoon designs.
- Add products, change quantities, remove items, and try the demonstration coupons `PETRA10`, `ERIK5`, or `TEPREMIUM15`.
- Complete a simulated checkout and view a locally generated demonstration receipt.
- Try the contact forms with fictional details. No message is sent or stored.

## A demonstration of the client project

This repository publishes one current edition of the project, adapted from its latest working source. It does not contain old ZIP snapshots, private working notes, editor history, client credentials, production settings, or customer records.

The public edition keeps the original room compositions, models, typography, catalogue components, and multilingual navigation. Three personal photographs were replaced by botanical illustrations generated from the project's existing illustration code; their frames and placement are preserved. The original personal photos are not included.

**This demo does not sell products.** Prices, product descriptions, availability, shipping amounts, and promotional codes are illustrative content. The original prototype catalogue is retained for demonstrating the interface; its botanical copy is not verified medical or product advice.

## Privacy and demo behavior

There are no payment, email, account, or private editing endpoints in this public build.

- Checkout creates a fictional receipt in the current tab's `sessionStorage`. It never contacts a payment provider and does not retain the optional fictional email field.
- Contact forms change the interface locally. Names, emails, and messages are neither transmitted nor persisted.
- The basket and selected language use browser `localStorage` under the `petra-demo` namespace. Clear site data to reset them.
- The catalogue, layout overrides, fonts, models, and illustrations are served as static files. No client credentials or environment secrets are required.
- GitHub Pages is the hosting provider and may maintain its own HTTP request logs. No application analytics or advertising integration is included.

See [SECURITY.md](SECURITY.md) for the public edition's boundaries and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for asset and font rights.

## Run locally

Use Node.js 20.9 or later and the package manager recorded in `package.json`.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

The preview is available at `http://localhost:3000/petra-tea-shop-demo/`.

If a local package-manager wrapper attempts an unnecessary installation while running scripts, the equivalent direct commands are:

```bash
node node_modules/next/dist/bin/next build --webpack
node scripts/finish-export.mjs
node scripts/preview.mjs
```

`NEXT_PUBLIC_BASE_PATH` controls the build-time deployment prefix and defaults to `/petra-tea-shop-demo`. To host at the domain root, set it to an empty string during both build and preview. It contains a public path, not a credential.

## Build and publish

The project uses Next.js static export. Every tea detail route is enumerated at build time. `next build` produces `out/`; `scripts/finish-export.mjs` copies the export into `docs/` and writes `.nojekyll` for GitHub Pages.

For this repository, configure GitHub Pages to publish **branch `main`, folder `/docs`**. No backend, webhook, database, secret, or payment account is needed.

```text
src/        Current app, original scenes, classic storefront, and demo adapters
public/     Approved public models, illustrations, icons, and local fonts
data/       Read-only catalogue and room-placement snapshot
scripts/    Static-export packaging and local preview server
docs/       Generated GitHub Pages site
```

Useful verification commands:

```bash
node node_modules/typescript/bin/tsc --noEmit
node node_modules/next/dist/bin/next build --webpack
node scripts/finish-export.mjs
```

## En español

Esta es la demo pública de la tienda de té de Petra + Erik que desarrollé como proyecto para una clienta: recorrido 3D, tienda clásica, catálogo multilingüe, fichas de ingredientes y carrito compartido. Se ha publicado la versión de trabajo más reciente, con las adaptaciones necesarias para que cualquiera pueda probarla sin acceder a los servicios privados de la tienda.

Los pedidos y formularios de contacto son simulaciones locales claramente indicadas. No se cobran pagos, no se envían mensajes y no se publican claves ni datos personales de clientes. Las fotografías personales se sustituyeron por ilustraciones botánicas manteniendo la composición del diseño.
