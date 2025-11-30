# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Single-page application featuring sections for hero, skills, about, projects, experience, testimonials, and footer.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Opens development server at http://localhost:3000 with hot module replacement.

### Build for Production
```bash
npm run build
```
Creates optimized production build in `.next` directory.

### Start Production Server
```bash
npm start
```
Serves the production build (must run `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint using Next.js configuration with TypeScript support.

## Architecture

### App Structure
- **Next.js App Router**: Uses `app/` directory for routing
- **Root Page**: `app/page.tsx` composes all section components in sequence
- **Layout**: `app/layout.tsx` provides global HTML structure with Geist font families
- **Components**: All UI sections in `app/components/` directory as default exports

### Component Organization
All components follow a modular, single-responsibility pattern:
- `Header.tsx` - Navigation bar (desktop-only nav links)
- `Hero.tsx` - Landing section with profile image
- `Skills.tsx` - Technology/skills showcase (imported as "Partners" in page.tsx)
- `About.tsx` - Personal introduction
- `Projects.tsx` - Project grid with hover interactions
- `Experience.tsx` - Work history timeline
- `Testimonial.tsx` - Client/peer testimonials
- `Footer.tsx` - Site footer with links/contact

### Styling System
- **Tailwind CSS v4**: PostCSS-based with `@tailwindcss/postcss` plugin
- **Custom Theme**: Defined in `app/globals.css` using `@theme` directive
- **Font Variables**: `--font-geist-sans` and `--font-geist-mono` from `next/font/google`
- **Noise Texture**: Fixed SVG overlay (`.bg-noise`) at opacity 0.03 for visual depth
- **Custom Animations**: `fade-in-up` keyframes with delay utilities (`.delay-100`, `.delay-200`, `.delay-300`)
- **Color Scheme**: Light theme with `--background: #f9f9f9` and `--foreground: #111111`

### TypeScript Configuration
- **Path Alias**: `@/*` maps to project root for imports
- **Target**: ES2017 with strict mode enabled
- **Module Resolution**: Bundler mode (Next.js optimized)
- **JSX**: `react-jsx` transform (no React import needed)

## Key Patterns

### Image Handling
All images use Next.js `<Image>` component with:
- Images stored in `public/` directory (referenced as `/filename.ext`)
- `fill` prop for responsive containers with `object-cover`
- `sizes` attribute for responsive image optimization
- `priority` flag on above-the-fold images

### Responsive Design
- Mobile-first approach using Tailwind's breakpoint system
- `clamp()` for fluid typography (e.g., `text-[clamp(3.5rem,11vw,10rem)]`)
- Grid layouts with `md:` breakpoint for desktop variations
- Hidden navigation on mobile (`hidden md:flex`)

### Component Structure
All section components are:
- Functional components with default exports
- Centered with `max-w-7xl mx-auto w-full`
- Padded vertically with `py-[size]` for section spacing
- Using semantic HTML5 elements (`<section>`, `<header>`, `<nav>`)

## Dependencies

### Core Framework
- `next@16.0.5` - React framework with App Router
- `react@19.2.0` / `react-dom@19.2.0` - UI library
- `typescript@5` - Type safety

### Styling
- `tailwindcss@4` - Utility-first CSS framework
- `@tailwindcss/postcss@4` - PostCSS integration
- Custom animations and noise texture overlay

### UI Components
- `lucide-react@0.555.0` - Icon library (if/when needed)

### Development
- `eslint@9` with `eslint-config-next@16.0.5` - Code quality
- TypeScript definitions for Node, React, and React DOM

## Important Notes

- This is a static portfolio with no backend/API routes
- All content is hardcoded in components (no CMS or data fetching)
- Korean language content in Hero and Projects sections
- Build output goes to `.next/` directory (gitignored)
- No test suite currently configured
