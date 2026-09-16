# Ronic Fitness Zone — restored visual design (v3)

Responsive, accessible, premium one-page static website built with the client's original gym images and cleaned-up, transparent-background logo.

## Run locally

Open `index.html` in a browser or run `python -m http.server 8000` from this folder and open http://localhost:8000.

## Deploy

Upload the contents of this folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.). No npm install or build step required. Use `index.html` as the entry point. Connect a custom domain after client approval. Domain and hosting are not included here.

## Working features

- Responsive desktop/tablet/mobile layouts and accessible mobile navigation
- Visible header/footer logo using the cleaned transparent brand asset
- Actual client-provided exterior and signage photos in hero/gallery
- Phone dialer, WhatsApp membership enquiries, Instagram and Google Maps links
- Visit request form validation and WhatsApp handoff with the entered details
- Form enforces a valid Indian mobile number, consent, and no past visit dates
- SEO basics, structured local gym data, OG image, reduced-motion support, favicon, privacy/enquiry page

## Important client approvals before publishing

1. Confirm exact branding/logo fidelity (the transparent logo was AI-recreated from photos and should be approved against the real vector artwork).
2. Confirm whether the gym is women-only, mixed or has separate timings. Website makes no audience restriction claim until this is known.
3. Verify training services and approved copy. Training sections reflect provided broad categories; avoid unsupported promises.
4. Confirm booking policy, actual operating hours, trial availability and membership pricing. This site does **not** advertise free trials or invent prices.
5. Review all photography permissions and the privacy wording. No fake reviews/member statistics/facilities.
6. Decide separately whether to add online payments, a scheduling backend and a real admin system. Current visitor requests are sent via WhatsApp; no slot is reserved or stored.
7. Confirm owner approves the public contact number, Instagram and map link supplied.
8. Configure a production OG image as an absolute URL after the domain is known, if needed for social share cards. Add a canonical URL only after domain approval.

## Assets

`assets/ronic-logo.png` is the high-resolution transparent PNG; `assets/ronic-logo.webp` is the optimized copy used in the header and footer. Original real gym photography is converted to WebP and kept local.

## Color system

- Base: `#101211`
- Accent: `#ffe500`
- Off-white: `#f5f4ec`
- Muted: `#a8aaa4`

## Troubleshooting: styles not loading

**Unzip the entire archive first.** `index.html` and the `css/`, `js/`, and `assets/` directories must remain together at the same level. Opening `index.html` directly inside a ZIP preview, or downloading only that file, prevents the stylesheet and images from loading. The fixed archive places `index.html` at its root, ready for static hosting.

For a one-click preview without extracting files, use the separately supplied `Ronic-Fitness-Preview.html` file. Its CSS, JavaScript, and media are embedded into one portable HTML file; this is a review copy, not the deployment project.

## Restored appearance (v3)
Restores the first website’s charcoal + bright yellow palette, dramatic photographic hero, five-section card design, and original header/footer visual styling. Keeps the subsequent two Instagram Reel embeds (with direct-watch fallbacks), a lightweight animated equipment graphic, and the clarified one-section visit booking layout. Instagram playback depends on the third-party embed provider. No additional facilities, prices, or stock photos have been invented.
