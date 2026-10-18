/**
 * ProjectPrism public surface. Everything a page needs to render a graph;
 * the demo in `src/demo` only imports from here.
 */
import './prism.css'

export { default as PrismGraph } from './PrismGraph'
export {
  indexGraph,
  keywordId,
  validateGraph,
  withKeywords,
  workAffinities,
} from './graph'
export type { Affinity, GraphIndex, Neighbor } from './graph'
export type * from './types'
