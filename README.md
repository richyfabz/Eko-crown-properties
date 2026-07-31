# Eko Crown Properties

Eko Crown Properties is a premium real estate front end built for Nigerian buyers, renters, sellers, and diaspora clients who want a clearer way to discover homes online.

The product is intentionally presented as a polished sample marketplace rather than a fake broker system. It focuses on the parts of the property search journey that often feel confusing or fragmented: browsing, comparing, inspecting, and contacting an agent. The interface is designed to reduce friction, present information in a calm way, and make the next action obvious at every step.

## Project Concept

This project models a modern real estate brand with a premium editorial feel. It is not just a list of houses. It is a guided property discovery experience that combines:

- a homepage that explains the brand and the search journey
- searchable property directories for buying and renting
- rich property detail pages with image galleries and neighborhood context
- location pages that explain the local market story
- agent profiles, saved properties, comparisons, and inspection booking flows
- front-end form experiences that are honest about their current limitations

The concept is built around trust. Real estate decisions are high-stakes, so the site presents listings, labels, and follow-up paths in a way that feels clear instead of pushy.

## Problem It Solves

Traditional property websites often create avoidable friction:

- listings are hard to compare
- search filters are noisy or confusing
- image assets are inconsistent or poorly optimized
- users are not told what happens after they submit a form
- mobile visitors have to fight the interface just to reach basic information

This project solves those problems by making the experience more deliberate.

- Search is structured around real user intent, not just raw inventory.
- Listings are categorized and filterable by purpose, property type, price, location, and trust level.
- Property cards, detail pages, and CTA placements are arranged to keep the next step obvious.
- Inspection and seller flows explain what happens before they ask for details.
- Testimonials, story sections, and location cards give the inventory a human context without fabricating claims.

## What Is Included

- Premium homepage with hero, featured listings, category navigation, testimonials, and story carousel
- Buy, rent, and general property catalog pages
- Property detail pages with gallery, amenities, nearby places, and action paths
- Location pages for Lagos, Abuja, Enugu, and Port Harcourt
- Agent directory and contact experience
- Favorites, compare, privacy, terms, 404, and inspection booking flows
- Mobile navigation drawer and responsive layout system
- Motion-driven but accessible transitions with reduced-motion support

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Framer Motion
- Testing Library
- Vitest

## Media and Asset Handling

The app uses local imagery stored in the repository so the full experience works in development and on Vercel without depending on a remote CMS.

To make the project hosting-safe, the image assets were normalized into web-compatible filenames:

- `public/images/hero-duplex.jpg`
- `public/images/havana-villa.jpg`
- `public/images/enugu-city.jpg`
- `img/Duplex house.jpg`

The code no longer references the `.jfif` variants for live UI paths. That keeps the deployed app aligned with common browser and hosting expectations while preserving the original source images in the repo if they are still needed for reference.

## Local Development

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Available checks:

```bash
npm run build
npm run lint
npm run typecheck
npm run test
```

## Vercel Hosting

This repository is ready for Vercel deployment as a static SPA build.

Important deployment details:

- build command: `npm run build`
- output directory: `dist`
- SPA fallback: all routes rewrite to `index.html`

The included `vercel.json` supports client-side routing so deep links such as `/properties/ikoyi-courtyard-duplex` continue to work after deployment.

Recommended Vercel setup:

1. Connect the GitHub repository to Vercel.
2. Let Vercel use the repo’s build settings.
3. Confirm the project builds to `dist`.
4. Deploy the production branch after the first preview looks correct.

## Folder Structure

- `src/components` shared UI building blocks
- `src/features` feature-specific logic and composite UI
- `src/data` typed site content and asset references
- `src/types` domain models
- `src/animations` motion variants
- `src/styles` global styling
- `public/images` website-ready assets served statically
- `img` imported local imagery used by components

## Data and Content Model

The site intentionally uses sample content. Property records, agent details, testimonials, and location blurbs are meant to demonstrate the UX pattern and information architecture, not to claim live inventory.

That makes the project useful as:

- a product demo
- a front-end portfolio piece
- a starting point for a real estate CMS or API integration
- a deployment-ready Vercel prototype

## Testing and Quality

The repo includes tests that check:

- route rendering
- media consistency
- app smoke coverage
- responsive and interaction behavior through the current UI structure

The UI also includes accessibility-minded details such as skip links, semantic landmarks, readable labels, and meaningful alt text for imagery.

## Limitations and Next Steps

This build is front-end only.

- There is no production backend yet.
- Form submissions currently confirm locally instead of sending to an API.
- The sample listings should be replaced with live inventory before public launch.
- Market statistics should only be added once they are sourced and verified.

Possible next steps include:

1. Connect a CMS or API for live listings.
2. Add form submission endpoints for inspection and seller leads.
3. Replace placeholder legal text with finalized policy copy.
4. Add analytics, search telemetry, and richer map integration.
