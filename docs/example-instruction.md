# Example Instruction

Title: Run tests and report

Goal:
- Run the test suite and return a one-line summary: "All tests passed" or "X tests failed".

Inputs:
- None

Outputs:
- Plain-text one-line summary of test results.

Steps (agent):
1. Run `npm ci` (or `npm install` if no lockfile).
2. Run `npm test` and capture the output.
3. Reply with a one-line summary.
