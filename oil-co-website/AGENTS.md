# Guidelines

* The project uses `framer-motion` for UI animations.
* The Next.js project is configured for static exports (`output: export`). Use `cd oil-co-website && npm run dev` to start the local development server, as `npm run start` will fail.
* Due to Next.js static export constraints (`output: export`), dynamic routes require `generateStaticParams()`. Additionally, components using `useSearchParams()` or accessing `searchParams` must be implemented as Client Components wrapped in a `<Suspense>` boundary to prevent static build errors.
* We use **shadcn/ui** for component primitives. Lazily install shadcn components via the CLI (`npx shadcn@latest add <component>`) as they are needed, rather than adding them all at once. Try to reuse other people's code by default when it already exists and is good (e.g. shadcn components) to avoid rolling custom UI that is hard to maintain and lacks accessibility.
* Ensure log files (e.g., `dev_server.log`) generated during local development and testing are removed or ignored before making a commit and requesting code review.
* Break out large, reusable UI structures into separate React component files to avoid gigantic TSX files. However, for file-specific, non-reusable sub-components, extract them as local components within the same file instead of creating new files.
* Try not to use the `any` type in TypeScript; define specific, explicit types instead to ensure type safety.
* The project uses `lucide-react` for icons.
* Keep localization files clean by removing 'dead' or unused text. Complex structures like navigation dropdowns, their nested contents, and their routes should be defined entirely within the localization files.
* Do not use inline conditional rendering for localization (e.g., `lang === 'en' ? ... : ...`). Always define text content strictly within the localization files (`zh.ts`, `en.ts`).
* The user favors the design, aesthetic, and structure of the `/news` route, considering it a benchmark for UI consistency across the site.
* When translating content (e.g., from Chinese to English), prioritize a natural, polished, and corporate tone over strictly literal translations to ensure readability for the target audience.
* Localization is implemented using a custom `useTranslation` hook located in `src/hooks/`, which manages content switching based on a `lang` URL query parameter.
* Brand colors are defined as CSS custom properties in `src/app/globals.css` (e.g., `--brand-deep-blue`, `--brand-red`, `--brand-orange`, `--brand-white`) and mapped to shadcn variables.
* Reusable UI components are organized in the `oil-co-website/src/components` directory.
* Text content is stored in `src/locales/` (e.g., `en.ts`, `zh.ts`) and passed to stateless UI components via props to ensure separation of concerns.
* The project is a Next.js application using TypeScript and Tailwind CSS, located in the `oil-co-website` directory.
* Use `cd oil-co-website && npm run build` to verify that the Next.js static export compiles successfully without typing or build errors prior to submitting code.
* Run `npm run test` (which executes ESLint) to check for and fix TypeScript or linting errors prior to committing any changes.
* The project uses Tailwind CSS v4, which does not use a standard `tailwind.config.ts` configuration file.
