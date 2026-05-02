# WeLoveMovies ROADME

This file tracks where the project stands today and the planned v3 automation work.

## Current Baseline

- Latest release: `2.4.3` (2026-05-01).
- Primary monthly maintenance pattern: recreate Render free-tier Postgres, run migrations/seeds, redeploy back-end then front-end, and smoke test endpoints.
- Source of truth for version history: `VERSION.md`.
- Source of truth for monthly runbook: `Monthly_Prod_Notes.md`.

## Key Change History (Condensed)

### 1.x to 2.0

- `1.0.0` initial capstone release.
- `1.1.0` theaters route enabled.
- `1.2.0` reviews `PUT/DELETE` enabled.
- `2.0.0` cloud deployment established.

### 2.0.x to 2.3.x

- Local dev support and route/docs improvements.
- Monthly Render DB maintenance process was formalized and refined.
- Security and dependency updates were applied over multiple releases.
- Node runtime upgraded during `2.3.0` series.

### 2.4.x series

- `2.4.0`: docs cleanup and Postgres 18 refresh.
- `2.4.1`: monthly refresh + runbook updates.
- `2.4.2`: monthly refresh + production redeploy runbook update.
- `2.4.3`: monthly refresh + production redeploy.

### Recent merged PRs (post-2.4.2)

- `#49` release metadata bump and monthly refresh references for `2.4.3`.
- `#46` Dependabot bump: `picomatch` to `2.3.2`.
- `#47` Dependabot bump: `path-to-regexp` to `0.1.13`.
- `#48` Dependabot bump: `lodash` to `4.18.1`.
- `#44` Dependabot bump: `minimatch` to `3.1.5`.

## v3 Automation Plan

## 3.0.0 - Monthly Refresh Automation Foundation

1. Add `.env.example` with clearly documented required variables for local, development, and production operations.
2. Add `scripts/refresh-prod-db.sh` to run production-targeted migrations and seeds with required env flags (`NODE_ENV=production`, SSL compatibility settings).
3. Add `scripts/smoke-prod.sh` to validate key deployed API endpoints and fail fast on non-200/non-404 expected responses.
4. Add npm scripts for one-command execution (for example: `refresh:prod`, `smoke:prod`, `monthly:verify`).
5. Update `README.md` with an automation section that separates manual Render steps from scriptable local steps.

## 3.1.0 - Release and Documentation Automation

1. Add `scripts/release-bump.sh` to update `package.json`, `package-lock.json`, `src/app.js` build banner, and append a new `VERSION.md` entry.
2. Add `scripts/monthly-notes-template.sh` to append a dated checklist entry to `Monthly_Prod_Notes.md` history.
3. Add a short validation checklist output at script completion to reduce missed redeploy steps.

## 3.2.0 - CI Guardrails

1. Add a manual GitHub Actions workflow (`workflow_dispatch`) to run smoke tests against the deployed API URL.
2. Add a CI job to run `npm test` on PRs for route/controller/service changes.
3. Add a lightweight check that release/version references stay in sync when version files change.

## 3.3.0 - Optional Quality of Life Improvements

1. Add script preflight checks for required CLI tools (`node`, `npm`, `knex`, `curl`).
2. Add clearer error messaging for DB connection and SSL negotiation issues.
3. Consider explicit production migration control at startup to avoid accidental migration behavior on service boot.

## Working Rules for v3 Branches

- Keep automation scripts idempotent where possible.
- Keep secrets out of source control; rely on `.env` and Render environment variables only.
- Keep docs updated in the same PR as script changes.
- Validate with `npm test` and smoke checks before each monthly release PR.
