# Lucky Mario

Lucky Mario browser game

## Schuppertag Organizer's Guide
 
### Setup; Mentors
 
* Run `npx get-pnpm` in a Terminal.
* Copy `Folder` from test-Drive.
* Open `VS Code`.
* `Trust` Workspace (via `manage` in the bar).
* Run `pnpm install` in the project root.
* Run `pnpm dev` in the project root.
* Open the Website in the `Browser` (Chrome/Edge)
 

### Guided Programming

* Go into style.css and find "HIER FARBEN EINFÜGEN". 
  Snippet "farben"
* Talk about R, G, and B values, and test them (5 min)
* Insert `mario` as the font name, talk avout fonts
* Insert the button with "knopf" in the html, talk about events
* increment `imageIndex`
* Insert end image
* Add Gradient
* Individual Color design with CSS variables & speed

## How to run

Requires Node.js 24 or newer and npm installed.

Install pnpm and the project dependencies on first run:
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

## License

[CC0 1.0 Universal](LICENSE).

## Intentional choices

For ease of reading and the preferred styling, these review findings are accepted:

- Clicking all four reels before Start can produce a win.
- Buttons omit visible keyboard focus indicators.
- The result overlay omits accessible dialog semantics.

The latter two choices reduce accessibility for keyboard and screen-reader users.
