import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface SearchParams {
  status?: string
  search?: string
  tag?: string
  source?: string
}

async function getOpportunities(searchParams: SearchParams) {
  const where: any = {}

  if (searchParams.status && searchParams.status !== 'all') {
    where.status = searchParams.status
  }

  if (searchParams.search) {
    where.OR = [
      { title: { contains: searchParams.search } },
      { buyer: { contains: searchParams.search } },
      { summary: { contains: searchParams.search } },
    ]
  }

  if (searchParams.tag) {
    where.tags = { contains: searchParams.tag }
  }

  if (searchParams.source && searchParams.source !== 'all') {
    where.source = searchParams.source
  }

  return prisma.opportunity.findMany({
    where,
    orderBy: [
      { matchScore: 'desc' },
      { createdAt: 'desc' },
    ],
    take: 100,
  })
}

async function getSources() {
  const sources = await prisma.opportunity.findMany({
    select: { source: true },
    distinct: ['source'],
  })
  return sources.map(s => s.source)
}

async function getStats() {
  const [total, newCount, interestedCount, seenCount, appliedCount] = await Promise.all([
    prisma.opportunity.count(),
    prisma.opportunity.count({ where: { status: 'new' } }),
    prisma.opportunity.count({ where: { status: 'interested' } }),
    prisma.opportunity.count({ where: { status: 'seen' } }),
    prisma.opportunity.count({ where: { status: 'applied' } }),
  ])
  return { total, newCount, interestedCount, seenCount, appliedCount }
}

async function getAllTags() {
  const opportunities = await prisma.opportunity.findMany({
    select: { tags: true },
  })
  const tagSet = new Set<string>()
  opportunities.forEach(opp => {
    try {
      const tags = JSON.parse(opp.tags)
      tags.forEach((tag: string) => tagSet.add(tag))
    } catch {}
  })
  return Array.from(tagSet).sort()
}

async function updateStatus(formData: FormData) {
  'use server'
  const id = formData.get('id') as string
  const status = formData.get('status') as string

  await prisma.opportunity.update({
    where: { id },
    data: { status },
  })

  revalidatePath('/ops')
}

async function quickDismiss(formData: FormData) {
  'use server'
  const id = formData.get('id') as string

  await prisma.opportunity.update({
    where: { id },
    data: { status: 'ignored' },
  })

  revalidatePath('/ops')
}

async function quickInterested(formData: FormData) {
  'use server'
  const id = formData.get('id') as string

  await prisma.opportunity.update({
    where: { id },
    data: { status: 'interested' },
  })

  revalidatePath('/ops')
}

async function runIngestion() {
  'use server'
  const { exec } = require('child_process')
  const util = require('util')
  const execPromise = util.promisify(exec)

  try {
    await execPromise('npm run ingest', {
      cwd: '/home/bilco-local/bilcoworks-site',
      env: { ...process.env },
    })
  } catch (error) {
    console.error('Ingestion error:', error)
  }

  revalidatePath('/ops')
}

export default async function OpsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const [opportunities, stats, allTags, allSources] = await Promise.all([
    getOpportunities(searchParams),
    getStats(),
    getAllTags(),
    getSources(),
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Contract Opportunities</h1>
            <p className="text-sm text-gray-500 mt-1">
              {stats.total} total | {stats.newCount} new | {stats.interestedCount} interested | {stats.seenCount} seen | {stats.appliedCount} applied
            </p>
          </div>
          <form action={runIngestion}>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
            >
              Run Ingestion
            </button>
          </form>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <form method="GET" className="flex flex-wrap gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Status</label>
              <select
                name="status"
                defaultValue={searchParams.status || 'all'}
                className="border rounded px-3 py-1.5 text-sm"
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="interested">Interested</option>
                <option value="seen">Seen</option>
                <option value="applied">Applied</option>
                <option value="ignored">Ignored</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Tag</label>
              <select
                name="tag"
                defaultValue={searchParams.tag || ''}
                className="border rounded px-3 py-1.5 text-sm"
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Source</label>
              <select
                name="source"
                defaultValue={searchParams.source || 'all'}
                className="border rounded px-3 py-1.5 text-sm"
              >
                <option value="all">All Sources</option>
                <option value="adzuna-ca">Canada (Adzuna)</option>
                <option value="jooble">Jooble</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">Search</label>
              <input
                type="text"
                name="search"
                defaultValue={searchParams.search || ''}
                placeholder="Search title, buyer, summary..."
                className="border rounded px-3 py-1.5 text-sm w-full max-w-md"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200"
              >
                Filter
              </button>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buyer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Close Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tags</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {opportunities.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                    No opportunities found. Run ingestion to fetch new opportunities.
                  </td>
                </tr>
              ) : (
                opportunities.map((opp) => {
                  const tags = JSON.parse(opp.tags || '[]')
                  return (
                    <tr key={opp.id} className={
                      opp.status === 'new' ? 'bg-blue-50' :
                      opp.status === 'interested' ? 'bg-purple-50' : ''
                    }>
                      <td className="px-4 py-3">
                        <a
                          href={opp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          {opp.title.length > 60 ? opp.title.slice(0, 60) + '...' : opp.title}
                        </a>
                        {opp.summary && (
                          <p className="text-xs text-gray-500 mt-1">
                            {opp.summary.length > 100 ? opp.summary.slice(0, 100) + '...' : opp.summary}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{opp.buyer || '-'}</td>
                      <td className="px-4 py-3 text-xs text-gray-500">{opp.source}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {opp.closeAt ? new Date(opp.closeAt).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {tags.length > 3 && (
                            <span className="text-xs text-gray-400">+{tags.length - 3}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-sm font-medium ${
                          opp.matchScore >= 70 ? 'text-green-600' :
                          opp.matchScore >= 40 ? 'text-yellow-600' : 'text-gray-400'
                        }`}>
                          {opp.matchScore}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded ${
                          opp.status === 'new' ? 'bg-blue-100 text-blue-700' :
                          opp.status === 'interested' ? 'bg-purple-100 text-purple-700' :
                          opp.status === 'seen' ? 'bg-gray-100 text-gray-600' :
                          opp.status === 'applied' ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {opp.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          {opp.status !== 'interested' && (
                            <form action={quickInterested}>
                              <input type="hidden" name="id" value={opp.id} />
                              <button
                                type="submit"
                                className="text-xs px-2 py-1 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded"
                                title="Mark as Interested"
                              >
                                +
                              </button>
                            </form>
                          )}
                          {opp.status !== 'ignored' && (
                            <form action={quickDismiss}>
                              <input type="hidden" name="id" value={opp.id} />
                              <button
                                type="submit"
                                className="text-xs px-2 py-1 bg-red-100 text-red-600 hover:bg-red-200 rounded"
                                title="Dismiss"
                              >
                                x
                              </button>
                            </form>
                          )}
                          <form action={updateStatus} className="flex gap-1">
                            <input type="hidden" name="id" value={opp.id} />
                            <select
                              name="status"
                              defaultValue={opp.status}
                              className="text-xs border rounded px-1 py-0.5"
                            >
                              <option value="new">New</option>
                              <option value="interested">Interested</option>
                              <option value="seen">Seen</option>
                              <option value="applied">Applied</option>
                              <option value="ignored">Ignored</option>
                            </select>
                            <button
                              type="submit"
                              className="text-xs px-2 py-0.5 bg-gray-100 hover:bg-gray-200 rounded"
                            >
                              Set
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Recent Runs */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Ingestion Runs</h2>
          <RecentRuns />
        </div>
      </div>
    </div>
  )
}

async function RecentRuns() {
  const runs = await prisma.sourceRun.findMany({
    orderBy: { startedAt: 'desc' },
    take: 10,
  })

  if (runs.length === 0) {
    return <p className="text-sm text-gray-500">No runs yet.</p>
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Source</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Started</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Items</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Errors</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {runs.map((run) => (
            <tr key={run.id}>
              <td className="px-4 py-2 text-sm text-gray-600">{run.source}</td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {new Date(run.startedAt).toLocaleString()}
              </td>
              <td className="px-4 py-2 text-sm text-gray-600">{run.itemCount}</td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {run.errorCount > 0 ? (
                  <span className="text-red-600">{run.errorCount}</span>
                ) : (
                  <span className="text-green-600">0</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
