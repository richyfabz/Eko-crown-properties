# REAL_ESTATE_PROJECT.md

# Nigerian Premium Real Estate Platform

Version: 2.0

Status: Production Specification

Framework:
- React
- TypeScript
- Vite

Animation:
Framer Motion

Target Quality:
Commercial Production Release

------------------------------------------------------------

# 0. PURPOSE

This document is the master engineering specification for the Nigerian
Real Estate Platform.

Its purpose is to describe every technical,
design,
UX,
architectural,
performance,
accessibility,
and implementation requirement required to build a premium production-ready website.

This is NOT a simple landing page.

This is NOT a UI exercise.

This is NOT a template recreation.

The finished application should feel like a premium real estate product
created by an experienced product company.

Every engineering decision should move the project closer to that goal.

------------------------------------------------------------

# 1. DOCUMENT PRECEDENCE

The project is governed by five specification documents.

Read every document completely before implementation.

If conflicting information exists,
follow this order.

1.
REAL_ESTATE_PROJECT.md

Overall product requirements.

2.
DESIGN_SYSTEM.md

Visual language.

Typography.

Spacing.

Components.

Photography.

3.
MOTION_SYSTEM.md

Everything related to motion.

Animation.

Interaction.

Transitions.

Timing.

Motion architecture.

4.
UX_PLAYBOOK.md

Psychology.

Storytelling.

Conversion.

Navigation.

Trust.

User flow.

5.
REAL_ESTATE_AGENTS.md

Quality assurance.

Testing.

Acceptance.

Release approval.

------------------------------------------------------------

# 2. MISSION

Build the best-looking Nigerian real estate website possible.

The website should communicate:

Trust.

Luxury.

Warmth.

Professionalism.

Local expertise.

Premium service.

without ever appearing flashy,
cheap,
or artificial.

------------------------------------------------------------

# 3. PRODUCT GOALS

The platform should help visitors:

• Search properties

• Buy properties

• Rent properties

• List properties

• Contact an agent

• Book inspections

• Explore locations

• Learn the buying process

• Build trust in the agency

Every page must support one or more of these goals.

------------------------------------------------------------

# 4. SUCCESS CRITERIA

The website succeeds when a first-time visitor can:

Within 5 seconds

Understand what the company does.

Within 15 seconds

Find properties.

Within 30 seconds

Start contacting an agent.

Within 2 minutes

Book an inspection
or
submit an enquiry.

The experience should feel effortless.

------------------------------------------------------------

# 5. PRODUCT PRINCIPLES

Every engineering decision should satisfy one or more of these principles.

1.

Clarity before decoration.

2.

Content before animation.

3.

Performance before complexity.

4.

Accessibility before aesthetics.

5.

Consistency before creativity.

6.

Trust before conversion.

7.

Quality before quantity.

------------------------------------------------------------

# 6. DEVELOPMENT PHILOSOPHY

Never build pages as isolated screens.

Instead build reusable systems.

Bad:

Homepage

↓

Properties

↓

About

↓

Contact

Good:

Layout System

↓

Typography

↓

Cards

↓

Forms

↓

Search

↓

Property Components

↓

Pages

Every page should reuse components.

------------------------------------------------------------

# 7. WHAT THIS PROJECT IS NOT

Do NOT build:

A startup SaaS landing page.

A generic React template.

A Tailwind showcase.

A Dribbble clone.

A UI animation demo.

A one-page portfolio.

An AI-generated layout.

A clone of any reference website.

------------------------------------------------------------

# 8. TARGET EXPERIENCE

Visitors should describe the experience as:

Professional

Elegant

Modern

Calm

Confident

Premium

Welcoming

Human

Local

Never:

Loud

Busy

Chaotic

Overdesigned

Generic

------------------------------------------------------------

# 9. ENGINEERING RULES

Every feature must satisfy:

Type Safety

Accessibility

Responsiveness

Performance

Semantic HTML

Reusable Components

Reduced Motion

Keyboard Support

Error Handling

Loading State

Empty State

Success State

Failure State

Production Build

If any requirement is missing,
the feature is incomplete.

------------------------------------------------------------

# 10. CODEX OPERATING RULES

Read every markdown completely.

Inspect the repository.

Inspect all assets.

Inspect package manager.

Inspect image folders.

Do NOT ask for permission after every phase.

Continue implementation automatically.

Fix discovered issues immediately.

Prefer reusable code.

Avoid duplication.

Prefer composition over inheritance.

Prefer accessibility over visual tricks.

Document assumptions.

Continue until release quality is achieved.

------------------------------------------------------------

# 11. DEVELOPMENT LIFECYCLE

Every feature follows this sequence.

Research

↓

Architecture

↓

Component

↓

Responsive

↓

Accessibility

↓

Animation

↓

Performance

↓

Testing

↓

Refinement

↓

Approval

Never skip directly from

Component

↓

Finished

------------------------------------------------------------

# 12. DEFINITION OF PREMIUM

Premium means:

Excellent typography.

Intentional spacing.

Thoughtful animation.

Excellent photography.

Fast interactions.

Responsive layouts.

Editorial composition.

Confident hierarchy.

Professional polish.

Premium does NOT mean:

Glass everywhere.

Huge gradients.

Random blur.

Floating blobs.

Oversized shadows.

Excessive animations.

Fancy effects.

------------------------------------------------------------

# 13. ANTI-TEMPLATE RULES

Reject automatically if:

Every section looks identical.

Every card has identical styling.

Every animation is fade-up.

Every layout is centered.

Every image has identical proportions.

Every button looks identical.

Every shadow is identical.

Everything is perfectly symmetrical.

Everything is glassmorphism.

Everything uses gradients.

Everything feels generated.

Every section repeats the same rhythm.

The website must feel intentionally designed.

------------------------------------------------------------

# 14. CODING STANDARD

Never write code merely because it works.

Write code because:

It scales.

It is reusable.

It is testable.

It is maintainable.

It is readable.

It is accessible.

It is performant.

Future developers should understand every decision.

------------------------------------------------------------

END OF PART 1

------------------------------------------------------------
# 15. BRAND POSITIONING
------------------------------------------------------------

The platform represents a premium Nigerian real estate company.

Visitors should immediately perceive the brand as:

• Experienced
• Honest
• Premium
• Trustworthy
• Helpful
• Local
• Modern
• Efficient
• Human

The experience should inspire confidence rather than urgency.

Avoid aggressive sales language.

The website should behave like an experienced real estate consultant,
not a salesperson.

------------------------------------------------------------
# 16. TARGET AUDIENCE
------------------------------------------------------------

Primary Audience

• Nigerians purchasing homes

• Nigerians renting apartments

• Diaspora buyers investing in Nigeria

• Commercial property investors

• Families relocating

• Corporate organizations

Secondary Audience

• Property owners listing homes

• Land developers

• Real estate investors

• Estate management companies

• Mortgage partners

------------------------------------------------------------
# 17. USER PERSONAS
------------------------------------------------------------

Persona A

Young Professional

Goal:
Rent an apartment quickly.

Needs:

Fast search

Clear pricing

Neighborhood information

WhatsApp contact

Inspection booking


----------------------------------

Persona B

Family

Goal:

Purchase a permanent home.

Needs:

Trust

School proximity

Safety

Large image galleries

Property comparisons


----------------------------------

Persona C

Diaspora Buyer

Goal:

Purchase property remotely.

Needs:

Credibility

Virtual tours

Verified listings

Fast communication

Professional presentation


----------------------------------

Persona D

Property Owner

Goal:

List property.

Needs:

Simple submission

Clear expectations

Fast response

Professional agency

------------------------------------------------------------
# 18. PRODUCT STRATEGY
------------------------------------------------------------

The platform should reduce uncertainty.

Every page should answer one or more questions.

Can I trust this agency?

Can I afford this property?

Is this property suitable?

How do I contact someone?

What happens next?

The website exists to remove friction.

------------------------------------------------------------
# 19. USER JOURNEY
------------------------------------------------------------

Discovery

↓

Homepage

↓

Property Search

↓

Property Details

↓

Trust Signals

↓

Agent Contact

↓

Inspection Booking

↓

Conversion

Every page should naturally lead toward the next step.

Never create dead ends.

------------------------------------------------------------
# 20. INFORMATION ARCHITECTURE
------------------------------------------------------------

Primary Navigation

Home

Buy

Rent

Sell

Properties

Locations

About

Blog

Contact

Secondary Navigation

Search

Favorites

Recently Viewed

Compare

Book Inspection

Language (future)

Account (future)

------------------------------------------------------------
# 21. ROUTING STRUCTURE
------------------------------------------------------------

/

Homepage

------------------------------------------------

/buy

Buying listings

------------------------------------------------

/rent

Rental listings

------------------------------------------------

/sell

Seller services

------------------------------------------------

/properties

Complete catalogue

------------------------------------------------

/properties/:slug

Individual property page

------------------------------------------------

/locations

Location directory

------------------------------------------------

/locations/:slug

Specific city or neighborhood

------------------------------------------------

/agents

Agency team

------------------------------------------------

/about

Company story

------------------------------------------------

/contact

Contact page

------------------------------------------------

/book-inspection

Booking form

------------------------------------------------

/favorites

Saved properties

------------------------------------------------

/compare

Property comparison

------------------------------------------------

/privacy

Privacy policy

------------------------------------------------

/terms

Terms

------------------------------------------------

/404

Custom error page

------------------------------------------------------------
# 22. PAGE PRIORITY
------------------------------------------------------------

Tier 1

Homepage

Property Details

Search

Buy

Rent

Contact

------------------------------------------------

Tier 2

Sell

Locations

Agents

------------------------------------------------

Tier 3

Blog

FAQ

Privacy

Terms

------------------------------------------------------------
# 23. HOMEPAGE STRUCTURE
------------------------------------------------------------

The homepage should tell a complete story.

Recommended order:

Announcement

↓

Navigation

↓

Hero

↓

Quick Search

↓

Featured Listings

↓

Property Categories

↓

Popular Locations

↓

Lifestyle Section

↓

Why Choose Us

↓

Buying Process

↓

Testimonials

↓

Statistics

↓

FAQs

↓

Final CTA

↓

Footer

Every section must have a purpose.

------------------------------------------------------------
# 24. HERO OBJECTIVES
------------------------------------------------------------

The hero should answer:

Who are we?

What do we offer?

What action should the visitor take?

Primary CTA

Browse Properties

Secondary CTA

Book Inspection

The hero should feel calm and luxurious.

Never overcrowd the hero.

------------------------------------------------------------
# 25. SEARCH EXPERIENCE
------------------------------------------------------------

Search is the heart of the platform.

Filters include:

Buy / Rent

Location

State

City

Area

Property Type

Bedrooms

Bathrooms

Parking

Price Range

Land Size

Property Status

Verified Listings

Newest

Featured

Luxury

Search should update instantly where practical.

------------------------------------------------------------
# 26. PROPERTY CARD REQUIREMENTS
------------------------------------------------------------

Each card should contain:

High-quality image

Verification badge

Property title

Location

Price

Property type

Bedrooms

Bathrooms

Area

Favorite button

Quick View

Agent avatar

Availability status

Hover interaction

Cards should remain readable on all devices.

------------------------------------------------------------
# 27. PROPERTY DETAILS PAGE
------------------------------------------------------------

Every property page should include:

Large image gallery

Image lightbox

Sticky enquiry panel

Property description

Features

Amenities

Location map placeholder

Nearby schools

Nearby hospitals

Nearby shopping

Property specifications

Floor plans (future)

Virtual tour placeholder

Agent profile

Inspection booking

Related properties

Recently viewed

------------------------------------------------------------
# 28. LOCATION PAGES
------------------------------------------------------------

Each location page should explain:

Overview

Lifestyle

Nearby landmarks

Schools

Transportation

Average property prices

Popular property types

Featured listings

Market insights

Area gallery

------------------------------------------------------------
# 29. SELLER EXPERIENCE
------------------------------------------------------------

Selling a property should feel effortless.

Flow:

Introduction

↓

Benefits

↓

How it works

↓

Valuation request

↓

Property submission

↓

Confirmation

Use a multi-step form with progress indicators.

------------------------------------------------------------
# 30. CONTACT EXPERIENCE
------------------------------------------------------------

Provide multiple contact options.

Contact Form

WhatsApp

Phone

Email

Office Address

Google Maps Placeholder

Business Hours

Emergency Contact (optional)

The user should never struggle to reach the agency.

------------------------------------------------------------
# 31. TRUST BUILDING
------------------------------------------------------------

Trust should be layered throughout the site.

Verified listings

Professional photography

Agent profiles

Client testimonials

Awards (only if genuine)

Years of experience (only if genuine)

Clear company information

Fast contact options

Transparent pricing

Never fabricate credibility.

------------------------------------------------------------
# 32. CONTENT POLICY
------------------------------------------------------------

Do not generate fake:

Reviews

Awards

Certifications

Statistics

Clients

Partners

Press mentions

Property listings

When placeholder content is necessary:

Clearly mark it as sample content.

------------------------------------------------------------
END OF PART 2

------------------------------------------------------------
# 33. APPLICATION ARCHITECTURE
------------------------------------------------------------

The application must follow a modular, scalable architecture.

Separate concerns clearly.

Presentation Layer

↓

Feature Layer

↓

Business Logic

↓

Shared Components

↓

Utilities

↓

Assets

Avoid tightly coupling pages to business logic.

Pages should compose reusable features rather than contain implementation logic.

------------------------------------------------------------
# 34. RECOMMENDED FOLDER STRUCTURE
------------------------------------------------------------

src/

    assets/
        images/
        icons/
        logos/

    components/

        layout/
        navigation/
        buttons/
        cards/
        forms/
        modals/
        overlays/
        typography/
        feedback/

    features/

        property-search/
        property-details/
        favorites/
        compare/
        inspections/
        testimonials/
        contact/
        locations/

    hooks/

    contexts/

    services/

    data/

    types/

    utils/

    pages/

    styles/

    animations/

    constants/

    config/

------------------------------------------------------------
# 35. COMPONENT PHILOSOPHY
------------------------------------------------------------

Components should be:

Reusable

Composable

Small

Typed

Independent

Predictable

Never create a component that only works on one page if it can be generalized.

Bad

LuxuryCardOne

LuxuryCardTwo

LuxuryCardThree

Good

PropertyCard

FeatureCard

StatCard

TestimonialCard

------------------------------------------------------------
# 36. COMPONENT QUALITY CHECKLIST
------------------------------------------------------------

Every component must satisfy:

✓ Fully typed

✓ Responsive

✓ Accessible

✓ Keyboard friendly

✓ Mobile friendly

✓ Dark text contrast

✓ Loading state

✓ Empty state

✓ Error state (where applicable)

✓ Motion support

✓ Reduced motion support

✓ Reusable props

✓ No duplicated logic

If any item is missing,
the component is incomplete.

------------------------------------------------------------
# 37. TYPESCRIPT STANDARDS
------------------------------------------------------------

Use strict mode.

Never use:

any

unless absolutely unavoidable.

Prefer:

interfaces

for public contracts.

Prefer:

type

for utility compositions.

Create shared types inside:

src/types

Do not redefine interfaces across files.

------------------------------------------------------------
# 38. DATA MODELS
------------------------------------------------------------

Core Models

Property

Agent

Location

Inspection

Testimonial

Service

FAQ

Category

Amenity

PropertyImage

SearchFilter

Inquiry

NavigationItem

Statistic

------------------------------------------------------------
# 39. PROPERTY MODEL
------------------------------------------------------------

A Property should support:

id

slug

title

description

price

currency

purpose

type

status

bedrooms

bathrooms

parking

landArea

buildingArea

yearBuilt

location

coordinates

images

agent

amenities

verificationStatus

featured

createdAt

updatedAt

------------------------------------------------------------
# 40. AGENT MODEL
------------------------------------------------------------

Agent should support:

id

name

position

phone

email

profileImage

languages

experience

bio

specialties

socialLinks

availability

------------------------------------------------------------
# 41. SEARCH MODEL
------------------------------------------------------------

Search state should contain:

Purpose

Location

State

City

Area

Price Range

Bedrooms

Bathrooms

Parking

Property Type

Amenities

Sort

Search Keyword

Pagination

Search should remain extensible.

------------------------------------------------------------
# 42. STATE MANAGEMENT
------------------------------------------------------------

Use local component state whenever possible.

Lift state only when required.

Global state should only contain:

Theme

Favorites

Compare

Authentication (future)

Recently Viewed

Avoid unnecessary global stores.

------------------------------------------------------------
# 43. DATA MANAGEMENT
------------------------------------------------------------

Business content should never be hardcoded inside UI components.

Separate:

Data

↓

Presentation

↓

Interaction

Example:

Property data

↓

PropertyCard

↓

Grid Layout

This allows future backend integration without rewriting UI.

------------------------------------------------------------
# 44. IMAGE MANAGEMENT
------------------------------------------------------------

All supplied property images must be used whenever appropriate.

Requirements:

Responsive loading

Correct aspect ratios

Meaningful alt text

Lazy loading

No stretched images

No distorted images

No blurry scaling

Prefer modern image formats when available.

------------------------------------------------------------
# 45. ASSET DISCOVERY
------------------------------------------------------------

Before implementation begins:

Inspect:

img/

images/

assets/

public/

Create an inventory of:

Property photos

Logos

Icons

Testimonials

Background images

Use existing assets first.

Do not replace them unless necessary.

------------------------------------------------------------
# 46. RESPONSIVE STRATEGY
------------------------------------------------------------

Design mobile-first.

Required breakpoints:

Mobile

Tablet

Laptop

Desktop

Large Desktop

The layout should gracefully adapt instead of merely shrinking.

Avoid horizontal scrolling.

------------------------------------------------------------
# 47. PERFORMANCE BUDGET
------------------------------------------------------------

The application should prioritize speed.

Targets:

Fast First Paint

Fast Interaction

Smooth scrolling

Minimal layout shift

Optimized images

Minimal JavaScript

Code splitting

Lazy loading

Efficient animation

Avoid unnecessary re-renders.

------------------------------------------------------------
# 48. ACCESSIBILITY STANDARDS
------------------------------------------------------------

Meet WCAG 2.2 AA where practical.

Requirements:

Semantic HTML

Heading hierarchy

Alt text

ARIA where necessary

Visible focus states

Keyboard navigation

Reduced motion

Screen reader support

High color contrast

Skip navigation link

Never sacrifice accessibility for aesthetics.

------------------------------------------------------------
# 49. SEO REQUIREMENTS
------------------------------------------------------------

Every page should support:

Unique title

Meta description

Open Graph tags

Twitter cards

Structured headings

Canonical URL

Schema-ready markup

Meaningful URLs

Readable slugs

Descriptive image alt text

The website should be indexable from day one.

------------------------------------------------------------
# 50. ERROR HANDLING
------------------------------------------------------------

Every feature must anticipate failure.

Required states:

Loading

Empty

No Results

Network Failure

Unexpected Error

Success

Never leave users without feedback.

------------------------------------------------------------
# 51. FUTURE BACKEND READINESS
------------------------------------------------------------

Although the first version may use local data,
the architecture must be backend-ready.

Future integrations may include:

REST API

GraphQL

Supabase

Firebase

Custom CMS

Headless CMS

The UI should not require major refactoring when backend data is introduced.

------------------------------------------------------------
# 52. DEFINITION OF DONE
------------------------------------------------------------

A feature is considered complete only when:

✓ Functionality works correctly

✓ Fully responsive

✓ Accessible

✓ Animated appropriately

✓ Production build passes

✓ TypeScript has zero errors

✓ Lint passes

✓ Performance acceptable

✓ Code reviewed

✓ Documentation updated

If any requirement is missing,
the feature is not complete.

------------------------------------------------------------
END OF PART 3

# REAL_ESTATE_PROJECT.md

# Nigerian Premium Real Estate Platform

**Version:** 2.0  
**Status:** Production Specification  
**Primary Stack:** React, TypeScript, Vite, HTML, CSS  
**Motion:** Framer Motion  
**Target:** Commercial-quality responsive web application

---

## 0. Purpose

This document is the master engineering specification for a premium Nigerian real estate platform.

The finished product must feel like a carefully designed property experience produced by an experienced product and engineering team. It is not a generic landing page, template recreation, animation showcase, or one-page portfolio.

Every design, content, and engineering decision must improve trust, usability, clarity, performance, accessibility, and conversion.

---

## 1. Specification Precedence

Read all project documents completely before implementation.

When requirements conflict, use this order:

1. `REAL_ESTATE_PROJECT.md` — master product and engineering requirements
2. `DESIGN_SYSTEM.md` — visual language, typography, spacing, layout, components, and photography
3. `MOTION_SYSTEM.md` — motion architecture, timing, interaction, transitions, and reduced-motion behavior
4. `UX_PLAYBOOK.md` — psychology, storytelling, trust, conversion, and Nigerian buyer journeys
5. `REAL_ESTATE_AGENTS.md` — audits, acceptance gates, regression review, and release approval

Do not silently ignore conflicts. Record any important assumption in `TODO_RELEASE.md`.

---

## 2. Mission

Build a premium Nigerian real estate website that communicates:

- Trust
- Luxury
- Warmth
- Professionalism
- Local expertise
- Reliability
- Human service
- Modern convenience

The visual experience should be calm and confident, never loud, cheap, artificial, or overly decorative.

---

## 3. Product Goals

The platform must help users:

- Search for properties
- Browse homes for sale
- Browse rental properties
- View detailed property information
- Save properties
- Compare properties
- Review recently viewed properties
- Contact an agent
- Book an inspection
- Request virtual viewing support
- Explore cities, estates, and neighborhoods
- Understand the buying, renting, and selling process
- Submit a property for sale or rent
- Build confidence in the agency

Every route and major section must support at least one meaningful user goal.

---

## 4. Success Criteria

A first-time visitor should be able to:

- Understand the company’s purpose within 5 seconds
- Find property search controls within 15 seconds
- Open a relevant listing within 30 seconds
- Contact an agent or begin booking an inspection within 2 minutes

The interface should reduce uncertainty, not create pressure.

---

## 5. Product Principles

1. Clarity before decoration
2. Content before animation
3. Performance before complexity
4. Accessibility before aesthetics
5. Consistency before novelty
6. Trust before conversion
7. Quality before quantity
8. Simplicity before cleverness
9. Reusable systems before page-specific hacks
10. Real user value before visual trends

---

## 6. Development Philosophy

Do not build isolated pages first.

Build reusable systems in this order:

1. Application shell
2. Design tokens
3. Typography system
4. Layout primitives
5. Buttons and controls
6. Forms
7. Cards
8. Property data models
9. Search and filtering
10. Shared feature components
11. Pages and route compositions
12. Motion refinement
13. Accessibility and performance QA
14. Release review

Pages should compose shared components and features rather than contain duplicated business logic.

---

## 7. What This Project Is Not

Do not build:

- A generic React starter
- A SaaS landing page
- A copied reference site
- A Dribbble-style concept with weak usability
- A one-page portfolio
- A glassmorphism showcase
- A collection of disconnected animations
- A site filled with fabricated achievements
- A design that looks generated by AI
- An interface optimized only for desktop

---

## 8. Target Experience

The final product should feel:

- Professional
- Elegant
- Modern
- Calm
- Confident
- Premium
- Welcoming
- Human
- Local
- Fast

It must never feel:

- Loud
- Busy
- Chaotic
- Overdesigned
- Generic
- Repetitive
- Empty
- Misleading
- Unfinished

---

## 9. Definition of Premium

Premium means:

- Excellent typography
- Intentional whitespace
- Strong editorial composition
- High-quality imagery
- Clear hierarchy
- Restrained motion
- Fast interactions
- Thoughtful details
- Consistent behavior
- Professional content presentation
- Excellent mobile usability

Premium does not mean:

- Excessive blur
- Random gradients
- Floating blobs
- Huge shadows
- Constant movement
- Decorative clutter
- Overlapping text without purpose
- Tiny low-contrast copy
- Unusable experimental navigation

---

## 10. Anti-Template and Anti-AI Rules

Reject or redesign work when:

- Every section uses the same centered layout
- Every card has identical proportions and styling
- Every section uses the same fade-up animation
- Every image uses the same crop
- Every surface uses glassmorphism
- Gradients are used without a clear brand purpose
- Decorative shapes replace meaningful composition
- Copy is generic, repetitive, exaggerated, or fabricated
- Spacing rhythm is identical across every section
- Content hierarchy is weak
- Desktop layouts merely shrink on mobile
- Components exist only to create visual variety
- Testimonials, awards, partners, statistics, or reviews are invented
- The site resembles a generic generated real estate template

Use asymmetry, varied editorial rhythm, image scale changes, controlled whitespace, and content-led composition deliberately.

---

## 11. Codex Operating Rules

Codex must:

- Read every specification file fully before editing code
- Inspect the repository before choosing architecture
- Identify the package manager and existing scripts
- Inventory all images, icons, logos, and fonts
- Use supplied assets before considering replacements
- Preserve working code unless improvement is necessary
- Continue through normal implementation phases without asking for approval
- Run typecheck, lint, tests, and production build after meaningful changes
- Fix errors before moving forward
- Prefer reusable typed components
- Keep data separate from UI
- Avoid duplicated logic and styling
- Support keyboard access and reduced motion
- Document assumptions in `TODO_RELEASE.md`
- Never claim a feature works unless it has been tested
- Never fabricate business information
- Continue until the release requirements are met

When two implementations are equally valid, choose the one that is:

1. Simpler
2. More accessible
3. More reusable
4. Easier to maintain
5. Better performing
6. Easier to integrate with a backend later

---

## 12. Target Audience

### Primary audiences

- Nigerians buying homes
- Nigerians renting apartments
- Families relocating
- Diaspora buyers investing in Nigeria
- Commercial property investors
- Professionals searching in Lagos, Abuja, Port Harcourt, Ibadan, and other major markets

### Secondary audiences

- Property owners listing homes
- Landowners
- Developers
- Estate management companies
- Corporate relocation teams
- Mortgage and finance partners

---

## 13. Core Personas

### Young Professional

**Goal:** Rent a suitable apartment quickly.

Needs:

- Fast mobile search
- Clear price display
- Accurate location information
- WhatsApp contact
- Inspection booking
- Commute and neighborhood context

### Family Buyer

**Goal:** Purchase a long-term family home.

Needs:

- Trust
- Large galleries
- School and hospital proximity
- Security and neighborhood context
- Property comparison
- Agent guidance

### Diaspora Investor

**Goal:** Buy or invest remotely.

Needs:

- Verified listings
- Clear ownership and verification messaging
- Virtual viewing support
- Professional agent profiles
- Reliable communication
- Transparent process explanations

### Property Owner

**Goal:** Sell or rent out a property.

Needs:

- Simple submission
- Valuation request
- Clear process
- Professional handling
- Fast response
- Privacy and trust

---

## 14. User Journey

Primary journey:

Discovery  
→ Homepage  
→ Search or location exploration  
→ Listing results  
→ Property details  
→ Trust and verification  
→ Agent contact  
→ Inspection booking  
→ Confirmation

Secondary journey:

Homepage  
→ Sell  
→ Valuation request  
→ Property submission  
→ Confirmation

Do not create dead ends. Every major page must provide a clear next action.

---

## 15. Primary Navigation

- Home
- Buy
- Rent
- Sell
- Properties
- Locations
- About
- Contact

Supporting actions:

- Search
- Favorites
- Compare
- Recently Viewed
- Book Inspection
- WhatsApp
- Account placeholder for future versions

The primary navigation must remain clear on mobile and desktop.

---

## 16. Route Structure

Required routes:

```text
/
 /buy
 /rent
 /sell
 /properties
 /properties/:slug
 /locations
 /locations/:slug
 /agents
 /about
 /contact
 /book-inspection
 /favorites
 /compare
 /privacy
 /terms
 /*
```

Optional future routes:

```text
/blog
/blog/:slug
/account
/dashboard
/mortgage-calculator
```

All public routes require unique metadata and useful empty/error behavior.

---

## 17. Page Priority

### Tier 1

- Homepage
- Properties catalogue
- Buy listings
- Rent listings
- Property details
- Search
- Contact
- Inspection booking

### Tier 2

- Sell
- Locations
- Location detail
- Agents
- About
- Favorites
- Compare

### Tier 3

- Blog placeholder
- Privacy
- Terms
- FAQ
- Custom 404

Complete Tier 1 to release quality before investing heavily in Tier 3.

---

## 18. Homepage Narrative

Recommended order:

1. Announcement or trust message
2. Navigation
3. Hero
4. Quick property search
5. Featured properties
6. Property categories
7. Popular locations
8. Lifestyle/editorial story
9. Why choose the agency
10. Buying or renting process
11. Testimonials
12. Genuine statistics or neutral value statements
13. FAQ
14. Final conversion section
15. Footer

Every section must answer a user question or support a conversion decision.

---

## 19. Hero Requirements

The hero must answer:

- Who is the company?
- What service does it provide?
- Where does it operate?
- What should the visitor do next?

Suggested actions:

- Browse Properties
- Search Homes
- Book an Inspection
- List Your Property

Requirements:

- Strong image treatment using supplied assets
- Readable heading and supporting copy
- One dominant action
- One secondary action
- Search access above or immediately below the fold
- Calm, restrained motion
- Excellent mobile crop and text layout

Do not overcrowd the hero.

---

## 20. Search Experience

Search is a core product feature, not a decorative form.

Supported filters:

- Buy or Rent
- State
- City
- Area or neighborhood
- Property type
- Minimum price
- Maximum price
- Bedrooms
- Bathrooms
- Parking
- Land size
- Building size
- Furnishing
- Verification status
- Featured
- Newest
- Luxury
- Amenities
- Keyword
- Sort order

Requirements:

- Clear active-filter display
- Reset all filters
- Mobile filter drawer
- Empty result state
- Search loading state
- Result count
- URL-ready query model
- Accessible labels
- Keyboard operation
- Extensible data structure

Filtering may use local mock data initially, but architecture must support an API later.

---

## 21. Property Card

Each property card should support:

- Main image
- Image fallback
- Verification badge
- Featured badge when applicable
- Property title
- Location
- Price and currency
- Purpose
- Property type
- Bedrooms
- Bathrooms
- Parking
- Area
- Favorite action
- Compare action
- Availability status
- Agent information when appropriate
- Accessible link to property details
- Hover and focus interactions
- Mobile touch behavior

Card variants may differ by context:

- Editorial featured card
- Standard grid card
- Compact horizontal card
- Comparison card
- Recently viewed card

Do not force one card design into every context.

---

## 22. Property Details Page

Required sections:

- Breadcrumbs
- Property status and verification
- Large image gallery
- Lightbox
- Title, location, and price
- Core facts
- Property description
- Features
- Amenities
- Map placeholder
- Nearby amenities
- Schools
- Hospitals
- Shopping
- Transport
- Property specifications
- Agent profile
- Contact and WhatsApp actions
- Inspection booking
- Share action
- Save and compare
- Related properties
- Recently viewed
- Disclaimer

Future-ready sections:

- Floor plans
- Video tour
- 3D or virtual tour
- Mortgage estimate
- Property history
- Document verification status

Desktop may use a sticky contact panel. Mobile must use an accessible, non-obstructive action pattern.

---

## 23. Location Pages

Each location page should support:

- Overview
- Lifestyle description
- Major landmarks
- Transportation
- Schools
- Hospitals
- Shopping
- Typical property types
- Market summary
- Featured listings
- Area gallery
- Related locations
- Contact CTA

Do not invent average prices or market statistics unless the values are explicitly provided and sourced.

---

## 24. Seller Experience

Recommended flow:

1. Introduction
2. Benefits
3. Process
4. Valuation request
5. Property information
6. Contact information
7. Review
8. Confirmation

Use a multi-step form when the amount of information justifies it.

The form should support:

- Progress indication
- Back and next controls
- Field validation
- Error summary
- Save-state-ready architecture
- Success confirmation
- Privacy notice
- Optional WhatsApp handoff

Do not require unnecessary information before initial contact.

---

## 25. Contact Experience

Provide:

- Contact form
- Phone
- Email
- WhatsApp
- Office address
- Business hours
- Map placeholder or integration-ready area
- Agent contact options
- Response expectation

The user must never struggle to reach the agency.

---

## 26. Trust System

Trust should be layered across the experience through:

- Verified listing indicators
- Clear business identity
- Professional property photography
- Real agent profiles
- Transparent process explanations
- Genuine testimonials only
- Clear contact information
- Responsive forms
- Privacy messaging
- Realistic language
- Visible property status
- Helpful FAQs

Never fabricate:

- Reviews
- Awards
- Partners
- Certifications
- Press mentions
- Sales figures
- Years of experience
- Property availability
- Client names
- Market statistics

Placeholder data must be labeled clearly in source data and easy to replace.

---

## 27. Content Standards

Content must be:

- Clear
- Professional
- Human
- Specific
- Locally relevant
- Free from exaggerated marketing claims
- Easy to scan
- Helpful to first-time buyers and renters

Avoid:

- “Dream home awaits” repetition
- Empty luxury language
- Excessive exclamation marks
- Fake urgency
- Long generic paragraphs
- Unverified legal claims
- Promises the business cannot guarantee

Use Nigerian property terminology where appropriate, while keeping language understandable to diaspora visitors.

---

## 28. Application Architecture

Use a modular architecture separating:

- Pages
- Features
- Shared components
- Data
- Types
- Hooks
- Services
- Utilities
- Motion definitions
- Styles
- Configuration

Pages should compose features. They should not become large files containing data, UI, filtering, validation, and animation logic together.

---

## 29. Recommended Folder Structure

```text
src/
  assets/
    images/
    icons/
    logos/

  components/
    layout/
    navigation/
    buttons/
    cards/
    forms/
    feedback/
    modals/
    overlays/
    typography/

  features/
    property-search/
    property-details/
    favorites/
    compare/
    recently-viewed/
    inspections/
    testimonials/
    contact/
    locations/
    seller-submission/

  pages/

  data/

  types/

  hooks/

  contexts/

  services/

  utils/

  constants/

  config/

  animations/

  styles/

  tests/
```

Adapt this structure to the existing repository when necessary. Do not reorganize working code without a clear benefit.

---

## 30. Component Standards

Components must be:

- Typed
- Reusable
- Composable
- Responsive
- Accessible
- Predictable
- Testable
- Focus-state aware
- Reduced-motion aware
- Independent from hardcoded business content

Every interactive component must consider:

- Default
- Hover
- Focus-visible
- Active
- Disabled
- Loading
- Success
- Error

Where relevant, also provide:

- Empty
- No results
- Offline
- Unavailable

---

## 31. TypeScript Standards

- Enable strict mode
- Avoid `any`
- Use shared domain types
- Keep public component props explicit
- Prefer discriminated unions for variants and state
- Avoid duplicated interfaces
- Type form data and validation errors
- Type animation variant helpers where practical
- Keep API-ready types separate from purely visual props when useful

Use `interface` for extendable public object contracts and `type` for unions, aliases, and compositions.

---

## 32. Core Data Models

Required models:

- `Property`
- `PropertyImage`
- `PropertyLocation`
- `Agent`
- `Amenity`
- `SearchFilters`
- `InspectionRequest`
- `PropertyInquiry`
- `Testimonial`
- `Service`
- `LocationProfile`
- `FAQ`
- `NavigationItem`
- `PropertyCategory`
- `ComparisonItem`
- `RecentlyViewedItem`

---

## 33. Property Model Guidance

A property should be able to represent:

```text
id
slug
title
summary
description
price
currency
purpose
propertyType
status
verificationStatus
bedrooms
bathrooms
toilets
parkingSpaces
landArea
buildingArea
yearBuilt
furnishing
location
coordinates
images
agent
amenities
features
featured
available
createdAt
updatedAt
```

Do not require fields that do not apply to every property type. Use optional fields responsibly.

---

## 34. State Management

Use the smallest appropriate state scope.

Local state:

- Menu state
- Accordion state
- Modal state
- Form steps
- Local input
- Gallery controls

Shared state:

- Favorites
- Compare
- Recently viewed
- Search state when shared across routes
- Future authentication

Avoid adding a global state library unless the application complexity genuinely requires it.

Persist favorites, compare, and recently viewed locally when practical. Handle storage failures safely.

---

## 35. Data Separation

Do not hardcode property records, testimonials, FAQs, navigation, or agent information inside presentational components.

Use:

```text
data
→ typed feature logic
→ reusable component
→ route composition
```

This separation must make future API or CMS integration possible without redesigning the entire interface.

---

## 36. Asset Discovery and Image Policy

Before implementation:

1. Inspect `img/`, `images/`, `assets/`, `public/`, and similar folders
2. Create an internal asset inventory
3. Identify:
   - Logo files
   - Property photos
   - Agent photos
   - Couple/testimonial photos
   - Background images
   - Icons
   - Decorative assets
4. Match assets to likely sections
5. Record missing categories in `TODO_RELEASE.md`

Image requirements:

- Preserve aspect ratio
- Avoid stretching
- Use meaningful alt text
- Use empty alt text for purely decorative imagery
- Use lazy loading below the fold
- Set dimensions or aspect ratios to reduce layout shift
- Provide fallback behavior
- Optimize oversized files where tooling permits
- Do not replace supplied images without a valid reason

---

## 37. Responsive Strategy

Use mobile-first implementation.

Required layout ranges:

- Small mobile
- Standard mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Do not merely shrink desktop layouts.

Mobile requirements:

- Clear navigation
- Touch targets of practical size
- No horizontal overflow
- Legible body text
- Simplified motion
- Accessible filter drawer
- Usable sticky actions
- Correct image crops
- Forms that work with mobile keyboards
- No content hidden solely for convenience unless it is genuinely nonessential

---

## 38. Accessibility

Target WCAG 2.2 AA where practical.

Required:

- Semantic HTML
- Logical heading order
- Keyboard navigation
- Visible focus states
- Skip-to-content link
- Accurate labels
- Error messages connected to fields
- Accessible modal focus management
- Escape-key support where expected
- Proper button and link semantics
- Meaningful image alt text
- Sufficient color contrast
- Reduced-motion support
- No information communicated by color alone
- Screen-reader-friendly status messages
- Accessible carousel and gallery controls
- Adequate target sizes

Do not use ARIA to replace correct native HTML.

---

## 39. Performance Budget

Prioritize:

- Fast initial render
- Low layout shift
- Responsive interactions
- Efficient image delivery
- Route-level code splitting
- Lazy-loaded heavy features
- Minimal animation overhead
- Limited third-party dependencies
- Avoidance of unnecessary re-renders

Targets for production review:

- No preventable console errors
- No major layout shift caused by images
- Smooth scrolling on normal mobile hardware
- No long-running animation loops without purpose
- No oversized uncompressed imagery where optimization is possible
- No blocking font strategy that leaves content invisible
- Production bundle reviewed for obvious waste

Do not add a library for functionality that can be implemented cleanly with the existing stack.

---

## 40. SEO

Every indexable route must support:

- Unique title
- Unique meta description
- Canonical-ready URL
- Open Graph metadata
- Social sharing image strategy
- Logical headings
- Descriptive links
- Human-readable slugs
- Meaningful alt text
- Schema-ready structure
- Crawlable navigation
- Custom 404

Future schema targets:

- `RealEstateAgent`
- `Residence`
- `Offer`
- `BreadcrumbList`
- `FAQPage`

Do not publish fabricated structured data.

---

## 41. Error and Feedback States

Every data-driven feature must account for:

- Initial state
- Loading
- Success
- Empty
- No results
- Validation error
- Network error
- Unexpected failure
- Unavailable item

Errors should explain what happened and what the user can do next.

Never leave an empty area, infinite spinner, or silent failure.

---

## 42. Future Backend Readiness

The initial build may use local typed data.

Architecture must support later integration with:

- REST API
- GraphQL
- Supabase
- Firebase
- Headless CMS
- Custom property management backend
- Authentication provider
- CRM
- Email provider
- WhatsApp workflow
- Map provider
- Analytics

UI components must not depend on the exact shape of hardcoded sample files when an adapter layer would prevent future rework.

---

## 43. Privacy and Security Basics

Even in a frontend-first version:

- Do not expose secrets in client code
- Do not commit API keys
- Validate and sanitize form data
- Do not simulate successful submission when no backend exists
- Clearly identify demo behavior
- Use safe external links
- Add `rel="noopener noreferrer"` where appropriate
- Avoid collecting unnecessary personal data
- Include privacy consent where required
- Avoid insecure HTML injection
- Keep dependencies reviewed and current where practical

---

## 44. Analytics Readiness

Prepare clean event boundaries for future analytics without hardwiring a vendor.

Potential events:

- Search submitted
- Filter applied
- Property opened
- Property favorited
- Property compared
- Phone clicked
- WhatsApp clicked
- Contact form submitted
- Inspection flow started
- Inspection flow completed
- Seller form started
- Seller form completed

Do not add invasive tracking by default.

---

## 45. Testing Strategy

At minimum, test:

- Application renders
- Main routes load
- Navigation works
- Search filters produce expected results
- Search reset works
- Empty results render correctly
- Favorites work
- Compare works
- Recently viewed updates
- Property page opens from cards
- Forms validate correctly
- Modals and drawers support keyboard use
- Reduced-motion behavior works
- Responsive layouts do not overflow
- Production build succeeds

Use the testing tools already present in the repository. Add focused tests where they protect important behavior.

---

## 46. Browser Review

Review current versions of:

- Chrome
- Edge
- Firefox
- Safari where available
- Mobile Chrome
- Mobile Safari where available

At minimum, prevent browser-specific layout failures and unsupported critical interactions.

---

## 47. Development Phases

### Phase 0 — Repository and Asset Audit

- Inspect files and package manager
- Run the existing app
- Inventory assets
- Review scripts and dependencies
- Identify missing content
- Create `TODO_RELEASE.md`
- Record assumptions

**Gate:** Existing project runs or blockers are documented.

### Phase 1 — Foundation

- Establish routing
- Create application shell
- Implement design tokens
- Implement typography
- Build layout primitives
- Add global accessibility foundations
- Create typed core models
- Prepare sample data layer

**Gate:** Foundation is responsive, type-safe, and buildable.

### Phase 2 — Shared Components

- Navigation
- Footer
- Buttons
- Inputs
- Selects
- Range controls
- Form feedback
- Property cards
- Testimonial cards
- Location cards
- Modal and drawer
- Empty and loading states

**Gate:** Components pass responsive, focus, and reduced-motion checks.

### Phase 3 — Homepage and Editorial Experience

- Homepage narrative
- Hero
- Search entry
- Featured properties
- Locations
- Services/process
- Testimonials
- FAQ
- Final CTA

**Gate:** Homepage feels premium and complete on mobile and desktop.

### Phase 4 — Property Discovery

- Buy page
- Rent page
- Properties catalogue
- Filter logic
- Sort
- Mobile filters
- Empty states
- URL-ready search state

**Gate:** Users can reliably find and open relevant properties.

### Phase 5 — Property Detail and Utility Features

- Property details
- Gallery and lightbox
- Contact panel
- Inspection action
- Favorites
- Compare
- Recently viewed
- Related properties

**Gate:** Property journey works from discovery to enquiry.

### Phase 6 — Lead Generation

- Contact
- Inspection booking
- Seller flow
- Validation
- Confirmation states
- Honest demo or backend behavior

**Gate:** Forms are accessible and never pretend to submit successfully without a real handler.

### Phase 7 — Supporting Pages

- Locations
- Location details
- Agents
- About
- Privacy
- Terms
- 404

**Gate:** No incomplete navigation destinations remain.

### Phase 8 — Motion and Visual Refinement

- Apply motion hierarchy
- Refine hero choreography
- Improve transitions
- Remove repetitive animation
- Verify reduced motion
- Review animation budget

**Gate:** Motion enhances hierarchy without delaying interaction.

### Phase 9 — Quality Assurance

- Typecheck
- Lint
- Tests
- Build
- Accessibility review
- Responsive review
- Performance review
- SEO review
- Content review
- Browser review

**Gate:** All release blockers fixed or explicitly documented.

### Phase 10 — Release Review

- Run every audit in `REAL_ESTATE_AGENTS.md`
- Update `TODO_RELEASE.md`
- Verify README
- Verify commands
- Confirm production build
- Issue PASS, CONDITIONAL PASS, or FAIL

---

## 48. Iterative Development Rule

Do not scaffold every page with weak placeholder UI and postpone quality until the end.

For each phase:

1. Implement a coherent vertical slice
2. Test it
3. Review it visually
4. Fix major issues
5. Confirm responsive behavior
6. Continue

A smaller number of polished, reusable systems is better than many unfinished pages.

---

## 49. Required Project Documentation

Maintain:

### `README.md`

Include:

- Project purpose
- Stack
- Installation
- Development command
- Test command
- Build command
- Folder overview
- Asset policy
- Known limitations
- Deployment notes

### `TODO_RELEASE.md`

Track:

- Completed phases
- Remaining tasks
- Assumptions
- Missing assets
- Known bugs
- Accessibility findings
- Performance findings
- SEO status
- Test status
- Build status
- Release blockers
- Final audit result

Do not use `TODO_RELEASE.md` to excuse unfinished core functionality.

---

## 50. Definition of Done for a Feature

A feature is complete only when:

- It works
- It is typed
- It is responsive
- It is keyboard accessible
- It has visible focus
- It supports reduced motion
- It handles loading where relevant
- It handles empty state where relevant
- It handles errors where relevant
- It uses reusable components
- It avoids duplicated logic
- It has been visually reviewed
- It passes relevant tests
- It does not break production build
- Documentation has been updated when necessary

---

## 51. Release Acceptance

The application may receive:

### PASS

All critical requirements are complete. No known release blockers remain.

### CONDITIONAL PASS

Core experience is complete and stable, but a small number of clearly documented noncritical tasks remain.

### FAIL

Any of the following exists:

- Broken production build
- Critical route failure
- Search unusable
- Property details inaccessible
- Major mobile overflow
- Unusable forms
- Severe accessibility failure
- Fabricated trust content
- Missing keyboard support for critical interactions
- Motion causing major usability or performance problems
- Major console errors
- Core navigation destinations unfinished

Codex must not self-approve a FAIL condition.

---

## 52. Final Production Checklist

### Product

- [ ] All required routes exist
- [ ] Main journeys are complete
- [ ] No dead-end core pages
- [ ] Search works
- [ ] Property details work
- [ ] Contact paths are clear
- [ ] Seller flow works
- [ ] Favorites work
- [ ] Compare works
- [ ] Recently viewed works

### Design

- [ ] Design system followed
- [ ] No generic template appearance
- [ ] Typography hierarchy is strong
- [ ] Spacing is intentional
- [ ] Images are correctly cropped
- [ ] Mobile layouts are designed, not merely reduced
- [ ] Visual rhythm varies appropriately

### Motion

- [ ] Motion system followed
- [ ] No repetitive fade-up pattern
- [ ] Reduced motion works
- [ ] No excessive simultaneous animation
- [ ] Interaction feedback is immediate
- [ ] Motion does not block content

### Accessibility

- [ ] Keyboard navigation works
- [ ] Focus is visible
- [ ] Forms have labels
- [ ] Errors are announced appropriately
- [ ] Modals manage focus
- [ ] Heading order is logical
- [ ] Contrast is acceptable
- [ ] Skip link exists
- [ ] Images have appropriate alt behavior

### Engineering

- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Tests pass
- [ ] Production build passes
- [ ] No critical console errors
- [ ] No committed secrets
- [ ] Shared types are used
- [ ] Business data is separated from UI
- [ ] README is accurate

### Performance and SEO

- [ ] Images are optimized
- [ ] Layout shift is controlled
- [ ] Heavy routes are split when useful
- [ ] Metadata is unique
- [ ] URLs are readable
- [ ] 404 works
- [ ] Social metadata strategy exists
- [ ] No fabricated schema or statistics

---

## 53. Final Codex Directive

Build the platform as a complete product, not a collection of screenshots.

Do not stop after scaffolding. Do not stop after the homepage. Do not postpone mobile, accessibility, motion, testing, or performance until an undefined future phase.

Use the supplied assets, follow all specification files, execute the implementation phases in order, maintain `TODO_RELEASE.md`, and continue until the release review produces PASS or a genuinely justified CONDITIONAL PASS.
