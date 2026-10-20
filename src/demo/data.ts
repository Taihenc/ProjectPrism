import { withKeywords } from '../prism'
import type { Engagement, GraphEdge, KnowledgeGraph } from '../prism'

/**
 * Demo graph for a made-up developer. Every person, company and project here
 * is fictional; replace this file with your own data.
 */

const asset = (file: string) => `${import.meta.env.BASE_URL}demo/${file}`

const groups: KnowledgeGraph['groups'] = [
  { id: 'experience', label: 'Experience', color: '#f4b860' },
  { id: 'activity', label: 'University', color: '#f29fc5' },
  { id: 'project', label: 'Side projects', color: '#5fd3c6' },
  { id: 'domain', label: 'Domains', color: '#a99cf5' },
  { id: 'language', label: 'Languages', color: '#8fa3bf' },
  { id: 'job', label: 'Job type', color: '#7cc4f2' },
  { id: 'keyword', label: 'Keywords', color: '#e6d37a' },
]

const nodes: KnowledgeGraph['nodes'] = [
  // ---------------------------------------------------------------- experience
  {
    id: 'northwind',
    kind: 'work',
    status: 'current', // pulsing ring and a NOW tag
    group: 'experience',
    label: 'Northwind Labs',
    title: 'Northwind Labs',
    organization: 'Northwind Labs (fictional)',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jan 2025 - now',
        engagement: 'full-time',
      },
    ],
    summary:
      'Search and recommendations for a mid-size e-commerce platform: retrieval, ranking and the services around them.',
    highlights: [
      'Built a hybrid search service (BM25 + embeddings) in Go that cut zero-result queries by 40%.',
      'Added offline ranking evals so every model change ships with a quality report.',
    ],
    logo: asset('northwind.svg'),
    images: [asset('northwind-banner.svg')],
    links: [{ label: 'Example link', url: 'https://example.com/' }],
  },
  {
    id: 'lumen',
    kind: 'work',
    group: 'experience',
    remote: true,
    label: 'Lumen Pay',
    title: 'Lumen Pay',
    organization: 'Lumen Pay (fictional)',
    roles: [
      {
        title: 'Backend Developer',
        period: 'Mar 2024 - Dec 2024',
        engagement: 'part-time',
      },
    ],
    summary:
      'Remote, part-time backend work on a payments API: webhooks, idempotency and reconciliation jobs.',
    highlights: [
      'Idempotent webhook delivery with retries and a dead-letter queue (TypeScript, PostgreSQL).',
      'Nightly reconciliation job that flags mismatched ledger entries.',
    ],
    logo: asset('lumen.svg'),
  },
  {
    id: 'orbit',
    kind: 'work',
    group: 'experience',
    label: 'Orbit Learning',
    title: 'Orbit Learning',
    organization: 'Orbit Learning (fictional)',
    roles: [
      {
        title: 'ML Engineer Intern',
        period: 'Jun 2023 - Aug 2023',
        engagement: 'internship',
      },
    ],
    summary:
      'Internship on an LLM tutor that gives hints instead of answers, plus the evals that keep it honest.',
    highlights: [
      'Prompt pipeline with structured outputs (Python, Pydantic).',
      'LLM-as-judge eval set of 500 graded student questions.',
    ],
    logo: asset('orbit.svg'),
    keywords: ['Education'],
  },

  // ------------------------------------------------------------------ activity
  {
    id: 'citylab',
    kind: 'work',
    group: 'activity',
    label: 'City Data Lab',
    title: 'City Data Lab',
    organization: 'Example University',
    roles: [
      {
        title: 'Research Assistant',
        period: 'Sep 2022 - May 2023',
        engagement: 'internship',
      },
    ],
    summary:
      'Cleaned and modeled bus GPS traces to estimate delays across a city network.',
    logo: asset('citylab.svg'),
    keywords: [{ label: 'University', evidence: 'Research assistant job' }],
  },
  {
    id: 'ta',
    kind: 'work',
    group: 'activity',
    label: 'Algorithms TA',
    title: 'Teaching Assistant, Algorithms',
    organization: 'Example University',
    roles: [
      {
        title: 'Teaching Assistant',
        period: 'Jan 2023 - May 2023',
        engagement: 'volunteer',
      },
    ],
    summary: 'Ran weekly labs and graded problem sets for 120 students.',
    logo: asset('uni.svg'),
    keywords: [
      { label: 'University', evidence: 'TA for the algorithms course' },
      'Education',
    ],
  },

  // ------------------------------------------------------------------ projects
  {
    id: 'tidepool',
    kind: 'work',
    group: 'project',
    engagement: 'side-project',
    label: 'Tidepool',
    title: 'Tidepool',
    summary:
      'Self-hosted RSS reader with full-text search and a tiny Go backend. On hold for now.',
    logo: asset('tidepool.svg'),
    images: [asset('tidepool-banner.svg')],
    links: [{ label: 'Example source', url: 'https://example.com/' }],
    status: 'paused',
  },
  {
    id: 'pixelpantry',
    kind: 'work',
    group: 'project',
    engagement: 'side-project',
    label: 'Pixel Pantry',
    title: 'Pixel Pantry',
    summary:
      'Recipe planner that turns a week of meals into one grocery list. Class project, React + TypeScript.',
    logo: asset('pixelpantry.svg'),
    images: [asset('pixelpantry-banner.svg')],
    keywords: [{ label: 'University', evidence: 'Web programming class project' }],
  },

  // -------------------------------------------------------------------- topics
  {
    id: 'search',
    kind: 'topic',
    group: 'domain',
    label: 'Search & Ranking',
    description: 'Retrieval, ranking and their evals.',
  },
  {
    id: 'ai',
    kind: 'topic',
    group: 'domain',
    label: 'AI / LLM',
    description: 'LLM pipelines, structured outputs and evals.',
  },
  {
    id: 'backend',
    kind: 'topic',
    group: 'domain',
    label: 'Backend',
    description: 'APIs, queues and the jobs behind them.',
  },
  {
    id: 'data',
    kind: 'topic',
    group: 'domain',
    label: 'Data',
    description: 'Cleaning, modeling and analysing data.',
  },
  {
    id: 'web',
    kind: 'topic',
    group: 'domain',
    label: 'Web',
    description: 'Front ends.',
  },
  { id: 'python', kind: 'topic', group: 'language', label: 'Python' },
  { id: 'ts', kind: 'topic', group: 'language', label: 'TypeScript' },
  { id: 'go', kind: 'topic', group: 'language', label: 'Go' },

  // ----------------------------------------------------------------- job types
  { id: 'job-full-time', kind: 'topic', group: 'job', label: 'Full-time' },
  { id: 'job-internship', kind: 'topic', group: 'job', label: 'Internship' },
  { id: 'job-part-time', kind: 'topic', group: 'job', label: 'Part-time' },
  { id: 'job-volunteer', kind: 'topic', group: 'job', label: 'Volunteer' },
  { id: 'job-side-project', kind: 'topic', group: 'job', label: 'Side project' },
]

const stated = (
  source: string,
  target: string,
  evidence: string
): GraphEdge => ({ source, target, evidence, basis: 'stated' })
const inferred = (
  source: string,
  target: string,
  evidence: string
): GraphEdge => ({ source, target, evidence, basis: 'inferred' })

/**
 * One edge from each work to the job-type node of every engagement it had,
 * with the matching roles as evidence. Engagements without a node are skipped.
 */
function jobTypeEdges(): GraphEdge[] {
  const ids = new Set(nodes.map((n) => n.id))
  const result: GraphEdge[] = []
  for (const n of nodes) {
    if (n.kind !== 'work') continue
    const evidence = new Map<Engagement, string[]>()
    for (const r of n.roles ?? []) {
      if (!r.engagement) continue
      const list = evidence.get(r.engagement) ?? []
      list.push(r.period ? `${r.title} (${r.period})` : r.title)
      evidence.set(r.engagement, list)
    }
    if (n.engagement && !evidence.has(n.engagement))
      evidence.set(n.engagement, [n.title])
    for (const [engagement, roles] of evidence) {
      const target = `job-${engagement}`
      if (ids.has(target)) result.push(stated(n.id, target, roles.join('; ')))
    }
  }
  return result
}

const edges: GraphEdge[] = [
  stated('northwind', 'search', 'Hybrid BM25 + embedding search service'),
  stated('northwind', 'go', 'Search service written in Go'),
  stated('northwind', 'ai', 'Embeddings and offline ranking evals'),
  stated('northwind', 'backend', 'Services around search and recommendations'),

  stated('lumen', 'backend', 'Payments API, webhooks, reconciliation'),
  stated('lumen', 'ts', 'Webhook delivery in TypeScript'),
  stated('lumen', 'data', 'Ledger reconciliation job'),

  stated('orbit', 'ai', 'LLM tutor and LLM-as-judge evals'),
  stated('orbit', 'python', 'Prompt pipeline in Python with Pydantic'),

  stated('citylab', 'data', 'Bus GPS traces cleaned and modeled'),
  inferred('citylab', 'python', 'Data modeling done in Python'),

  stated('ta', 'python', 'Labs taught in Python'),

  stated('tidepool', 'go', 'Tiny Go backend'),
  stated('tidepool', 'search', 'Full-text search over feeds'),
  stated('tidepool', 'backend', 'Self-hosted server'),

  stated('pixelpantry', 'web', 'React front end'),
  stated('pixelpantry', 'ts', 'React + TypeScript'),

  ...jobTypeEdges(),
]

export const demoGraph: KnowledgeGraph = withKeywords(
  { groups, nodes, edges },
  'keyword'
)
