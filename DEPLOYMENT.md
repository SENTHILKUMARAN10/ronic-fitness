# Publishing Ronic Fitness Zone

The repository's canonical site is at the repository root. It is a static website: no build or npm dependencies.

## Vercel

Source repository: https://github.com/SENTHILKUMARAN10/ronic-fitness

Deploy the repository root as a static website. Select **Other** as the framework, leave the build and install commands empty, and use `.` as the output directory. No environment variables are required. `vercel.json` enables clean URLs and disables trailing slashes.

Keep `index.html`, `privacy.html`, `robots.txt`, `assets/`, `css/`, and `js/` together. Verify the production deployment, stylesheet, images, privacy page, mobile navigation, and visit-form validation before sharing the production URL.

## Optional GitHub Pages mirror

The included GitHub Pages workflow runs only when manually requested. Vercel is the primary deployment target. To enable the optional mirror, select **GitHub Actions** in repository **Settings → Pages**, then manually run **Publish optional GitHub Pages mirror**. Only share its URL after verifying a successful deployment.

## Notes

The visit form prepares WhatsApp requests; it does not automatically confirm bookings or accept online payments. Verify brand artwork, services, Instagram embeds and public contact details with the gym before launch.
