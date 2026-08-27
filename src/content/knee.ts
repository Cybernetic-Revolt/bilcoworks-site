/**
 * The Knee Ledger's live figures — single source of truth.
 *
 * These numbers move while the competition runs, and they were previously
 * hardcoded in four places across three pages, so a score change meant finding
 * every copy. The homepage, the AI practice page and the project page now all
 * read from here.
 *
 * Last updated 2026-08-27 from the campaign's own status page.
 */

/** Headline score. Referenced in prose as well as in the stat row. */
export const bestScore = '0.937'

/** Standing on the main leaderboard. */
export const rank = 'Top 3%'

/** Field size. The hero rounds it; the status line states it exactly. */
export const teamsApprox = '2,300'
export const teamsExact = '2,324'

export const stats = [
  { value: bestScore, label: 'Best public score' },
  { value: rank, label: 'Main leaderboard' },
  { value: '~20 min', label: 'Efficiency-entry runtime' },
  { value: '50+', label: 'Gated experiments' },
]

/**
 * The leaderboard climb. `height` is the bar's share of the plot, mapped over
 * a 0.75–0.95 macro-AUC range so the rungs stay honestly proportional.
 */
export const climb = [
  { score: '.777', label: 'baseline', height: '14%' },
  { score: '.833', label: 'adapted backbone', height: '42%' },
  { score: '.874', label: '+expert data', height: '62%' },
  { score: '.899', label: '+distillation', height: '75%' },
  { score: '.937', label: 'commons harvest', height: '94%' },
]

/** Read out as the chart's alt text, so the figures cannot drift from the bars. */
export const climbLabel = `Leaderboard progression, macro-AUC: ${climb
  .map((c) => `${c.label} ${c.score.replace('.', '0.')}`)
  .join(', ')}`

/** The stack the campaign actually runs on. */
export const runsOn = 'One RTX 4090 · PyTorch · DINOv2 · a ledger'
