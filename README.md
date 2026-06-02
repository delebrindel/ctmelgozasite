# ctmelgozasite

Hi — thanks for taking a peek. This is a private portfolio project and not a public product; if you found this repo and want to see more of my work, check my GitHub: https://github.com/delebrindel.

A small single‑page web app built with React, TypeScript and Vite. The repo is intended as a portfolio piece — concise, readable, and easy to run locally.

--

## Quick links

- Live assets used in this README: `public/profile.jpg`, `public/vite.svg`, `public/cv.pdf`
- Architecture notes: `docs/arch/README-architecture.md`
- Changelog: `docs/CHANGELOG.md`

## Tech stack

- Framework: React + TypeScript
- Build: Vite
- Styling: Tailwind CSS
- State: Zustand
- UI helpers: Headless UI + Heroicons

## Preview

![Profile](/profile.jpg)

## Getting started (local)

1. Clone the repo and install:

```bash
git clone <repository-url>
cd ctmelgozasite
npm install
# or: yarn install
```

2. Run the dev server:

```bash
npm run dev
# or: yarn dev
```

3. Build for production:

```bash
npm run build
npm run preview
```

## Environment & configuration

- This project uses a small set of environment variables (if any). If you need to add `.env` files locally, do not commit them. Example:

```
# .env.local
VITE_API_URL=http://localhost:3000
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — produce production build
- `npm run preview` — preview build locally
- `npm run lint` — run linters

## Architecture (short)

See `docs/arch/README-architecture.md` for a short diagram and notes. The app is a client‑side SPA using Vite for fast dev iteration and a small component-first structure under `src/`.

## CV

If you want a quick summary, my CV is included in the repo: `public/cv.pdf`.

## Contribution & privacy

This repo is a personal portfolio. If you have feedback, open an issue or reach out via my GitHub profile. There is no expectation of public contributions — treat this as a showcase.

## Changelog

See `docs/CHANGELOG.md` for an initial changelog and guidance on keeping it updated.

## License

Add your license here (if you want one). If this remains private, you can omit a license file.

--

Notes:
- Replace `https://github.com/<your-username>` with your GitHub handle.
 - GitHub: https://github.com/delebrindel
- If you prefer different image paths, move assets into `public/` root and update references above.
