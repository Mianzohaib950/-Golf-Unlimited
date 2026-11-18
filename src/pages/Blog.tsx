import type { Page } from '../App'
import CTASection from '../components/CTASection'
import { Breadcrumbs, FaqBlock, LinkCards, Section } from '../components/ContentBlocks'
import PageLink from '../components/PageLink'
import { blogBody } from '../data/blogContent'
import { blogList, blogMeta, type BlogSlug } from '../data/blogMeta'
import { serviceList } from '../data/services'
import { blogPage, servicePage } from '../seo'

interface Props { navigate: (p: Page) => void }

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

/** /blogs hub */
export default function Blog({ navigate }: Props) {
  return (
    <>
      <header className="gn-post-head">
        <div className="gn-article">
          <p className="gn-eyebrow gn-eyebrow-light">Guides</p>
          <h1 className="gn-post-title">Golf Netting Guides &amp; Blog</h1>
          <p className="gn-hero-sub" style={{ marginBottom: 0 }}>
            Straight answers for homeowners, HOAs and golf courses: what golf ball netting costs, who pays for golf ball damage, how to get HOA approval, and when a net needs repair or replacement.
          </p>
        </div>
      </header>
      <Breadcrumbs page="blog" navigate={navigate} />

      <Section heading="Latest guides">
        <LinkCards
          navigate={navigate}
          items={blogList.map(post => ({
            page: blogPage(post.slug),
            title: post.title,
            body: post.excerpt,
            image: post.image.src.replace('-760', '-570'),
            imageAlt: post.image.alt,
          }))}
        />
      </Section>

      <Section eyebrow="Services" heading="Ready to protect your property?" tone="white">
        <LinkCards navigate={navigate} items={serviceList.map(s => ({ page: servicePage(s.slug), title: s.name, body: s.summary }))} />
      </Section>

      <CTASection navigate={navigate} centered subtext="Have a question these guides do not answer? Call us. Estimates are free." primaryLabel="Contact us" primaryPage="contact" secondaryLabel="Read our FAQs" secondaryPage="faq" />
    </>
  )
}

/** /blogs/:slug */
export function BlogPost({ navigate, slug }: Props & { slug: BlogSlug }) {
  const post = blogMeta[slug]
  const body = blogBody(slug, navigate)
  const others = blogList.filter(other => other.slug !== slug)

  return (
    <>
      <header className="gn-post-head">
        <div className="gn-article">
          <PageLink page="blog" navigate={navigate} className="gn-back">← All guides</PageLink>
          <p className="gn-eyebrow gn-eyebrow-light">{post.category}</p>
          <h1 className="gn-post-title">{post.title}</h1>
          <p className="gn-post-meta">
            By <PageLink page="about" navigate={navigate}>the Golf Nets Unlimited team</PageLink>
            {' · '}Published <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated && <> · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></>}
            {' · '}{post.readMinutes} min read
          </p>
        </div>
      </header>
      <Breadcrumbs page={blogPage(slug)} navigate={navigate} />

      <article>
        <div className="gn-post-image">
          <img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} fetchPriority="high" decoding="async" />
        </div>
        <div className="gn-article">
          <p className="gn-intro">{body.intro}</p>

          <aside aria-labelledby="takeaways" className="gn-takeaways">
            <h2 id="takeaways">Key takeaways</h2>
            <ul>{post.takeaways.map(item => <li key={item}>{item}</li>)}</ul>
          </aside>

          <nav aria-label="In this guide" className="gn-toc">
            <p>In this guide</p>
            <ol>
              {body.sections.map((section, i) => (
                <li key={section.id}><a href={`#${section.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{section.heading}</a></li>
              ))}
            </ol>
          </nav>

          {body.sections.map(section => (
            <section key={section.id} id={section.id} className="gn-post-section">
              <h2>{section.heading}</h2>
              <div className="gn-prose">{section.body}</div>
            </section>
          ))}

          <div className="gn-sources">
            <h2>Sources</h2>
            <ul>
              {post.sources.map(source => (
                <li key={source.url}><a href={source.url} target="_blank" rel="noopener" className="gn-link">{source.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="gn-author">
            <div className="gn-author-mark" aria-hidden="true">GN</div>
            <p>
              <strong>The Golf Nets Unlimited team</strong>
              Golf Nets Unlimited, a division of Nets Unlimited, Inc., designs, fabricates and installs golf ball deterrent netting from Phoenix, Arizona. Licensed, bonded and insured (AZ ROC #236070).{' '}
              <PageLink page="about" navigate={navigate} className="gn-link">About us</PageLink>
            </p>
          </div>
          <p className="gn-disclosure">Written by the Golf Nets Unlimited team with AI drafting assistance, then fact-checked against our own published information and the sources linked above.</p>
        </div>
      </article>

      <FaqBlock items={post.faqs} />

      <CTASection navigate={navigate} centered subtext="Want a price for your property? Estimates are free, by phone or on site." primaryLabel="Get a free estimate" primaryPage="contact" secondaryLabel="Our services" secondaryPage="services" />

      <Section heading="More guides" tone="white">
        <LinkCards
          navigate={navigate}
          items={others.map(other => ({ page: blogPage(other.slug), title: other.title, body: other.excerpt, image: other.image.src.replace('-760', '-570'), imageAlt: other.image.alt }))}
        />
      </Section>
    </>
  )
}
