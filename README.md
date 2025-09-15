# Zettabyte Next.js Test (Stage 1 & 2)

## Prerequisites
- Next.js (App Router), Tailwind CSS configured
- Shadcn UI installed (or use the provided `components/ui/*` files)
- Install deps:
```bash
npm i framer-motion clsx tailwind-merge lucide-react
```

## Routes
- Stage 1: `/posts` — Fetch JSONPlaceholder posts, display as Tailwind + Shadcn cards with Framer Motion fade-in.
- Stage 2: `/dashboard` — Sidebar + Header + Content; data via `useFetch` hook; reusable CardList + UserCard with animation.

## Notes for Reviewers
- Fetch is implemented with async/await and proper error handling.
- Reusable components:
  - `CardList` — generic animation + skeleton + error UI.
  - `PostCard`, `UserCard` — drop-in cards for different data types.
- Custom hook:
  - `useFetch` with abort controller, `refetch`, loading/error states.
- Animations:
  - Fade-in stagger for lists, animated sidebar/header.