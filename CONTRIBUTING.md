# Contributing

This repository is a public engineering portfolio. Changes should improve clarity, evidence, maintainability or security rather than add decorative complexity.

## Workflow

1. Create a focused branch from `master`.
2. Make the smallest coherent change.
3. Run:

```bash
npm ci
npm run check
```

4. Open a pull request and explain the user-facing or engineering value.
5. Merge only after the `build` check is green.

## Evidence standard

Technical claims must be traceable to at least one of:

- a public repository implementation;
- a verified professional/CV source;
- a reproducible measurement;
- an explicitly labelled research direction or hypothesis.

Do not inflate outcomes or imply production guarantees that the underlying project does not provide.

## Privacy standard

Public artifacts must not introduce unnecessary personal data. In particular, do not publish a private phone number, home/street address or sensitive client information.

## Frontend standard

- preserve keyboard navigation and visible focus states;
- preserve reduced-motion support;
- keep layouts usable on mobile and desktop;
- prefer semantic HTML over JavaScript for static recruiter-facing artifacts;
- avoid adding dependencies when the same result is practical with platform APIs or existing tooling.

## Dependency changes

Patch/minor maintenance may be merged after green CI and review of release scope. Major framework/tooling upgrades are intentional migration work and should not be auto-merged.
