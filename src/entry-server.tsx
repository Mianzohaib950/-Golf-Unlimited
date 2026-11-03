import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { prerenderToNodeStream } from 'react-dom/static'
import App from './App'
import type { Page } from './seo'

/** Renders a route to static HTML with the lazy page content inline (no Suspense fallback). */
export async function render(page: Page): Promise<string> {
  const app = (
    <StrictMode>
      <App initialPage={page} />
    </StrictMode>
  )
  // First pass resolves the route's React.lazy chunk; the second pass then renders it synchronously,
  // so the HTML has no fallback-then-swap step that would shift the layout.
  await prerenderToNodeStream(app)
  return renderToString(app)
}

export * from './seo'
