Next steps to continue ProjectChat work

1) Local dev sanity checks
   - Run: `node scripts/build-content-bundle.cjs`
   - Start dev server: `yarn dev` or `npm run dev`
   - Flow to test: Packages -> open ProjectChat modal -> pick template or describe -> ensure timeframe is required -> fill email -> submit -> verify Formspree receives JSON and modal closes (listen for `projectChat:sent`).

2) Confirm timeframe enforcement
   - File: `src/Components/Widgets/ProjectChat.Widget.tsx`
   - Behavior: submission should reject missing `summary.timeframe` and show localized `strings.timeframeRequired`.

3) Lint / typecheck
   - Run: `yarn lint` / `npm run lint` and `yarn tsc --noEmit` (or project-specific commands)
   - Fix issues around dynamic imports, unused vars, and types in `src/lib/project-extractor.ts` and widget.

4) Accessibility & UX polish (recommended)
   - Add focus trap to modal and ESC-to-close.
   - Make toast accessible: `aria-live="polite"`.
   - Ensure form controls have `label`/`htmlFor` and `required` where appropriate.

5) Tests
   - Unit: `parseBudget()` and extractor scoring in `src/lib/project-extractor.ts`.
   - Integration: simulate submit, assert `projectChat:sent` event and normalized payload structure.

6) Optional infra change
   - Replace Formspree with a small serverless forwarder (Vercel/Workers) to validate/store leads and forward notifications.
   - Move endpoint to env var instead of hard-coded string in `src/Components/Widgets/ProjectChat.Widget.tsx`.

7) Repo housekeeping
   - Run Prettier/ESLint, remove dead code, ensure consistent line endings.
   - Push branch `feature/chatbot` and open PR with checklist and demo instructions.

Files of interest
- `src/Components/Widgets/ProjectChat.Widget.tsx`
- `src/lib/project-extractor.ts`
- `scripts/build-content-bundle.cjs`
- `src/content-bundle/projects.json`
- `src/locales/en.json`, `src/locales/es.json`

Planned verification tomorrow
- Re-run steps 1–3 and record any type/lint failures.
- Manually test the modal's accessibility behavior.

Timestamp: 2026-06-02
