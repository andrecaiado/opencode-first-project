# Permissions

This document explains recommended repository permissions and review rules for collaborators.

Recommendations

- Protect the main branch with branch protection rules: require pull requests, require reviews, and enable status checks (CI).
- Use CODEOWNERS to automatically request reviewers for critical paths.
- Limit write access to trusted contributors and use teams for broader access control.

Suggested branch protection settings (GitHub)

- Require pull request before merging
- Require at least 1 approving review
- Require status checks to pass (CI)
- Dismiss stale pull request approvals when new commits are pushed

Common paths and ownership

- `src/` — backend and app code ownership
- `.github/workflows/` — CI and workflows ownership
- `docs/` — docs ownership

How to apply

- Create a CODEOWNERS file under `.github/` or the repository root (example provided).
- Configure branch protection in the repository settings (Admin rights required).

Notes

- This file is informational. To enforce reviews and CI you must enable branch protection in GitHub settings and add CODEOWNERS.
