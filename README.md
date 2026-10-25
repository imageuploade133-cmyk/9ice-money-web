# 9iceMoney hero UI (Next.js / React)

A responsive hero section based on the supplied 9iceMoney reference design.

## Files
- `app/page.tsx` — hero section markup
- `app/globals.css` — responsive styling
- `public/images/9icemoney-hero-visual.png` — cropped visual asset from the supplied reference image

## Add to an existing Next.js App Router project
1. Copy `app/page.tsx` into your project's `app/page.tsx` (or move the section JSX into your existing page if it already has one).
2. Merge `app/globals.css` into your existing global stylesheet. If your project already imports global CSS in `app/layout.tsx`, keep that existing import; do not import global CSS from multiple places if your setup prohibits it.
3. Copy `public/images/9icemoney-hero-visual.png` into the matching public path.
4. Run `npm run dev` and review at desktop and mobile widths.

## Important integration notes
- The CTA currently points to `#get-started`, a placeholder anchor. Replace its `href` with your real registration, login, or onboarding route.
- The artwork is cropped from the reference image provided in this chat. It preserves the original visual closely but includes the original blue/yellow composition; it is not a separately layered transparent photograph.
- The Google Fonts import loads Inter when internet is available; the page falls back to Arial if it is not.
- This package contains the hero section only, not a complete app scaffold. It is intended to be copied into an existing Next.js project.
