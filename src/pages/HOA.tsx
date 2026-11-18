import CTASection from '../components/CTASection'
import { FaqBlock, FeatureGrid, LinkCards, Section } from '../components/ContentBlocks'
import { hoaFaqs } from '../data/faqs'
import { blogPage, servicePage } from '../seo'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const eyebrow: React.CSSProperties = {
  fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: '#1E4D2B',
}

const heading: React.CSSProperties = {
  fontFamily: 'Playfair Display, Georgia, serif',
  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
  fontWeight: 200,
  color: '#1A1A18',
  letterSpacing: '-0.02em',
  lineHeight: 1.12,
}

const body: React.CSSProperties = {
  fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(26,26,24,0.68)',
}

export default function HOA({ navigate }: Props) {
  return (
    <div style={{ backgroundColor: '#F8F7F4' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '72vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end' }}>
        <img src="/images/optimized/community-netting-1200.jpg" srcSet="/images/optimized/community-netting-760.jpg 760w, /images/optimized/community-netting-1200.jpg 1200w" sizes="100vw" alt="Golf protection netting integrated into a residential community" fetchPriority="high" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,11,0.75) 0%, rgba(10,16,11,0.2) 55%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{ ...eyebrow, color: 'rgba(255,255,255,0.55)', marginBottom: '16px' }}>HOA</p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 200, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: '700px' }}>
            HOA Golf Ball Netting &amp; Guidelines
          </h1>
        </div>
      </section>

      {/* Why Nets Unlimited? */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 40px' }}>
        <div className="hoa-row" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <h2 style={{ ...heading }}>Why do HOAs work with Nets Unlimited?</h2>
          <div>
            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(1.15rem, 2.4vw, 1.55rem)', fontWeight: 300, lineHeight: 1.55, color: '#1A1A18', letterSpacing: '-0.01em', marginBottom: '28px' }}>
              We understand the importance of coordinating with the homeowner, the property management team, and the golf course. Our goal at Nets Unlimited is to provide protective netting without intruding on the experience of golf course living whether that is from the homeowner's point of view, the HOA requirements, or the needs of the golf course operator.
            </p>
            <p style={body}>
              It is a unique challenge to balance the community master plan identity with liability issues and ensuring that homeowners and guests enjoy the beauty of their surroundings. Nets Unlimited meets those challenges head-on, and we can help you navigate through them by providing you with various golf ball deterrent options to ensure your homeowners feel safe and secure while maintaining both a consistent aesthetic and the beautiful view that everyone values.
            </p>
          </div>
        </div>
      </section>

      {/* Create Beautiful Uniformity */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="hoa-split">
        <div style={{ position: 'relative', minHeight: '520px' }}>
          <img src="/images/optimized/residential-net-570.jpg" alt="Residential golf netting within a golf-course community" loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ backgroundColor: '#ECEAE3', padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ ...heading, marginBottom: '28px' }}>Create beautiful uniformity with HOA golf netting guidelines</h2>
          <p style={body}>
            One of the most difficult aspects HOA's face in dealing with homeowners that want golf protection netting is maintaining both a beautiful and consistent aesthetic for the course and neighborhood while allowing them to protect their homes. Nets Unlimited, Inc. can work with you to update your current HOA guidelines, or if you do not have guidelines published yet, we can help you create a comprehensive set that ensures a beautiful uniformity with all of the deterrent nets that your members install. This standard will allow the homeowner to avoid the frustration of not knowing what to present to the board for approval, as well as allow the HOA board to quickly approve or decline golf structures with or without the need for a board meeting.
          </p>
        </div>
      </section>

      <Section eyebrow="For boards and property managers" heading="What we provide for HOA reviews">
        <FeatureGrid items={[
          { title: 'Documentation and drawings', body: 'Site plans and drawings that show where each net goes, how tall it is and how it is built.' },
          { title: 'Samples', body: 'Netting and pole finish samples, so the board can see exactly what will be installed.' },
          { title: 'Community guidelines', body: 'Help updating existing guidelines, or writing a complete standard if your community has none yet.' },
          { title: 'Color matching', body: 'Poles powder coated or painted to match HOA requirements, with black, beige, white or green netting.' },
          { title: 'Options besides a full net', body: 'Net infill panels for windows and patios where a full structure does not fit the rules.' },
          { title: 'Homeowner support', body: 'We work with each homeowner through the approval process, from site plan to installation.' },
        ]} />
      </Section>

      <FaqBlock heading="HOA golf netting FAQs" items={hoaFaqs} />

      <Section eyebrow="Keep reading" heading="Guides and services for golf communities" tone="white">
        <LinkCards navigate={navigate} items={[
          { page: blogPage('hoa-approval-golf-netting'), title: 'How to get HOA approval for golf netting', body: 'What to read, what to submit and how to make approval quick.' },
          { page: servicePage('window-patio-golf-ball-protection'), title: 'Window & patio golf ball protection', body: 'Net panels that protect specific windows or patios without a full structure.' },
          { page: servicePage('golf-netting-installation'), title: 'Golf netting installation', body: 'How a net is planned, approved and installed, usually in 2 to 5 days.' },
        ]} />
      </Section>

      <CTASection
        navigate={navigate}
        centered
        subtext="Work with us today to find out just how easy it is for us to help you develop your HOA standards & guidelines to provide your homeowners with clear direction for their golf ball deterrent needs."
        primaryLabel="Contact Us"
        primaryPage="contact"
      />

      <style>{`
        @media (max-width: 900px) {
          .hoa-row { grid-template-columns: 1fr !important; gap: 28px !important; }
          .hoa-split { grid-template-columns: 1fr !important; }
          .hoa-split > div[style*="minHeight"] { min-height: 320px !important; }
          .hoa-split > div:last-child { padding: 56px 28px !important; }
        }
      `}</style>
    </div>
  )
}
