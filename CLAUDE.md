# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite + TypeScript project for "LEVEL UP", a training and consulting center website. It uses shadcn/ui components built on Radix UI primitives, Tailwind CSS 4 for styling, and React Router v7 for routing.

## Development Commands

- `pnpm dev` - Start the Vite development server
- `pnpm build` - Build for production (outputs to `dist/`)

## Architecture

### Entry Points
- `src/main.tsx` - Application entry point, mounts the React app
- `src/app/App.tsx` - Root app component with RouterProvider
- `index.html` - HTML entry point (language: uk)

### Routing
Routes are defined in `src/app/routes.ts` using React Router v7's `createBrowserRouter`:
- `/` - Home
- `/about` - About page
- `/services` - Services listing
- `/services/individual` - Individual consultations
- `/services/group` - Group trainings
- `/services/corporate` - Corporate programs
- `/pricing` - Pricing page
- `/tests` - Tests page
- `/cv` - CV form
- `/reviews` - Reviews form
- `/contact` - Contact page
- `*` - 404 Not Found

The root layout (`src/app/layouts/Root.tsx`) wraps all pages with Header, Footer, and AIChatBot components.

### Directory Structure
```
src/
├── main.tsx              # App entry point
├── app/
│   ├── App.tsx           # Root component with router
│   ├── routes.ts         # Route definitions
│   ├── layouts/
│   │   └── Root.tsx      # Root layout (Header + Footer + ChatBot)
│   ├── pages/            # Route page components
│   └── components/
│       ├── ui/           # shadcn/ui components (40+ components)
│       ├── figma/        # Figma-specific components
│       └── *.tsx         # Page section components (Hero, Services, etc.)
└── styles/
    ├── index.css         # Imports fonts, tailwind, theme
    ├── tailwind.css      # Tailwind v4 imports + source config
    ├── theme.css         # CSS variables for theming
    └── fonts.css         # Custom font imports
```

### Styling

**Tailwind CSS v4** is configured with:
- `@tailwindcss/vite` plugin in `vite.config.ts`
- Source paths defined in `src/styles/tailwind.css`: `@source '../**/*.{js,ts,jsx,tsx}'`
- `tw-animate-css` for animations

**Theme System** (`src/styles/theme.css`):
- Uses CSS custom properties (variables) in `:root`
- Custom colors: `--primary: #0891b2`, `--secondary: #10b981`, `--accent: #f59e0b`
- Gradients: `--gradient-primary`, `--gradient-secondary`, etc.
- Border radius: `--radius: 1rem`
- Dark mode support via `.dark` class

**Utility Function** (`src/app/components/ui/utils.ts`):
```typescript
import { cn } from '@/app/components/ui/utils';
// Combines clsx and tailwind-merge for class name handling
```

### UI Components

Located in `src/app/components/ui/`, built with:
- **Radix UI** primitives for accessibility and behavior
- **class-variance-authority (cva)** for component variants
- **Tailwind** for styling

Key components:
- `button.tsx` - Primary component using `cva` for variants (default, destructive, outline, secondary, ghost, link)
- `utils.ts` - `cn()` helper for class name merging
- 40+ shadcn/ui components available (dialog, form, calendar, carousel, etc.)

Usage pattern:
```tsx
import { Button } from '@/app/components/ui/button';
<Button variant="outline" size="sm">Click me</Button>
```

### Path Aliases

Vite config (`vite.config.ts`) maps `@` to `./src`:
```typescript
import { Button } from '@/app/components/ui/button';
import Root from '@/app/layouts/Root';
```

### Dependencies

**Key libraries** (from `package.json`):
- `react` 18.3.1 (peer dependency)
- `react-router` 7.13.0 - Routing
- `motion` 12.23.24 - Animations (Framer Motion successor)
- `@radix-ui/react-*` - Headless UI primitives
- `@mui/material` 7.3.5 - Material UI components
- `lucide-react` 0.487.0 - Icons
- `tailwind-merge` + `clsx` - Class name utilities
- `date-fns` 3.6.0 - Date formatting
- `react-hook-form` 7.55.0 - Form handling
- `recharts` 2.15.2 - Charts
- `embla-carousel-react` - Carousels

### Asset Handling

Vite config includes raw imports for:
- `.svg` files
- `.csv` files

Do NOT add `.css`, `.tsx`, or `.ts` files to `assetsInclude`.

## Guidelines

See `Guidelines.md` for project-specific coding guidelines. The file contains a template for adding design system rules and component usage patterns.
