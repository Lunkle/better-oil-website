# Better Petroleum - UI Guidelines

## Global Guidelines
- **Sharp Edges:** Do not use rounded corners anywhere in the application. All UI elements (cards, buttons, tables, images, layouts, diagrams, etc.) must have sharp, 90-degree square corners.
- Avoid Tailwind classes such as \`rounded\`, \`rounded-md\`, \`rounded-lg\`, \`rounded-xl\`, \`rounded-2xl\`, \`rounded-3xl\`, and \`rounded-full\`.

## Architecture
- Break out large, reusable UI structures into separate React component files to avoid gigantic TSX files. However, for file-specific, non-reusable sub-components, extract them as local components within the same file instead of creating new files.
- Keep localization files clean. Complex structures like navigation dropdowns, their nested contents, and their routes should be defined entirely within the localization files.
- Do not use inline conditional rendering for localization (e.g., \`lang === 'en' ? ... : ...\`). Always define text content strictly within the localization files (\`zh.ts\`, \`en.ts\`).
