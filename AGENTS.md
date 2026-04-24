# Agent Instructions

Welcome! This document provides crucial context, architectural guidelines, and rules for agents working on this project. Please review these guidelines before creating your plan and executing tasks.

## General Principles
- **Deep Planning Mode:** Before making changes, engage in deep planning. Ask questions and confirm assumptions, even if the task seems clear. Create a plan only after achieving absolute certainty. Execute autonomously without further questions once the plan is set.
- **Understand the Scope:** The project is a Next.js application using TypeScript and Tailwind CSS, located in the `oil-co-website` directory. Always navigate to this directory before running scripts.

## Tech Stack & Architecture
- **Next.js Static Export:** The Next.js project is configured for static exports (`output: export`).
  - **Dev Server:** Use `cd oil-co-website && npm run dev` to start the local development server (do not use `npm run start` as it will fail for static exports).
  - **Dynamic Routes:** Due to static export constraints, dynamic routes require `generateStaticParams()`.
  - **Client Components & Suspense:** Components using `useSearchParams()` or accessing `searchParams` must be implemented as Client Components wrapped in a `<Suspense>` boundary to prevent static build errors.

## TypeScript Rules
- **Avoid `any`:** Try not to use the `any` type. Take the time to define specific, accurate TypeScript interfaces and types for your data structures, props, and variables.

## Component Structure
- **Reusable vs. Local:** Break out large, reusable UI structures into separate React component files in `oil-co-website/src/components/` to avoid gigantic TSX files. However, for file-specific, non-reusable sub-components, extract them as local components within the same file instead of creating new files.

## Localization & Internationalization
- **Strict Separation:** Text content is stored in `src/locales/` (e.g., `en.ts`, `zh.ts`) and passed to stateless UI components via props to ensure separation of concerns.
- **No Inline Logic:** Do not use inline conditional rendering for localization (e.g., `lang === 'en' ? ... : ...`). Always define text content strictly within the localization files.
- **Custom Hook:** Localization is implemented using a custom `useTranslation` hook located in `src/hooks/`, which manages content switching based on a `lang` URL query parameter.
- **Translation Tone:** When translating content (e.g., from Chinese to English), prioritize a natural, polished, and corporate tone over strictly literal translations to ensure readability for the target audience.
- **Complex Structures:** Keep localization files clean by removing 'dead' or unused text. Complex structures like navigation dropdowns, their nested contents, and their routes should be defined entirely within the localization files.

## Dependencies
- **Use External Libraries:** It is encouraged to add new dependencies to avoid writing hard-to-maintain custom code. However, you **must** always request permission from the user before installing any new external dependencies.
- **Prefer Reuse:** In general, prefer reusing well-maintained external code (e.g., UI libraries, utility libraries) over rolling custom implementations. External libraries often provide better accessibility, test coverage, and maintenance.
- **Existing Libraries:** The project already uses `framer-motion` for UI animations and `lucide-react` for icons. Utilize these when appropriate.
- **Shadcn UI:** The project uses [Shadcn/ui](https://ui.shadcn.com/) for UI primitives (buttons, navigation menus, etc.). Install components **lazily as needed** — only add a component when it is required. Components live in `src/components/ui/`. The base utilities are in `src/lib/utils.ts`. Because the sandbox has no internet access to ui.shadcn.com, new Shadcn components must be created manually by copying the standard component source from the Shadcn docs and installing required `@radix-ui/*` npm packages. All Shadcn components use our brand color palette (see `globals.css`) and `--radius: 0rem` (zero border radius).

## Pre-commit & Testing Checklist
- **Compile Check:** Use `cd oil-co-website && npm run build` to verify that the Next.js static export compiles successfully without typing or build errors prior to submitting code.
- **Linting:** Run `cd oil-co-website && npm run test` (which executes ESLint) to check for and fix TypeScript or linting errors prior to committing any changes.
- **Clean Up Logs:** Ensure log files (e.g., `dev_server.log`) generated during local development and testing are removed or ignored before making a commit and requesting code review.
