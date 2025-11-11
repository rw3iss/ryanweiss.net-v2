# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website (ryanweiss.net) built with Preact, TypeScript, and esbuild. The site features a futuristic, dream-like design with advanced animations, a unique circular belt carousel system for navigating portfolio items, mystical space-themed background, and immersive full-screen detail views. The portfolio also includes a custom routing system, 3D graphics (ThreeJS), interactive tools (color utilities, JSON viewer), and a timeline display.

## Build System

The project uses a custom esbuild-based build system with TypeScript compilation:

### Development
```bash
npm run dev
```
Runs concurrent processes:
- TypeScript compilation with watch mode via `scripts/dev.js`
- Development server via `@web/dev-server` on default port

The dev script:
- Watches `src/**/*.scss` files for changes
- Bundles from `src/index.tsx` to `build/` directory
- Uses esbuild with custom plugins (SCSS, copy, HTML template transform)
- Includes PostCSS with autoprefixer
- Enables source maps in dev mode

### Production Build
```bash
npm run build
```
- Cleans `build/` directory
- Runs production build with minification
- Disables source maps
- Tree-shaking enabled

### Starting Dev Server Only
```bash
npm start
```
Runs the web dev server without rebuilding (serves existing `build/` files).

## Architecture

### Entry Point Flow
1. `src/index.tsx` - Application entry, calls `Application.init()`
2. `src/Application.ts` - Singleton that initializes:
   - IndexedDB with stores from `config/idb.config.ts`
   - AudioManager for UI sounds
   - DebugPanel for development
3. Renders `App` component to document.body

### Routing System
Custom client-side routing (not using react-router):
- Routes defined in `src/config/routes.tsx` as path-to-component mappings
- `src/lib/Router.ts` - Core router using `routes` library for pattern matching
- `src/components/shared/RouteContext/RouteContext.tsx` - Route renderer component
- Routes support parameters (e.g., `/entries/:slug`)
- History API for browser back/forward
- Emits `route-change` events via `EventService`

### Path Aliases
TypeScript path mappings (tsconfig.json):
- `app/*` → `src/*`
- `components/*` → `src/components/*`
- `pages/*` → `src/components/pages/*`
- `lib/*` → `src/lib/*`
- `utils/*` → `src/lib/utils/*`
- `services/*` → `src/services/*`
- `config/*` → `src/config/*`
- `types/*` → `src/lib/types/*`
- `styles/*` → `src/styles/*`

### Key Directories
- `src/components/pages/` - Page components (Home, Work, Play, Info, Colors, Timeline, etc.)
- `src/components/3d/` - ThreeJS wrapper and 3D scene configurations
- `src/components/shared/` - Shared components like RouteContext
- `src/lib/` - Core services and utilities:
  - `Router.ts` - Client-side routing
  - `IndexedDBManager.ts` - IndexedDB wrapper
  - `AudioManager.ts` - Sound effects manager
  - `EventService.ts` - Event bus
  - `DataService.ts` / `DataProvider.tsx` - Data fetching/caching
- `src/config/` - Configuration files (routes, IDB tables, constants)
- `scripts/` - Build scripts and custom esbuild plugins

### Custom esbuild Plugins
Located in `scripts/plugins/`:
- `scssPlugin.ts` - SCSS compilation with PostCSS
- `copyPlugin.ts` - Copy static assets
- `transformHtmlTemplatePlugin.ts` - HTML template processing

## Code Style

### ESLint/Prettier Configuration
- **Indentation**: 4 spaces (no tabs)
- **Quotes**: Single quotes
- **Semicolons**: Required
- **Line width**: 120 characters
- **No trailing commas**
- **Arrow parens**: Always
- ESLint enforces `eqeqeq`, warns on `no-console`
- TypeScript strict mode enabled with some relaxations (`noImplicitAny: false`)

### JSX Configuration
- Uses Preact with `jsxImportSource: "preact"`
- JSX pragma: `h` (configured in esbuild)

## Environment Variables

The build system loads environment variables from `.env` files using `dotenv` and `esbuild-envfile-plugin`. Environment is determined by `NODE_ENV` (defaults to 'local').

## Notable Features

### Pages
- **Home** (`/`) - Landing page with 3D graphics
- **Colors** (`/colors`) - Color manipulation tools with CodeMirror editor
- **Timeline** (`/timeline`) - Portfolio timeline
- **Work/Play/Info** - Portfolio sections
- **Entry** (`/entries/:slug`) - Dynamic entry pages

### Data Management
- IndexedDB for local storage (via `IndexedDBManager`)
- `DataService` and `DataProvider` for data fetching/caching
- `useData` hook for component data access

### Audio
- `AudioManager` handles UI sound effects
- Sounds registered in `Application.init()` (hover, click)

## Futuristic Portfolio Homepage

The homepage features a unique circular belt carousel system for browsing portfolio items:

### Core Components

#### MysticalBackground (`src/components/shared/MysticalBackground/`)
- Canvas-based animated background with particles, lights, and nebula effects
- Parallax scrolling effects that respond to page scroll
- Swirling space/deep-sea aesthetic with gradients and glowing elements
- Performance-optimized with RequestAnimationFrame

#### BeltNavigator (`src/components/shared/BeltNavigator/`)
- Manages vertical navigation between multiple portfolio category rows
- Arrow indicators appear on hover near top/bottom edges
- Keyboard navigation support (Arrow keys, PageUp/PageDown)
- Side indicators show current row position
- Smooth transitions between rows with blur and fade effects

#### CircularBelt (`src/components/shared/CircularBelt/`)
- Horizontal carousel of portfolio items with circular belt effect
- Mouse-driven scrolling: move mouse to left/right edges to scroll
- Items scale, skew, and fade based on distance from center
- 3D perspective transforms create depth illusion
- Infinite scroll with seamless wrapping
- Edge fade gradients for smooth visual boundaries

#### ItemDetailView (`src/components/shared/ItemDetailView/`)
- Full-screen zoom animation when item is clicked
- Sequenced content reveal animations (title → description → details → media)
- Close buttons in top corners (back arrow left, X right)
- Backdrop blur effect
- Escape key support for closing
- Smooth entrance/exit animations

### Portfolio Data Structure

Portfolio content is defined in `src/data/portfolioData.ts`:
```typescript
interface PortfolioRow {
    key: string;        // Unique identifier
    label: string;      // Display label
    order: number;      // Sort order
    items: PortfolioItem[];
}

interface PortfolioItem {
    id: string;
    name: string;
    description: string;
    image: string;
    media: MediaItem[];
    details: string;
    tags?: string[];
}
```

### Interaction Design

1. **Vertical Navigation**: Users navigate between category rows (Featured, Work, Hobbies, Blog) using:
   - Arrow buttons that appear on hover
   - Keyboard arrows/PageUp/PageDown
   - Side indicator dots

2. **Horizontal Scrolling**: Within a row, users scroll left/right by:
   - Moving mouse to screen edges (auto-scrolls)
   - Items closer to center appear larger and more prominent

3. **Item Selection**: Clicking an item:
   - Zooms into full-screen detail view
   - Reveals content with staggered animations
   - Shows all item metadata, tags, and media gallery

### Styling Approach

- Dark, futuristic color palette (deep blues, purples, cyans)
- Extensive use of `rgba()` for translucent layers
- Glassmorphism effects with `backdrop-filter: blur()`
- 3D transforms with `perspective` and `rotateY`
- Gradient overlays and radial gradients for lighting
- Smooth transitions with cubic-bezier easing
- Performance optimized with `will-change` and `transform` properties

## Development Notes

- The dev server uses `@web/dev-server` with SPA routing enabled
- Hot module replacement (HMR) is configured but may not be fully active
- Static files should be placed in `public/` directory
- The build output directory is `build/`
- Source maps are enabled in development only
