# Lucky Mario

Schuppertag-Projekt

## How to run

Requires Node.js and npm installed.

Install pnpm, the better package manager foe Node.js, and install dependencies, only on first run:
```bash
npx get-pnpm

# In a new terminal
pnpm install
```

To start the server:
```bash
pnpm dev
```

To check for lint issues with Biome:
```
pnpm lint
```

To reformat files with Biome:
```
pnpm format
```

To check formatting without changing files:
```bash
pnpm format:check
```

To check linting and formatting together:
```bash
pnpm check
```

Install the recommended Biome VS Code extension for formatting on save.


## GitHub Pages

Pushes to `main` run Biome linting, formatting checks, and the TypeScript/Vite build.
GitHub Pages is deployed only after all checks pass. The workflow can also be run manually.

Run the same checks locally before pushing:
```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm format:check
pnpm check
pnpm build
```
