# Gittibilsms Design Guidelines

## Design Approach

**Selected Approach:** Hybrid (Tech Service Reference + Design System)

Drawing inspiration from professional tech service providers like Twilio, Stripe, and Mailchimp, we'll create a trustworthy, conversion-focused design that balances professionalism with approachability. The design should communicate reliability and technical capability while remaining accessible to business users.

**Core Principles:**
- Trust and credibility through clean, professional layouts
- Clear information hierarchy prioritizing key conversion points
- Strategic use of whitespace to prevent overwhelming users
- Balanced content density - informative without cluttered

---

## Typography System

**Font Families:**
- Primary: 'Poppins' (headings, navigation, CTAs)
- Secondary: 'Inter' (body text, descriptions)
- Both via Google Fonts CDN

**Hierarchy:**

**Hero/H1:**
- Desktop: text-5xl to text-6xl, font-bold (Poppins)
- Mobile: text-4xl, font-bold
- Line height: leading-tight
- Letter spacing: tracking-tight

**H2 (Section Headers):**
- Desktop: text-4xl, font-semibold
- Mobile: text-3xl, font-semibold
- Line height: leading-snug

**H3 (Subsections/Cards):**
- Desktop: text-2xl, font-semibold
- Mobile: text-xl, font-semibold

**Body Text:**
- Regular: text-base to text-lg (Inter)
- Secondary/descriptions: text-sm to text-base
- Line height: leading-relaxed for readability

**CTAs/Buttons:**
- text-base to text-lg, font-medium (Poppins)
- Uppercase tracking for primary CTAs: uppercase tracking-wide

---

## Layout System

**Spacing Primitives:**
We'll use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm.

**Common Patterns:**
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card gaps: gap-6 to gap-8
- Button padding: px-8 py-3 to px-10 py-4
- Container max-width: max-w-7xl for content sections

**Grid Structure:**
- Hero: Single column, centered content with max-w-4xl
- Features: 3-column grid (lg:grid-cols-3) → 2-col (md:grid-cols-2) → 1-col (mobile)
- Blog: 3-column masonry-style grid → stacked on mobile
- Pricing: 3-column cards with hover elevation
- Contact: 2-column split (form left, info right) → stacked mobile

**Navigation:**
- Sticky header with backdrop blur effect
- Desktop: Horizontal menu with language toggle right-aligned
- Mobile: Hamburger menu with slide-in drawer
- Height: h-20 with py-4 spacing

---

## Component Library

### Navigation Components

**Sticky Header:**
- Full-width with backdrop-blur-lg and subtle shadow
- Logo left, navigation center, language toggle (TR | EN) right
- Mobile: Logo + hamburger, slide-in menu overlay
- Active page indicator with subtle underline

**Language Toggle:**
- Segmented control style: "TR | EN" with active state highlight
- Position: top-right of navigation, always visible
- Instant content swap without page reload

### Hero Section (Home)

**Structure:**
- Full-width container with gradient overlay treatment
- Hero image: Professional tech/communication themed background (server room, network visualization, or abstract tech pattern)
- Content: Centered, max-w-4xl
- Two-button layout: Primary CTA ("Get Started") + Secondary ("Contact Us")
- Buttons with backdrop blur on hero image: backdrop-blur-md with semi-transparent backgrounds

**Layout:**
- min-h-[600px] on desktop, min-h-[500px] mobile
- Content vertically centered with py-20

### Feature Cards

**Grid Layout:** 3-column (desktop) → 2-column (tablet) → 1-column (mobile)

**Individual Card:**
- Rounded corners: rounded-xl
- Padding: p-8
- Subtle shadow with hover elevation: hover:shadow-xl transition
- Icon at top (64px, from Heroicons solid set)
- Heading below icon: text-xl font-semibold mb-4
- Description text: text-base leading-relaxed
- Card spacing: gap-8 between cards

**Icons to Use (Heroicons):**
- Fast Shipping: BoltIcon
- 256-Bit Encryption: LockClosedIcon
- International Connection: GlobeAltIcon
- High Performance: RocketLaunchIcon
- 24/7 Support: ChatBubbleLeftRightIcon
- Delivery Guarantee: CheckBadgeIcon

### Pricing Table

**Structure:**
- 3-column card layout with center card elevated/highlighted
- Each card: rounded-2xl with p-8
- Hover effect: scale-105 transition
- Header section with package name
- Large price display: text-4xl font-bold
- Feature list with checkmarks (CheckIcon)
- CTA button at bottom: full-width, prominent

**Table Display:**
- Responsive table with alternating row styling
- Header row: font-semibold, slightly larger text
- Cell padding: px-6 py-4
- Border styling: subtle dividers between rows

### Blog Components

**Blog Grid:**
- 3-column masonry layout (desktop) → single column (mobile)
- gap-8 between cards

**Blog Card:**
- Featured image at top with aspect-ratio-video
- Image overlay gradient on hover
- Content padding: p-6
- Title: text-xl font-semibold, 2-line clamp
- Excerpt: text-sm, 3-line clamp
- "Read More" link with arrow icon (ArrowRightIcon)
- Card: rounded-xl with hover:shadow-xl

### Contact Page

**Two-Column Layout:**

**Form Column (60% width):**
- Input fields with consistent styling:
  - rounded-lg border
  - px-4 py-3 padding
  - Proper focus states with ring styling
  - Labels: text-sm font-medium mb-2
  - Field spacing: space-y-6
- Textarea for message: rows-6
- Submit button: Full-width, prominent styling

**Info Column (40% width):**
- Contact details stack with icons
- Icon + text layout: flex items-center gap-4
- Telegram/Teams links with external link icon
- Background: Subtle Turkey map SVG as watermark

**Mobile:** Stack form above info column

### Footer

**Multi-Column Layout:**
- 4-column grid (desktop) → 2-column (tablet) → 1-column (mobile)

**Sections:**
1. Brand column: Logo + tagline
2. Quick Links: Navigation menu vertical
3. Contact Info: Email, Telegram, Teams with icons
4. Social/Legal: Social icons + copyright

**Styling:**
- Dark background treatment
- py-16 padding
- Border-top separator
- Copyright bar at bottom: text-center py-6

---

## Images

**Hero Section (Home):**
Large hero background image showcasing modern technology/communication infrastructure. Consider: abstract network visualization, server room with blue lighting, or stylized communication nodes. Image should convey speed, security, and professionalism. Overlay with gradient for text readability.

**Feature Icons:**
Use Heroicons (solid variant) as specified in component library. No custom images needed.

**Blog Thumbnails:**
5 featured images representing each topic - tech/communication themed stock photos. Abstract tech patterns, mobile devices with messaging, security/encryption visualizations, Turkish business scenes, automation graphics.

**About Page:**
Optional: Team/office photo or technology infrastructure image to humanize the brand.

**No decorative images needed** for pricing tables, contact page, or footer sections.

---

## Interactions & Animations

**Minimal, Purposeful Animations:**
- Smooth scroll behavior for anchor navigation
- Button hover: subtle scale (scale-105) with shadow increase
- Card hover: elevation change with smooth transition
- Language toggle: Instant content fade swap (duration-200)
- Mobile menu: Slide-in transition (translate-x-full → translate-x-0)
- Form focus: Ring animation with transition

**No:**
- Scroll-triggered animations
- Parallax effects
- Complex entrance animations
- Loading spinners (unless form submission)

---

## Accessibility

- Minimum touch target: 44px × 44px for all interactive elements
- Proper heading hierarchy (H1 → H2 → H3) maintained
- Form labels properly associated with inputs
- Focus indicators visible on all interactive elements
- Language toggle clearly labeled with current selection
- Alt text for all images (especially blog thumbnails and hero)
- Sufficient contrast ratios maintained throughout