Repository high-signal notes for agents

- Runtime
  - CI uses Node 20. Use Node 20 locally to match CI (actions/setup-node@v4 node-version: '20').

- Install
  - Use `npm ci` at the repository root (package-lock.json exists). Do not run installs inside `.opencode/`.

- Tests
  - Run `npm test` (runs `node test/run-tests.js`).
  - Important: the test runner is a JS file that registers `ts-node` with `transpileOnly: true` and then `require`s `src/*` TypeScript files. DevDependencies (ts-node, typescript, @types/node) must be installed for tests to run.
  - Note: tests do NOT type-check by default (ts-node is used with transpileOnly). To catch type errors run `npm run build` (invokes `tsc`).

- Build / publish
  - Build with `npm run build` (runs `tsc -p tsconfig.json`). Output -> `dist/` per tsconfig.json.
  - package.json `main` points to `src/index.js` (tests import `src/index` via ts-node). Do a `npm run build` before preparing any release/artifact.

- Lint / Format
  - Lint: `npm run lint` (ESLint checks .ts and .js files). Config is `.eslintrc.cjs`.
  - Format: `npm run format` (Prettier). CI performs `npx prettier --check .` before lint/build.

- CI order (mirror locally when verifying):
  1. `npm ci`

2.  `npx prettier --check .`
3.  `npm run lint`
4.  `npm run build`
5.  `npm test`

- Project shape / gotchas
  - Single-package TypeScript library. Source in `src/`, tests in `test/`.
  - `tsconfig.json` sets `rootDir: src` and `outDir: dist`; `dist` is excluded from the repo.
  - Do not edit files under `.opencode/` unless you know what you're doing: it contains OpenCode config and a bundled SDK. `.opencode/opencode.json` includes a permission rule that allows `git push *` for agents.

- When changing dependencies or lockfile
  - Update and commit `package-lock.json`. CI uses `npm ci` so the lockfile must be authoritative.

- Quick commands
  - Install: `npm ci`
  - Test: `npm test`
  - Build (typecheck): `npm run build`
  - Lint: `npm run lint`
  - Format: `npm run format`

Keep this file minimal. If you need more context, read `package.json`, `tsconfig.json`, `.github/workflows/ci.yml`, and `test/run-tests.js`.

- Git / commits
  - Always use semantic commit messages (Conventional Commits style) when making git commits. Format: `type(scope?): short subject`.
  - Examples: `feat: add logging to payment flow`, `fix(auth): handle expired token`.
  - A local `git commit` hook (husky + lint-staged) runs Prettier on staged files before every commit. If formatting fails, fix with `npx prettier --write .` then re-stage and commit. Bypass with `git commit --no-verify`.
