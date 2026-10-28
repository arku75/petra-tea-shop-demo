# Public demo boundaries

This repository is a static portfolio demonstration, not a production commerce service.

## Included

- Public-facing React/Next.js source and generated static pages.
- Demonstration products and local basket state.
- Locally simulated checkout receipts and contact form confirmation.
- Static room placement, models, icons, and approved illustrations.

## Excluded

- `.env` files, passwords, tokens, cookies, private connection details, and customer data.
- All production API routes, payment webhooks, order-email handlers, private workshop routes, and editor authentication code.
- Historical archives, editor logs, internal audit notes, personal photos, and private studio assets.

## Data handling

No form submissions leave the page. Checkout stores a synthetic receipt in the current browser tab, with products and totals only. The optional demonstration email is not read or saved. The browser retains basket and language settings until site data is cleared.

Only the static catalogue and layout-override files are fetched by application source. Fonts and 3D assets are served locally by the same static host. Hosting-level access logs are controlled by GitHub Pages.

Do not add live payment keys or email credentials to this public demo. A production shop requires a separate server implementation, verified product content, and an independently configured deployment.
