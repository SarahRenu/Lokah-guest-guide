# Lokah Guest Guide

A React + Vite guest guide for Lokah.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production site is generated in `dist/`.

## Free hosting with Cloudflare Pages

This project is a static React/Vite site and can be hosted on Cloudflare Pages Free.

Recommended Git-based setup:

1. Create a GitHub repository and upload the contents of this `lokah-site` folder.
2. Create or sign in to a Cloudflare account.
3. Open Workers & Pages, choose Create application, then Pages, then Connect to Git.
4. Select the GitHub repository.
5. Set the production branch to `main`.
6. Set the build command to `npm run build`.
7. Set the build output directory to `dist`.
8. Save and deploy. Cloudflare will provide a free `*.pages.dev` address.

Future pushes to the connected production branch will automatically rebuild and publish the site.

If Lokah wants to use `guide.lokahresort.com`, add it under the Pages project's Custom domains settings. This requires access to the DNS settings for `lokahresort.com`. The Pages hosting can remain on the free plan; the existing domain registration is separate.

## Notes

- This version is a static guest guide. It does not require a database or server to remain running on a personal computer.
- Confirm all operational details, activity availability, contact numbers and attraction information with the Lokah team before public launch.

## Changes included from the 14-page change brief

- Updated the homepage cover image and terracotta Lokah logo supplied in the brief.
- Removed the marked green line treatment from the hero composition; the current hero has no green accent line.
- Reordered the guest-guide sections to: Explore Lokah, Nava, Curated Moments, The Lokah Guide, and Good to Know.
- Added the Nava restaurant experience with the supplied pavilion and food photographs, the Nava logo, the five-senses story, the no-buffet message, chef note, restaurant timings, and links to the live breakfast, lunch and cafe menus.
- Corrected the proposal and anniversary captions.
- Added the full dining and stay timing schedule to Good to Know.
- Applied the terracotta, olive, coral, cloud, mud and secondary colour palette from the brief.

## Brand font note

Montserrat is loaded by the site. The stylesheet requests RL Limo for display text and keeps Playfair Display as a fallback. The PDF contains font samples but does not include installable RL Limo or Dulcinea font files. Add the licensed `.woff2` or `.woff` files if you want those exact typefaces embedded in the live website.
