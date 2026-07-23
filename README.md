# Matcha Time

Responsive multi-page marketing website for a Japanese-inspired matcha café brand. Built as a design-forward React SPA with Home, Menu, About, and Contact routes.

## Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Motion** (`motion/react`)
- **React Router**
- **React Hook Form**
- **React Helmet Async**

## Features

- Component-driven UI with typed data modules
- Motion system for page-load staggers, scroll reveals, and carousel transitions
- Route-level code splitting with `React.lazy` and `Suspense`
- Themed page loader that waits for page media assets before reveal
- Dynamic SEO titles, descriptions, and Open Graph / Twitter Card tags
- Scroll-aware navbar, refined footer, and mobile-first responsive layouts
- Accessible motion via `prefers-reduced-motion`

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment

Create a `.env` file in the project root for absolute SEO / Open Graph URLs:

```env
VITE_SITE_URL=https://your-live-domain.com
```

## Project Structure

```text
src/
  components/     # Shared UI, page sections, motion wrappers
  data/           # Static content and SEO copy
  hooks/          # Reusable client hooks
  pages/          # Route-level pages
  types/          # Shared TypeScript types
  assets/         # Images, video, and media
```

## Routes

| Path       | Page    |
| ---------- | ------- |
| `/`        | Home    |
| `/menu`    | Menu    |
| `/about` | About   |
| `/contact` | Contact |

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Vite dev server    |
| `npm run build`   | Typecheck and production build |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
