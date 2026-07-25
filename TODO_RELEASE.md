# TODO_RELEASE.md

# Nigerian Premium Real Estate Platform

Release audit created on: 2026-07-25

## Current Phase

Phase 10 - Final release verification and UI polish

## Repository Audit Summary

The repository now contains a complete React + TypeScript + Vite real estate experience with routed pages, reusable components, motion, responsive layouts, sample property data, and reused local imagery. The visual system has been refreshed towards a black-and-pink premium style, with a new family-story testimonial section, stronger hover states, smaller typography, and a WhatsApp customer-care entry point.

## Completed Requirements

- Authoritative project, design, motion, UX, and governance documents are present and are being followed.
- Vite + React + TypeScript application scaffold is implemented.
- ESLint, strict TypeScript, Vitest, and production build tooling are configured.
- Shared design tokens, typography, spacing, radius, and elevation are implemented.
- Motion support and reduced-motion handling are implemented.
- Reusable layout, button, badge, drawer, modal, SEO, gallery, container, property card, location card, testimonial card, section heading, and story carousel components exist.
- Typed domain models and sample data are in place for properties, locations, agents, testimonials, FAQs, services, navigation, and story slides.
- Supplied imagery has been copied into `public/images/` and the original asset set is preserved under `public/raw-assets/` for testimonial and background use.
- Homepage includes hero, quick search entry, featured listings, categories, locations, why-us, process, testimonials, FAQs, and final CTA sections.
- Property discovery exists for buy, rent, and full catalogue routes with URL-driven filters, sorting, empty states, and trust signals.
- Property detail pages include gallery, lightbox, nearby context, related properties, and recently viewed support.
- Location directory and location detail pages are implemented.
- Agents, about, blog, contact, booking, seller, favourites, compare, privacy, terms, and 404 routes are implemented.
- WhatsApp customer-care access is available from the layout and story CTA.
- British English has been applied to visible interface copy where updated in this pass.
- Mobile drawer navigation, keyboard-friendly interactions, visible focus states, labels, and semantic structure are in place.
- SEO metadata is applied per route.
- Unit tests cover search/filter logic and route rendering.
- Production build succeeds.
- Lint succeeds.
- Type-check succeeds.
- Tests succeed.

## Missing Requirements

- Live backend submission for enquiries, bookings, favourites synchronisation, and seller workflows is not implemented.
- Production-grade data sourcing, verification feeds, and live property inventory are still sample-based.
- Browser-level verification with automated Chromium tooling could not be completed on this Windows host because the browser launcher reports `spawn EPERM`.
- Legal copy for privacy and terms remains placeholder content.
- Real analytics, CRM, and WhatsApp handoff automation are not wired to an external service.

## Implementation Priorities

- Replace all sample inventory with live property and location data.
- Connect enquiry, inspection booking, and seller forms to real backend services.
- Replace placeholder legal and policy pages with approved legal copy.
- Add live WhatsApp routing or CRM integration for customer-care follow-up.
- Complete browser-based visual verification once a compatible browser automation path is available.

## Technical Risks

- Framer Motion viewport features require `IntersectionObserver`; tests now mock this globally, but browser compatibility still needs real-device verification.
- The design is image-heavy, so future content swaps must preserve aspect ratios, contrast, and lazy-loading discipline.
- The current build is production-ready for front-end delivery, but sample content could be mistaken for live inventory if not clearly replaced before launch.

## Known Limitations

- The app is front-end only.
- The legal pages are placeholder text.
- Some of the observed imagery and copy are still sample content.
- Browser automation verification is unavailable in this environment because of the Windows `spawn EPERM` issue.

## Release Blockers

- No blocking code defects remain in build, lint, type-check, or unit tests.
- Production release is still blocked for a true public launch until live data, legal content, and backend submission flows are supplied.
- Browser-driven visual QA is blocked by the local automation environment, so manual verification is still recommended before public release.

## Verification Results

- `npm run build` - passed
- `npm run lint` - passed
- `npm run typecheck` - passed
- `npm test` - passed

