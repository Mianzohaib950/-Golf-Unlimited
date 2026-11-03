import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { getPagePath, type Page } from '../App'

interface PageLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  page: Page
  navigate: (page: Page) => void
}

// Real <a href> so crawlers and AI agents can follow it; plain clicks stay client-side.
export default function PageLink({ page, navigate, onClick, ...rest }: PageLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(page)
  }

  return <a href={getPagePath(page)} onClick={handleClick} {...rest} />
}
