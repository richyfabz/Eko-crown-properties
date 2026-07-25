# MOTION_SYSTEM.md

# Nigerian Premium Real Estate Platform

Version: 2.0

Status:
Production Motion System

Supports:

REAL_ESTATE_PROJECT.md

DESIGN_SYSTEM.md

------------------------------------------------------------
0. PURPOSE
------------------------------------------------------------

Motion exists to improve understanding.

Not to impress.

Not to decorate.

Not to entertain.

Every animation should answer at least one question:

• What changed?

• Where did it come from?

• What should the user notice?

• What can the user do next?

If motion does not improve clarity or usability,
it should be removed.

------------------------------------------------------------
1. MOTION PHILOSOPHY
------------------------------------------------------------

The motion language should feel:

Elegant

Calm

Confident

Natural

Intentional

Responsive

Premium

Motion should never feel:

Chaotic

Playful

Bouncy

Hyperactive

Distracting

Game-like

------------------------------------------------------------
2. DESIGN + MOTION RELATIONSHIP
------------------------------------------------------------

Design defines:

What users see.

Motion defines:

How interfaces change.

Motion must reinforce the visual hierarchy already established
by the Design System.

Animation must never compensate for poor layout.

------------------------------------------------------------
3. MOTION PRINCIPLES
------------------------------------------------------------

Every animation should satisfy one or more of these principles.

1.

Guide attention

2.

Reveal hierarchy

3.

Provide feedback

4.

Reduce uncertainty

5.

Maintain continuity

6.

Strengthen brand quality

------------------------------------------------------------
4. MOTION PERSONALITY
------------------------------------------------------------

Imagine opening the door of a luxury hotel.

Nothing rushes.

Nothing jumps.

Nothing competes.

The interface welcomes the user with confidence.

Every transition feels effortless.

------------------------------------------------------------
5. PERFORMANCE FIRST
------------------------------------------------------------

Animation should never reduce responsiveness.

Preferred animated properties:

Opacity

Transform

Scale

Translate

Avoid animating:

Width

Height

Top

Left

Right

Bottom

Large box-shadows

Blur radius

These often trigger unnecessary layout or paint work.

------------------------------------------------------------
6. MOTION HIERARCHY
------------------------------------------------------------

Not everything should move.

Prioritize animation in this order:

Primary page transitions

↓

Navigation

↓

Hero

↓

Interactive components

↓

Cards

↓

Supporting content

↓

Decorative elements

Background decoration should move the least.

------------------------------------------------------------
7. MOTION BUDGET
------------------------------------------------------------

Limit simultaneous animation.

At any given moment:

One primary animation

Up to two supporting animations

Background motion should remain subtle.

Avoid multiple competing focal points.

------------------------------------------------------------
8. DURATION TOKENS
------------------------------------------------------------

Define reusable timing categories.

Instant

Fast

Normal

Slow

Very Slow

Each animation should use a shared duration token.

Avoid arbitrary timing values throughout the codebase.

------------------------------------------------------------
9. EASING TOKENS
------------------------------------------------------------

Use a small set of easing curves.

Examples:

Standard

Emphasized

Entrance

Exit

Linear

Every transition should reuse one of these.

Avoid inventing new easing curves for individual components.

------------------------------------------------------------
10. DELAY RULES
------------------------------------------------------------

Avoid unnecessary delays.

Users should never wait for content that is already available.

Use delays only when they improve sequencing or readability.

Never delay critical actions.

------------------------------------------------------------
11. STAGGERING
------------------------------------------------------------

Use staggered entrances only when:

Displaying related content.

Examples:

Property grids

Navigation items

Feature lists

Testimonial collections

Avoid staggering unrelated sections.

------------------------------------------------------------
12. PAGE TRANSITIONS
------------------------------------------------------------

Page transitions should communicate continuity.

Recommended behavior:

Current page exits gracefully.

↓

New page enters smoothly.

↓

Focus shifts naturally.

Avoid dramatic wipes, flips, or spins.

------------------------------------------------------------
13. SCROLL ANIMATIONS
------------------------------------------------------------

Scrolling should reveal content naturally.

Use motion to support reading.

Never require scrolling to trigger critical functionality.

Content should remain accessible without animation.

------------------------------------------------------------
14. HERO ANIMATION
------------------------------------------------------------

Hero animation establishes the tone.

Sequence example:

Background image settles first.

↓

Headline appears.

↓

Supporting copy.

↓

Primary CTA.

↓

Secondary CTA.

↓

Search interface.

The hero should feel welcoming, not theatrical.

------------------------------------------------------------
15. NAVIGATION MOTION
------------------------------------------------------------

Navigation should feel responsive.

Examples:

Sticky transition

Menu open

Menu close

Dropdown reveal

Drawer slide

All transitions should be fast and predictable.

------------------------------------------------------------
16. CARD ANIMATIONS
------------------------------------------------------------

Cards should respond to interaction.

Hover:

Subtle elevation

Slight scale or lift

Focus:

Visible outline

Touch:

Immediate tactile feedback

Avoid exaggerated movement.

------------------------------------------------------------
17. BUTTON ANIMATIONS
------------------------------------------------------------

Buttons should acknowledge interaction.

Supported states:

Hover

Focus

Pressed

Loading

Disabled

Feedback should feel immediate.

Never delay button responsiveness.

------------------------------------------------------------
18. FORM FEEDBACK
------------------------------------------------------------

Forms should communicate progress.

Examples:

Field validation

Error appearance

Success confirmation

Submission progress

Animations should reinforce confidence rather than draw attention.

------------------------------------------------------------
19. LOADING ANIMATIONS
------------------------------------------------------------

Prefer:

Skeleton loaders

Shimmer effects (subtle)

Progress indicators

Avoid:

Infinite decorative spinners

Oversized loading graphics

Loading placeholders should preserve layout stability.

------------------------------------------------------------
20. MOTION REVIEW QUESTION
------------------------------------------------------------

Before approving any animation ask:

Does this animation make the interface easier to understand?

If not,

remove or simplify it.

------------------------------------------------------------
END OF PART 1

------------------------------------------------------------
21. HERO CHOREOGRAPHY
------------------------------------------------------------

The hero establishes the emotional tone of the website.

Animation order:

1. Background image settles into place
2. Navigation fades/slides into view
3. Main headline appears
4. Supporting paragraph appears
5. Primary CTA appears
6. Secondary CTA appears
7. Search interface becomes interactive

Animation should complete quickly enough that users never feel blocked.

Do not animate every element independently.

Group related content together.

------------------------------------------------------------
22. SEARCH PANEL
------------------------------------------------------------

The property search is the primary interaction.

Behavior:

Desktop

• Expand filters smoothly
• Collapse without abrupt jumps
• Maintain layout stability

Mobile

• Open inside a drawer
• Drawer slides naturally
• Background becomes inert
• Focus moves into the drawer
• Escape/back closes drawer

Never animate the layout in a way that causes content to shift unexpectedly.

------------------------------------------------------------
23. PROPERTY GRID
------------------------------------------------------------

Property cards should enter as a coordinated group.

Use subtle staggering only for the initial appearance.

Filtering behavior:

Old cards exit quickly.

↓

Grid reflows.

↓

New cards enter smoothly.

Do not animate every property individually during rapid filtering.

Performance takes priority.

------------------------------------------------------------
24. PROPERTY CARD INTERACTION
------------------------------------------------------------

Hover

• Slight elevation
• Very subtle upward translation
• Soft shadow adjustment
• Cursor feedback

Focus

• Clear visible focus ring
• No reliance on color alone

Touch

• Immediate pressed feedback
• No hover-only information

Avoid dramatic scaling or rotation.

------------------------------------------------------------
25. PROPERTY DETAILS PAGE
------------------------------------------------------------

Opening a property should feel continuous.

Suggested sequence:

Gallery

↓

Property information

↓

Features

↓

Agent panel

↓

Related listings

Do not animate every paragraph separately.

Use section-level transitions.

------------------------------------------------------------
26. IMAGE GALLERY
------------------------------------------------------------

Gallery interactions should feel premium.

Support:

Thumbnail selection

Lightbox open

Lightbox close

Previous/Next transitions

Keyboard navigation

Swipe gestures on touch devices

Transitions should emphasize continuity, not spectacle.

------------------------------------------------------------
27. LIGHTBOX
------------------------------------------------------------

Opening:

Background gently fades.

↓

Image enlarges naturally.

Closing:

Image returns smoothly.

↓

Background fades away.

Focus must remain trapped while the lightbox is open.

------------------------------------------------------------
28. MODALS
------------------------------------------------------------

Modals should:

Fade and scale subtly.

Avoid oversized movement.

On close:

Reverse the entrance animation.

Respect reduced-motion preferences.

------------------------------------------------------------
29. DRAWERS
------------------------------------------------------------

Drawers should:

Slide from the appropriate edge.

Maintain consistent speed.

Prevent background interaction.

Restore focus correctly after closing.

------------------------------------------------------------
30. DROPDOWNS
------------------------------------------------------------

Dropdowns should:

Fade

+

Small vertical movement

Keep transitions short.

Dropdowns should never bounce.

------------------------------------------------------------
31. ACCORDIONS
------------------------------------------------------------

Accordion animation should communicate expansion.

Animate:

Height (carefully)

Opacity

Content reveal

Avoid abrupt snapping.

Expanded content should remain easy to scan.

------------------------------------------------------------
32. TABS
------------------------------------------------------------

Changing tabs should:

Preserve layout stability.

Transition content smoothly.

Highlight the active tab immediately.

Avoid long fade sequences.

------------------------------------------------------------
33. TOAST NOTIFICATIONS
------------------------------------------------------------

Toasts should:

Appear unobtrusively.

Remain readable.

Dismiss automatically where appropriate.

Allow manual dismissal.

Stack predictably.

Never obscure critical actions.

------------------------------------------------------------
34. BUTTON FEEDBACK
------------------------------------------------------------

Primary buttons

Hover:

Subtle emphasis.

Pressed:

Immediate tactile response.

Loading:

Spinner or progress indicator integrated into the button.

Disabled:

Clearly inactive.

Do not move neighboring layout during loading.

------------------------------------------------------------
35. FORM VALIDATION
------------------------------------------------------------

Validation should feel supportive.

Errors:

Appear near the relevant field.

Success:

Appear immediately after valid input when appropriate.

Avoid shaking animations.

Communicate clearly instead.

------------------------------------------------------------
36. PAGE-LEVEL TRANSITIONS
------------------------------------------------------------

Navigation between routes should:

Preserve user orientation.

Avoid blank flashes.

Support browser back/forward behavior.

Transitions should never hide loading problems.

------------------------------------------------------------
37. STICKY ELEMENTS
------------------------------------------------------------

Sticky navigation:

Transition smoothly from transparent to solid when required.

Sticky contact panel:

Appear only when useful.

Avoid covering important content.

------------------------------------------------------------
38. SCROLL-TRIGGERED CONTENT
------------------------------------------------------------

Reveal sections only once.

Avoid replaying entrance animations during normal scrolling.

Large editorial sections may use subtle fade/translate combinations.

Animation should reinforce reading order.

------------------------------------------------------------
39. MICROINTERACTIONS
------------------------------------------------------------

Examples include:

Favorite toggles

Compare actions

Bookmark icons

Copy actions

Share actions

Microinteractions should provide immediate confirmation without distracting the user.

------------------------------------------------------------
40. REDUCED MOTION
------------------------------------------------------------

When reduced motion is enabled:

Remove nonessential movement.

Preserve:

Visibility changes

Focus management

State changes

Replace large translations with opacity changes where appropriate.

The interface must remain fully usable.

------------------------------------------------------------
END OF PART 2

------------------------------------------------------------
41. MOTION ARCHITECTURE
------------------------------------------------------------

Motion should be centralized.

Avoid defining animation values directly inside components.

Structure motion into reusable modules:

Motion Tokens

↓

Shared Variants

↓

Transition Presets

↓

Feature Animations

↓

Page Composition

This ensures consistency across the entire application.

------------------------------------------------------------
42. MOTION TOKENS
------------------------------------------------------------

Every animation should use shared motion tokens.

Categories include:

Duration

Delay

Easing

Distance

Scale

Opacity

Rotation (rare)

Spring behavior

Never hardcode animation values inside individual pages.

------------------------------------------------------------
43. DURATION CATEGORIES
------------------------------------------------------------

Standard timing groups:

Instant

Fast

Normal

Slow

Very Slow

Each animation must map to one of these categories.

Avoid inconsistent durations throughout the application.

------------------------------------------------------------
44. DISTANCE TOKENS
------------------------------------------------------------

Movement should feel restrained.

Suggested categories:

Extra Small

Small

Medium

Large

Very Large (rare)

Use the smallest movement necessary to communicate change.

Large translations should be exceptional.

------------------------------------------------------------
45. EASING SYSTEM
------------------------------------------------------------

Maintain a small library of easing presets.

Recommended groups:

Standard

Entrance

Exit

Emphasized

Linear

The same interaction should always use the same easing behavior.

------------------------------------------------------------
46. SPRING GUIDELINES
------------------------------------------------------------

Spring animations should feel controlled.

Avoid:

Elastic bouncing

Rubber-band effects

Overshooting

Prefer:

Confident settling

Natural deceleration

Premium restraint

------------------------------------------------------------
47. SHARED VARIANTS
------------------------------------------------------------

Create reusable animation variants.

Examples:

fadeIn

fadeUp

fadeDown

fadeLeft

fadeRight

scaleIn

scaleOut

slideDrawer

modalEnter

modalExit

heroReveal

cardReveal

These variants should be imported rather than recreated.

------------------------------------------------------------
48. TRANSITION PRESETS
------------------------------------------------------------

Create named transition presets.

Examples:

Default

Fast

Slow

Hero

Modal

Drawer

Card

Navigation

Grid

This keeps timing consistent across the project.

------------------------------------------------------------
49. PAGE COMPOSITION
------------------------------------------------------------

Pages should compose shared motion primitives.

Avoid page-specific animation logic unless it solves a unique problem.

Example:

Hero

↓

Editorial Sections

↓

Property Grid

↓

Testimonials

↓

CTA

Each section should use shared variants.

------------------------------------------------------------
50. FEATURE ANIMATION MODULES
------------------------------------------------------------

Organize motion by feature.

Examples:

Navigation Motion

Hero Motion

Search Motion

Property Motion

Gallery Motion

Modal Motion

Drawer Motion

Toast Motion

This keeps implementation modular.

------------------------------------------------------------
51. GPU-FRIENDLY ANIMATION
------------------------------------------------------------

Prefer transforms and opacity.

Recommended:

translateX

translateY

scale

opacity

Avoid animating:

width

height (unless necessary)

margin

padding

left

top

filter blur

box-shadow intensity

These are generally more expensive to render.

------------------------------------------------------------
52. LAYOUT ANIMATION
------------------------------------------------------------

Use layout animations selectively.

Appropriate examples:

Filter results

Accordion expansion

Comparison panel

Gallery changes

Avoid animating large page layouts unnecessarily.

------------------------------------------------------------
53. SCROLL PERFORMANCE
------------------------------------------------------------

Scroll should remain smooth.

Avoid:

Heavy calculations on scroll

Multiple simultaneous observers

Continuous animation loops

Throttle or optimize expensive scroll interactions.

------------------------------------------------------------
54. MOBILE PERFORMANCE
------------------------------------------------------------

Mobile experience takes priority.

Reduce:

Large parallax effects

Heavy background motion

Complex chained animations

Multiple simultaneous transforms

Mid-range devices should remain responsive.

------------------------------------------------------------
55. REDUCED MOTION ARCHITECTURE
------------------------------------------------------------

Reduced motion should be a first-class feature.

Implementation guidelines:

Replace movement with opacity where possible.

Disable decorative animations.

Retain functional feedback.

Never remove:

Focus indication

Visibility changes

State transitions

------------------------------------------------------------
56. ACCESSIBILITY INTEGRATION
------------------------------------------------------------

Motion should support accessibility.

Ensure:

Focus remains visible.

Screen readers receive state changes.

Keyboard users are not disadvantaged.

Animations never block interaction.

------------------------------------------------------------
57. INTERRUPTION HANDLING
------------------------------------------------------------

Users should always remain in control.

Examples:

Closing a modal mid-animation

Rapid route changes

Repeated button presses

Fast filter changes

Animations should cancel gracefully without leaving the UI in an inconsistent state.

------------------------------------------------------------
58. ERROR STATE ANIMATION
------------------------------------------------------------

Error feedback should be calm.

Examples:

Gentle fade

Border transition

Inline message reveal

Avoid:

Violent shaking

Rapid flashing

Aggressive movement

------------------------------------------------------------
59. SUCCESS STATE ANIMATION
------------------------------------------------------------

Success should feel reassuring.

Examples:

Soft fade

Checkmark reveal

Button state transition

Avoid celebratory effects such as confetti or bouncing elements.

------------------------------------------------------------
60. MOTION QA CHECKLIST
------------------------------------------------------------

Every animation should satisfy:

✓ Supports usability

✓ Feels consistent

✓ Uses shared tokens

✓ Uses shared variants

✓ Performs well

✓ Works on mobile

✓ Supports reduced motion

✓ Maintains accessibility

✓ Does not delay interaction

✓ Reinforces hierarchy

Any animation failing these checks should be revised or removed.

------------------------------------------------------------
END OF PART 3

------------------------------------------------------------
61. ROUTE TRANSITION STANDARDS
------------------------------------------------------------

Navigation between routes should feel continuous.

Requirements:

• Preserve user orientation
• Never flash blank screens
• Maintain scroll restoration where appropriate
• Avoid delaying navigation for animation
• Allow browser back and forward navigation naturally

Route transitions should enhance continuity, not hide loading problems.

------------------------------------------------------------
62. ADVANCED INTERACTION CHOREOGRAPHY
------------------------------------------------------------

Complex interactions should follow predictable sequences.

Example: Booking Inspection

User submits form

↓

Validation feedback

↓

Loading state

↓

Success confirmation

↓

Next available action

Each step should clearly communicate the current state.

Avoid multiple simultaneous animations competing for attention.

------------------------------------------------------------
63. SCROLL CHOREOGRAPHY
------------------------------------------------------------

Scrolling should support reading.

Guidelines:

• Reveal major sections once
• Keep decorative motion subtle
• Avoid excessive parallax
• Never animate content users have already consumed repeatedly
• Maintain a comfortable reading rhythm

Scrolling should feel effortless.

------------------------------------------------------------
64. PAGE EXIT BEHAVIOR
------------------------------------------------------------

When leaving a page:

• Preserve continuity
• Exit quickly
• Do not interrupt navigation
• Avoid long fade-outs
• Keep transitions symmetrical with entrances

Exit animations should never block user actions.

------------------------------------------------------------
65. LOADING EXPERIENCE
------------------------------------------------------------

Loading states should communicate progress honestly.

Preferred:

Skeleton loaders

Progress indicators

Optimistic UI where appropriate

Avoid:

Artificial loading delays

Infinite decorative animations

Misleading success messages

Users should always understand whether content is loading, available, or unavailable.

------------------------------------------------------------
66. FRAMER MOTION PROJECT STRUCTURE
------------------------------------------------------------

Organize motion code separately from UI.

Recommended structure:

src/

animations/

tokens/

variants/

transitions/

presets/

hooks/

utils/

Components should import reusable motion definitions.

Avoid inline animation objects unless they are truly unique.

------------------------------------------------------------
67. NAMING CONVENTIONS
------------------------------------------------------------

Use descriptive names.

Examples:

fadeIn

fadeUp

heroReveal

modalEnter

drawerSlide

cardHover

gridReveal

Avoid names such as:

animation1

motion2

transitionNew

Names should communicate purpose.

------------------------------------------------------------
68. ANIMATION ANTI-PATTERNS
------------------------------------------------------------

Never use:

• Random durations
• Random easing curves
• Oversized bounce effects
• Continuous looping without purpose
• Excessive scaling
• Rotating interface elements unnecessarily
• Flashing content
• Multiple competing hero animations
• Animations that delay interaction
• Decorative motion replacing usable feedback

Restraint is a premium quality.

------------------------------------------------------------
69. PERFORMANCE BUDGET
------------------------------------------------------------

Animation should remain lightweight.

Targets:

• Smooth scrolling on mid-range mobile devices
• Minimal layout recalculation
• GPU-friendly transforms
• No animation-induced layout shift
• No long-running unnecessary animation loops

Performance always takes precedence over visual novelty.

------------------------------------------------------------
70. BROWSER COMPATIBILITY
------------------------------------------------------------

Motion should degrade gracefully.

Review behavior in:

• Chrome
• Edge
• Firefox
• Safari
• Mobile Chrome
• Mobile Safari

If an animation cannot be supported consistently, simplify it.

------------------------------------------------------------
71. ACCESSIBILITY VALIDATION
------------------------------------------------------------

Verify:

✓ Reduced-motion preference respected

✓ Keyboard interaction unaffected

✓ Focus visibility maintained

✓ Screen reader announcements remain accurate

✓ No flashing or seizure-inducing effects

Accessibility is mandatory for production release.

------------------------------------------------------------
72. MOTION TESTING
------------------------------------------------------------

Review:

• Hover interactions
• Focus interactions
• Touch interactions
• Drawer behavior
• Modal behavior
• Route transitions
• Property gallery
• Search filters
• Loading states
• Error states
• Success states

Animations should be tested on both desktop and mobile.

------------------------------------------------------------
73. CODE QUALITY
------------------------------------------------------------

Motion code should be:

Reusable

Documented

Predictable

Composable

Easy to maintain

Avoid duplicating animation logic across components.

Refactor common behavior into shared utilities.

------------------------------------------------------------
74. DESIGN SYSTEM ALIGNMENT
------------------------------------------------------------

Motion must always reinforce the Design System.

Animation should support:

Typography

Spacing

Hierarchy

Photography

Component structure

Motion should never contradict the visual language.

------------------------------------------------------------
75. FUTURE EXTENSIBILITY
------------------------------------------------------------

The Motion System should support future features such as:

• Interactive maps
• Authentication flows
• User dashboards
• Saved searches
• Mortgage calculators
• Virtual property tours
• Administrative interfaces

Future features should extend the existing motion architecture rather than introduce a separate one.

------------------------------------------------------------
76. RELEASE CHECKLIST
------------------------------------------------------------

Before release confirm:

✓ Shared motion tokens used

✓ Shared variants used

✓ Shared transition presets used

✓ Mobile performance acceptable

✓ Reduced motion supported

✓ Keyboard interactions preserved

✓ No blocking animations

✓ No unnecessary loops

✓ Route transitions verified

✓ Loading states implemented

✓ Motion feels consistent across every page

------------------------------------------------------------
77. ACCEPTANCE CRITERIA
------------------------------------------------------------

Motion is approved only if:

• It improves usability
• It strengthens hierarchy
• It feels calm and premium
• It remains performant
• It is accessible
• It is reusable
• It is maintainable
• It integrates naturally with the Design System

If any criterion fails, the animation should be revised or removed.

------------------------------------------------------------
78. FINAL MOTION DIRECTIVE
------------------------------------------------------------

Motion is a communication tool.

Every animation should make the interface easier to understand.

Premium products are remembered not because everything moves—

but because everything moves with purpose.

Remove unnecessary animation.

Refine meaningful animation.

Consistency is more valuable than complexity.

------------------------------------------------------------
79. CONCLUSION
------------------------------------------------------------

This Motion System is the authoritative animation specification for the Nigerian Premium Real Estate Platform.

All engineers, designers, and AI coding agents must implement motion using shared tokens, reusable variants, accessible behaviors, and performance-conscious techniques.

Animation should never become the product.

It should quietly improve every interaction.

END OF MOTION_SYSTEM.md