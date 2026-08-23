# Dawit Tesfaye — Portfolio (Next.js frontend)

Same bronze/copper visual identity as the original page, restructured into a componentized
Next.js 14 (App Router) + TypeScript + Tailwind app, animated with Framer Motion.

**Signature interface idea:** instead of a top navbar, the site uses a fixed "console dock" —
a vertical IDE-style activity bar with a live role switcher (Developer / EdTech Specialist /
System Admin). Switching roles re-tints the hero's terminal panel and highlights the matching
section icons, tying the navigation itself to Dawit's three professional identities.

## Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local   # point NEXT_PUBLIC_API_URL at your Laravel API
npm run dev
```

Visit http://localhost:3000

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — one component per section (Hero, Skills, Experience, Contact, etc.)
- `lib/data.ts` — all portfolio content (pillars, skills, timeline, projects, certs)
- `lib/RoleContext.tsx` — the dev/edtech/sysadmin role state shared by the dock and hero
- `lib/api.ts` — talks to the Laravel `/api/contact` endpoint

## Connecting to the Laravel backend

Set `NEXT_PUBLIC_API_URL` to wherever `php artisan serve` (or your production API) is
running. The contact form posts JSON to `POST {NEXT_PUBLIC_API_URL}/api/contact`.

## Notes

- Update the project card images and copy in `lib/data.ts` — placeholders use picsum.photos.
- `iconify-icon` is loaded via a `<Script>` tag in `app/layout.tsx`, matching the icon set
  used in the original design (`lucide:*`, `simple-icons:*`).
- Reduced-motion is respected globally in `globals.css`.
