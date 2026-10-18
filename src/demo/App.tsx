import type { ReactNode } from 'react'
import { PrismGraph } from '../prism'
import { demoGraph } from './data'

const REPO = 'https://github.com/Taihenc/ProjectPrism'

const INSTALL = `git clone ${REPO}.git
cd ProjectPrism
npm install
npm run dev`

const DATA = `import { withKeywords } from './prism'
import type { KnowledgeGraph } from './prism'

export const myGraph: KnowledgeGraph = withKeywords({
  groups: [
    { id: 'experience', label: 'Experience', color: '#f4b860' },
    { id: 'language', label: 'Languages', color: '#8fa3bf' },
    { id: 'keyword', label: 'Keywords', color: '#e6d37a' },
  ],
  nodes: [
    {
      id: 'acme',
      kind: 'work',            // opens a detail card
      group: 'experience',
      label: 'Acme',
      title: 'Acme Corp',
      roles: [{ title: 'Engineer', period: '2024 - now', engagement: 'full-time' }],
      summary: 'What you did, in one or two sentences.',
      highlights: ['One result per line.'],
      logo: '/logos/acme.png',
      images: ['/photos/acme-1.jpg'],
      keywords: ['Remote'],    // becomes a small shared node
    },
    { id: 'go', kind: 'topic', group: 'language', label: 'Go' },
  ],
  edges: [
    // every edge says why the two nodes are related
    { source: 'acme', target: 'go', evidence: 'Services in Go', basis: 'stated' },
  ],
}, 'keyword')`

const RENDER = `import { PrismGraph } from './prism'
import { myGraph } from './my-graph'

export default function Projects() {
  return (
    <div style={{ height: '80vh' }}>
      <PrismGraph graph={myGraph} />
    </div>
  )
}`

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-white/10 bg-[#0b0f17] p-4 text-[13px] leading-relaxed text-slate-300">
      <code>{children}</code>
    </pre>
  )
}

function Step({
  n,
  title,
  children,
}: {
  n: number
  title: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-3 text-lg font-semibold text-slate-100">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-400/15 text-sm text-violet-300">
          {n}
        </span>
        {title}
      </h3>
      {children}
    </section>
  )
}

const CONCEPTS: [string, string][] = [
  [
    'work',
    'Something you did: a job, project or activity. Shown with its logo; click it for a detail card with roles, highlights, images and links.',
  ],
  [
    'topic',
    'A skill, language or domain. Works that share a topic are linked through it.',
  ],
  [
    'edge',
    'A relation with the sentence that justifies it. "stated" edges are drawn solid, "inferred" ones dashed.',
  ],
  [
    'keywords',
    'Tags on a work. Each keyword becomes a small node, so you can group works without writing a node by hand.',
  ],
  [
    'groups',
    'Colour and legend for nodes. Any number, any names.',
  ],
]

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <span className="flex items-center gap-2 font-semibold tracking-tight">
          <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
            <polygon
              points="16,3 29,27 3,27"
              fill="none"
              stroke="#a99cf5"
              strokeWidth="3"
            />
          </svg>
          ProjectPrism
        </span>
        <a
          href={REPO}
          className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-slate-300 hover:bg-white/5"
        >
          GitHub
        </a>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-24 sm:px-6">
        <section className="space-y-6">
          <div className="max-w-2xl space-y-3 pt-6">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your work, as a knowledge graph.
            </h1>
            <p className="text-slate-400">
              ProjectPrism turns a resume into an interactive graph: jobs,
              projects and skills as nodes, with a reason on every connection.
              Related works settle next to each other, so a visitor sees what
              you do at a glance. The graph below is demo data for a made-up
              developer.
            </p>
          </div>
          <div className="h-[75vh] min-h-[480px]">
            <PrismGraph graph={demoGraph} />
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">How to use it</h2>
            <p className="max-w-2xl text-slate-400">
              ProjectPrism is not on npm yet. For now, copy{' '}
              <code className="text-violet-300">src/prism</code> into your
              React + Tailwind project, or fork this repo and replace the demo
              data.
            </p>
          </div>

          <Step n={1} title="Run the demo">
            <Code>{INSTALL}</Code>
            <p className="text-sm text-slate-400">
              Needs React 18 and Tailwind CSS. Other dependencies:{' '}
              <code className="text-slate-300">
                react-force-graph-2d d3-force framer-motion @heroicons/react
              </code>
              .
            </p>
          </Step>

          <Step n={2} title="Describe your graph">
            <Code>{DATA}</Code>
            <p className="text-sm text-slate-400">
              The full demo dataset is in{' '}
              <a
                className="text-violet-300 hover:underline"
                href={`${REPO}/blob/main/src/demo/data.ts`}
              >
                src/demo/data.ts
              </a>
              .
            </p>
          </Step>

          <Step n={3} title="Render it">
            <Code>{RENDER}</Code>
            <p className="text-sm text-slate-400">
              The graph fills its parent, so give the parent a height.
            </p>
          </Step>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Concepts</h2>
          <dl className="divide-y divide-white/5 rounded-xl border border-white/10">
            {CONCEPTS.map(([term, text]) => (
              <div
                key={term}
                className="grid gap-1 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
              >
                <dt className="font-mono text-sm text-violet-300">{term}</dt>
                <dd className="text-sm text-slate-400">{text}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        ProjectPrism · MIT License ·{' '}
        <a className="hover:text-slate-300" href={REPO}>
          {REPO.replace('https://', '')}
        </a>
      </footer>
    </div>
  )
}
