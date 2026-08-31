# Security Policy

## Scope

This repository hosts a static public engineering portfolio and recruiter-facing artifacts. It does not intentionally process credentials, payment data or private user data.

Security-sensitive areas include:

- GitHub Actions and deployment permissions;
- dependency and lockfile changes;
- public resume/privacy content;
- external links and public case-study evidence.

## Reporting

If you find a security or privacy issue, please report it privately by email to `ladra.bastien@gmail.com` rather than publishing sensitive details in a public issue.

Useful reports include the affected path, impact, reproduction steps and a suggested mitigation when available.

## Engineering policy

- GitHub Actions should use least-privilege permissions and immutable commit references.
- Checkout credentials should not persist unless a workflow has an explicit, reviewed write requirement.
- Public artifacts must not expose unnecessary personal information.
- Technical security claims must remain evidence-backed and state material limitations.
- Dependency updates must pass `npm run check` before merge.
