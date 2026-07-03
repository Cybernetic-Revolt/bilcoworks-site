# Step 1 Silhouette Audit — BLOCKED: No banked data in this repository

**Date:** 2026-07-03
**Branch:** `claude/silhouette-gap-audit-step1-sd53ij`
**Status:** Stopped at Step 1 per protocol ("If raw counts for any arm are missing, stop and report exactly what exists").

## Finding

The repository `cybernetic-revolt/bilcoworks-site` does **not** contain the quantum
entanglement classification project or any of its banked measurement data. It is the
Next.js/TypeScript marketing website and internal ops tooling for Bilco Works, an HRIS
consulting firm (bilcoworks.com).

## What was searched

1. **Full-text search** of every file in the working tree (case-insensitive) for:
   `quantum`, `qiskit`, `silhouette`, `ibm_fez`, `marrakesh`, `GHZ`, `entangle`.
   Only hit: a coincidental `ghZ` substring inside a base64 integrity hash in
   `package-lock.json`. No real matches.
2. **File-type sweep** for data and analysis artifacts (`*.json`, `*.csv`, `*.pkl`,
   `*.pickle`, `*.npz`, `*.npy`, `*.h5`, `*.hdf5`, `*.parquet`, `*.py`, `*.ipynb`)
   excluding `node_modules` and `.git`. Results: only TypeScript/Node config JSON
   (`package.json`, `tsconfig.json`, etc.). Zero Python files, zero notebooks, zero
   data files.
3. **Full git history, all branches** (`git rev-list --objects --all`), filtering every
   object path ever committed for `quantum|fez|marrakesh|counts|shots|tomograph`.
   Zero matches — the data was never committed and later deleted; it simply never
   existed here. The repo has 6 commits and 48 tracked files, all website code.
4. **Branch listing:** only `main` and this audit branch exist on the remote.

## What exists per arm

| Arm | Expected | Found |
|---|---|---|
| ibm_fez (Jan 30 2026, 720 circuits × 4096 shots) | raw bitstring counts | **nothing** |
| ibm_marrakesh (Mar 12 2026, 400 circuits × 4096 shots) | raw bitstring counts | **nothing** |
| Simulation (200 states × 1024 shots) | raw bitstring counts | **nothing** |
| Feature-extraction / analysis code | Python pipeline | **nothing** |

No steps beyond Step 1 (validation, feature rebuild, silhouette computation, bootstrap)
were attempted — there is no data to run them on.

## What is needed to proceed

- The actual repository (or data directory) behind quantum.bilco.ca containing the
  banked counts for all three arms and the existing feature-extraction code. This
  session's GitHub scope covers only `cybernetic-revolt/bilcoworks-site`; the correct
  repo must be added to the session (or the data committed/provided here) before the
  audit can run.

No silhouette numbers are reported and no verdict (ARTIFACT-LEANING vs
PHYSICAL-CANDIDATE-LEANING) is offered: computing anything without the raw counts
would defeat the purpose of the audit.
