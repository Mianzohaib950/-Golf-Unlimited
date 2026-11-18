import type { ReactNode } from 'react'
import type { Page } from '../App'
import { breadcrumbTrail } from '../seo'
import type { FaqList } from '../data/faqs'
import PageLink from './PageLink'

// Shared building blocks for the service pages, the blog and the FAQ sections
// added to the audience pages. Styling lives in src/index.css (gn-* classes) and
// follows the existing site: Playfair headings, Inter body, forest green accents.

type Nav = (p: Page) => void

export function SplitHero(p: {
  navigate: Nav
  eyebrow: string
  title: string
  subtitle: ReactNode
  image: { src: string; alt: string; width: number; height: number }
  ctaLabel?: string
}) {
  return (
    <section className="gn-hero">
      <div className="gn-hero-copy">
        <p className="gn-eyebrow gn-eyebrow-light">{p.eyebrow}</p>
        <h1 className="gn-hero-title">{p.title}</h1>
        <p className="gn-hero-sub">{p.subtitle}</p>
        <div className="gn-actions">
          <PageLink page="contact" navigate={p.navigate} className="gn-btn gn-btn-light">{p.ctaLabel ?? 'Get a free estimate'}</PageLink>
          <a href="tel:+14805151300" className="gn-btn gn-btn-ghost">Call (480) 515-1300</a>
        </div>
      </div>
      <div className="gn-hero-media">
        <img src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} fetchPriority="high" decoding="async" />
      </div>
    </section>
  )
}

export function Breadcrumbs({ page, navigate }: { page: Page; navigate: Nav }) {
  const trail = breadcrumbTrail(page)
  return (
    <nav aria-label="Breadcrumb" className="gn-crumbs">
      <ol>
        {trail.map((crumb, i) => (
          <li key={crumb.page}>
            {i < trail.length - 1
              ? <PageLink page={crumb.page} navigate={navigate}>{crumb.name}</PageLink>
              : <span aria-current="page">{crumb.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function Section({ eyebrow, heading, children, tone = 'plain', narrow = false, id }: {
  eyebrow?: string
  heading?: string
  children: ReactNode
  tone?: 'plain' | 'white' | 'stone'
  narrow?: boolean
  id?: string
}) {
  return (
    <section id={id} className={`gn-section gn-tone-${tone}`}>
      <div className={narrow ? 'gn-wrap gn-wrap-narrow' : 'gn-wrap'}>
        {eyebrow && <p className="gn-eyebrow">{eyebrow}</p>}
        {heading && <h2 className="gn-h2">{heading}</h2>}
        {children}
      </div>
    </section>
  )
}

/** Question-led two-column row: heading left, answer right (the site's existing pattern). */
export function QaRow({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="gn-qa">
      <h2 className="gn-h2 gn-qa-heading">{heading}</h2>
      <div className="gn-prose">{children}</div>
    </div>
  )
}

export function FeatureGrid({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <div className="gn-features">
      {items.map(item => (
        <div key={item.title} className="gn-feature">
          <span className="gn-rule" aria-hidden="true" />
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export function Steps({ steps }: { steps: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="gn-steps">
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className="gn-step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  )
}

export function FaqBlock({ heading = 'Frequently asked questions', items, tone = 'stone' }: { heading?: string; items: FaqList; tone?: 'plain' | 'white' | 'stone' }) {
  return (
    <Section heading={heading} tone={tone} narrow>
      <div className="gn-faqs">
        {items.map(([q, a]) => (
          <div key={q} className="gn-faq">
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export interface LinkCard { page: Page; title: string; body: string; image?: string; imageAlt?: string }

export function LinkCards({ items, navigate }: { items: LinkCard[]; navigate: Nav }) {
  return (
    <div className="gn-cards">
      {items.map(item => (
        <PageLink key={item.page} page={item.page} navigate={navigate} className="gn-card">
          {item.image && (
            <span className="gn-card-media">
              <img src={item.image} alt={item.imageAlt ?? ''} loading="lazy" decoding="async" width={570} height={428} />
            </span>
          )}
          <span className="gn-card-body">
            <span className="gn-card-title">{item.title}</span>
            <span className="gn-card-text">{item.body}</span>
            <span className="gn-card-more">Read more <span aria-hidden="true">→</span></span>
          </span>
        </PageLink>
      ))}
    </div>
  )
}

/** Inline text link to another page, used inside body copy. */
export function TextLink({ page, navigate, children }: { page: Page; navigate: Nav; children: ReactNode }) {
  return <PageLink page={page} navigate={navigate} className="gn-link">{children}</PageLink>
}
