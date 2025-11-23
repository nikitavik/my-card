# My Card

A modern personal card/profile application built with Next.js 15 and React 19.

## Tech Stack

- **Framework:** Next.js 15.5.3 (with Turbopack)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Linting/Formatting:** Biome

## Architecture

This project follows a Feature-Sliced Design (FSD) architecture with the following layers:
- `shared/` - reusable UI components, utilities, types
- `widgets/` - composite UI blocks
- `app/` - Next.js app router pages

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## Development

The main application code lives in the `src/` directory following FSD principles. Each layer exports only through `index.ts` files to maintain clean boundaries.
