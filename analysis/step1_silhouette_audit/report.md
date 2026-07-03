# Step 1 Silhouette Audit — BLOCKED: raw counts are not publicly accessible

**Date:** 2026-07-03
**Branch:** `claude/silhouette-gap-audit-step1-sd53ij`
**Status:** Stopped at Step 1 per protocol ("If raw counts for any arm are missing, stop and report exactly what exists"). No silhouettes were computed; computing them on anything other than the raw counts would defeat the audit.

## Where the project actually lives

The quantum entanglement classification project is **not** in this repository (see
`site_inventory/` and the first commit on this branch for the exhaustive repo search).
It is a separate web application at **quantum.bilco.ca** (self-reported `version: 1.2.0`,
Flask behind Cloudflare). This audit inventoried every publicly reachable artifact on
that site: the dashboard, the Data Explorer, the HTML research paper (`/research`), the
rendered PDF (`/research/pdf`), the experimental-methods PDF
(`/static/experimental-methods-paper.pdf`), and every API endpoint referenced by the
site's JavaScript.

## What exists, per arm

| Arm | Published score | Metadata | Raw bitstring counts | Feature vectors | 2D embeddings |
|---|---|---|---|---|---|
| ibm_fez (`REAL_HARDWARE_20260130_174630`, job `d5ueikhfodos73emack0`) | 0.8324 | ✅ 80 states (20/class), 4096 shots | ❌ **not exposed** | ❌ not exposed | PNG images only |
| ibm_marrakesh (`REAL_HARDWARE_20260312_164823`, job `d6pam9s3pels73a3oah0`) | 0.802 | ✅ 80 states (20/class), 4096 shots | ❌ **not exposed** | ❌ not exposed | PNG images only |
| Simulation (`REALISTIC_SIMULATION_20260208_162602`) | 0.7036 (the published "0.703") | ✅ 200 states (50/class), 1024 shots, noise params | ❌ **not exposed** | ❌ not exposed | PNG images only |

Endpoint-by-endpoint findings (evidence in `site_inventory/`):

- **`GET /api/experiments?limit=100`** — 39 experiments: 2 REAL_HARDWARE, 18
  REALISTIC_SIMULATION, 19 SIMULATED_IDEAL. Metadata only.
- **`GET /api/experiments/{id}`** — per-experiment metadata (n_samples, n_shots,
  label_counts, silhouette_score, noise params, job_id) plus three base64 PNGs
  (correlation heatmap, PCA scatter, t-SNE scatter). **No counts, no feature vectors.**
  The Data Explorer's "download" button just saves this same JSON.
- **`GET /api/export/json` and `/api/export/csv`** — a single 100-sample dataset
  (25/class) containing **only 2D t-SNE and 2D PCA coordinates**. It matches none of
  the three published arms (wrong n, and 2D embeddings are exactly the space the audit
  must escape). Query parameters (`experiment_id`, `source`, `raw`) are ignored.
- **`GET /api/ibm-quantum/job/{job_id}/results`** — returns HTTP 400
  `{"error":"No valid data extracted from results"}` for both hardware job IDs. This
  endpoint appears to fetch from IBM Quantum live rather than from a local bank, and
  the jobs have expired upstream.
- Probed variants (`/counts`, `/raw`, `/features`, `/download`, `/export`,
  `?include=counts`) — all 404 or ignored.
- **Papers** — neither the HTML research paper, its PDF render, nor the
  experimental-methods PDF contains a data-availability statement, repository link, or
  download location for the raw counts. The only external code link is to the generic
  Qiskit GitHub.

**Conclusion:** the banked raw counts exist only server-side (in the Flask app's private
storage) or in the app's source repository, neither of which is reachable from this
session. Every public artifact is either metadata, a rendered image, or a 2D embedding —
i.e., only the post-t-SNE/post-PCA outputs whose validity this audit is meant to test.

## Incidental findings relevant to the audit (from metadata alone)

1. **The published sim baseline 0.703 is the maximum of 18 realistic-simulation runs**,
   whose silhouette scores span **0.6266–0.7036** (mean 0.676, median 0.680). Quoting
   the max is conservative for the paper's claim (it minimizes the hardware-vs-sim gap),
   but the ~0.08 spread across nominally identical sim runs is itself a useful yardstick:
   the fez-vs-marrakesh difference (0.0324) is well inside that run-to-run variability.
2. **The confounds in the audit premise are confirmed by the site's own metadata**:
   hardware arms are 80 states × 4096 shots; the realistic-sim arm is 200 states ×
   1024 shots. Fewer states and more shots both mechanically inflate silhouette.
3. The paper's methodology section confirms the published scores were computed after a
   **PCA(50) → t-SNE(2D, perplexity 30)** pipeline, and the feature recipe
   (⟨Zᵢ⟩, ⟨ZᵢZⱼ⟩, distribution entropy, purity from second moments, off-diagonal
   elements from tomography bases) is described in prose — enough to reimplement
   Step 3 faithfully once counts are available.
4. Minor bookkeeping inconsistencies in the site's own records (e.g., a SIMULATED_IDEAL
   experiment reporting `n_samples: 50` with label counts summing to 48) suggest the
   validation pass in Step 2 of the protocol will be worth running strictly.

## What is needed to unblock

Any one of the following:

1. **Add the quantum app's source/data repository to this session** (the Flask app
   behind quantum.bilco.ca — it must contain or reference the banked counts it serves
   silhouettes from), or
2. **Export the banked counts server-side** (per-circuit bitstring→count maps for the
   720 fez circuits, 400 marrakesh circuits, and the 200-state sim run, with state
   labels and basis labels) and commit them here or expose them via an authenticated
   endpoint, or
3. Provide the original IBM job result files (`d5ueikhfodos73emack0`,
   `d6pam9s3pels73a3oah0`) if they were saved locally at run time — the live IBM
   retrieval path is already broken.

Once counts for all three arms are available, Steps 2–6 (validation, feature rebuild,
raw-space/PCA/t-SNE silhouettes with seeded bootstrap CIs, fez-5 basis restriction) can
run exactly as specified.

## Evidence files

`site_inventory/` contains the fetched API responses (base64 images stripped from the
detail JSONs, noted in place): the 39-experiment list, the JSON/CSV exports, and the
detail records for both hardware runs, the published 0.7036 sim run, and one ideal-sim
example.
