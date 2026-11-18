import type { Page } from '../App'
import CTASection from '../components/CTASection'
import { Breadcrumbs, FaqBlock, FeatureGrid, LinkCards, QaRow, Section, SplitHero, Steps, TextLink } from '../components/ContentBlocks'
import { servicesHubFaqs } from '../data/faqs'
import { serviceList, services, type ServiceSlug } from '../data/services'
import { blogPage, servicePage } from '../seo'

interface Props { navigate: (p: Page) => void }
interface DetailProps extends Props { slug: ServiceSlug }

const audienceCards = [
  { page: 'homeowners' as Page, title: 'Homeowners', body: 'Low-visibility golf ball netting for homes, yards and patios on or near the fairway.', image: '/images/optimized/residential-net-570.jpg', imageAlt: 'Residential golf ball netting around a desert home' },
  { page: 'hoa' as Page, title: 'HOAs & Communities', body: 'Drawings, samples and netting guidelines that keep a golf community uniform.', image: '/images/optimized/gallery-05-570.jpg', imageAlt: 'Beige-pole golf netting in a golf community backyard' },
  { page: 'driving-range' as Page, title: 'Driving Ranges & Courses', body: 'Range, tee box, cart path and practice bay netting built for your course.', image: '/images/optimized/driving-range-570.jpg', imageAlt: 'Driving range protection netting' },
  { page: 'other-nets' as Page, title: 'Sport, Pet & Decorative Nets', body: 'Batting cages, sport courts, aviaries, pet protection, shade and decor.', image: '/images/optimized/service-06-570.jpg', imageAlt: 'Sport court containment netting' },
]

/** /services hub */
export default function Services({ navigate }: Props) {
  return (
    <>
      <SplitHero
        navigate={navigate}
        eyebrow="Golf Nets Unlimited"
        title="Golf Netting Services"
        subtitle="From a single patio panel to a full course barrier, we design, fabricate, install and repair golf ball netting. We are a licensed, bonded and insured Phoenix contractor (AZ ROC #236070), installing across Arizona and shipping netting anywhere."
        image={{ src: '/images/optimized/residential-system-760.jpg', alt: 'Custom residential golf ball netting system on steel poles', width: 760, height: 570 }}
      />
      <Breadcrumbs page="services" navigate={navigate} />

      <Section eyebrow="What we do" heading="Our golf netting services">
        <LinkCards
          navigate={navigate}
          items={serviceList.map(s => ({ page: servicePage(s.slug), title: s.name, body: s.summary, image: s.image.src.replace('-760', '-570'), imageAlt: s.image.alt }))}
        />
      </Section>

      <Section eyebrow="Who we work with" heading="Netting for every kind of property" tone="white">
        <LinkCards navigate={navigate} items={audienceCards} />
      </Section>

      <Section eyebrow="Why us" heading="Why choose Golf Nets Unlimited">
        <FeatureGrid items={[
          { title: 'One team, start to finish', body: 'The same company plans, fabricates and installs your net, so nothing gets lost between a supplier and an installer.' },
          { title: 'Commercial-grade materials', body: 'Schedule 40 galvanized steel poles and high-performance polyester or nylon netting with a rope border.' },
          { title: 'Built to be looked through', body: 'Low-visibility structures you see through much like a window screen, in colors that suit your home and course.' },
          { title: 'HOA support', body: 'Documentation, drawings and samples for your HOA, and help writing guidelines where a community has none.' },
          { title: 'Warranty', body: '1 year on material and workmanship for new structures, plus a 10-year pro-rated UV warranty on netting.' },
          { title: 'Free estimates', body: 'Budget guidance by phone, then a no-cost on-site visit and a custom quote for your property.' },
        ]} />
      </Section>

      <FaqBlock items={servicesHubFaqs} />

      <CTASection navigate={navigate} centered subtext="Tell us about your property and we will recommend the right netting service." primaryLabel="Get a free estimate" primaryPage="contact" secondaryLabel="See our Gallery" secondaryPage="gallery" />
    </>
  )
}

/** /services/:slug detail pages */
export function ServiceDetail({ navigate, slug }: DetailProps) {
  const service = services[slug]
  const page = servicePage(slug)
  const Body = bodies[slug]
  const related = serviceList.filter(s => s.slug !== slug)

  return (
    <>
      <SplitHero navigate={navigate} eyebrow="Services" title={heroTitles[slug]} subtitle={intros[slug]} image={service.image} />
      <Breadcrumbs page={page} navigate={navigate} />
      <Body navigate={navigate} />
      <FaqBlock items={service.faqs} />
      <Section eyebrow="Related" heading="Other golf netting services" tone="white">
        <LinkCards navigate={navigate} items={related.map(s => ({ page: servicePage(s.slug), title: s.name, body: s.summary }))} />
      </Section>
      <CTASection navigate={navigate} centered subtext={ctaText[slug]} primaryLabel="Get a free estimate" primaryPage="contact" secondaryLabel="All services" secondaryPage="services" />
    </>
  )
}

const heroTitles: Record<ServiceSlug, string> = {
  'golf-netting-installation': 'Golf Netting Installation',
  'golf-net-replacement-repair': 'Golf Net Replacement & Repair',
  'golf-netting-only': 'Buy Custom Golf Netting',
  'window-patio-golf-ball-protection': 'Window & Patio Golf Ball Protection',
}

// Answer-first intros: what it is, who it is for, and the key fact, in 1 to 3 sentences.
const intros: Record<ServiceSlug, string> = {
  'golf-netting-installation': 'We plan, fabricate and install custom golf ball netting for homes, HOA communities, golf courses and driving ranges. Our own crew does the work, and most installations take 2 to 5 days once plans are approved.',
  'golf-net-replacement-repair': 'If your golf net is torn, faded or sagging but the poles are sound, you usually need a new net, not a new structure. We make replacement nets to fit existing structures, repair netting, and repaint, repair or replace steel poles.',
  'golf-netting-only': 'Already have poles, or a builder you trust? We sell custom golf netting as a material-only purchase: polyester or nylon sports netting with a rope border, made to your sizes and shipped anywhere in the world.',
  'window-patio-golf-ball-protection': 'Not every golf ball problem needs a full net. If only a few windows, a patio or a seating area take the hits, or your HOA will not allow a full structure, custom net infill panels can protect just those spots.',
}

const ctaText: Record<ServiceSlug, string> = {
  'golf-netting-installation': 'Call us to talk budget, then book a free site visit and custom estimate.',
  'golf-net-replacement-repair': 'Tell us about your existing net and we will tell you whether it needs a repair, a new net or a new structure.',
  'golf-netting-only': 'Send us your sizes and we will reply with pricing and the fabrication time.',
  'window-patio-golf-ball-protection': 'Show us where the balls land and we will design panels that protect just those spots.',
}

function InstallationBody({ navigate }: Props) {
  return (
    <>
      <Section>
        <QaRow heading="What does golf netting installation include?">
          <p className="gn-lead">Everything from the first site visit to the last tensioned net, handled by one licensed contractor.</p>
          <ul>
            <li><strong>Site visit and custom plan.</strong> A site specialist looks at where balls are landing, the damage you have seen and what you want to protect.</li>
            <li><strong>Site plan for approval.</strong> We draw the system for you to approve, and support your <TextLink page="hoa" navigate={navigate}>HOA approval</TextLink> if your community requires one.</li>
            <li><strong>Custom fabrication.</strong> Every net is made to fit your structure. Nothing is off the shelf.</li>
            <li><strong>Steel structure.</strong> Schedule 40 galvanized steel poles, with the pole size matched to the height of the structure.</li>
            <li><strong>Installation.</strong> Our crew sets the poles and hangs the net, usually in 2 to 5 days.</li>
          </ul>
        </QaRow>
        <QaRow heading="How tall will my golf net be?">
          <p>There is no single standard height. The right height depends on the terrain, how close your home is to the tee, the layout of the home itself and what your HOA allows. We size the poles to the height your site needs, and the post diameter goes up with the height of the structure.</p>
          <p>During the site visit we look at where balls are coming from and recommend a height and length that covers the areas that take hits, without building more than you need.</p>
        </QaRow>
      </Section>

      <Section eyebrow="Process" heading="How installation works" tone="white">
        <Steps steps={[
          { title: 'Phone consultation', body: 'We talk through your property and give general budget information over the phone.' },
          { title: 'On-site visit', body: 'A site specialist reviews your property with you and asks what you want to achieve.' },
          { title: 'Plan, estimate and approvals', body: 'You get a custom plan and estimate. A 50% deposit confirms the order, then we provide a site plan and help with HOA approval.' },
          { title: 'Installation', body: 'We schedule your install once everything is approved. Most take 2 to 5 days. The balance is due on completion.' },
        ]} />
      </Section>

      <Section eyebrow="Materials" heading="What we install">
        <FeatureGrid items={[
          { title: 'Galvanized steel poles', body: 'Schedule 40 galvanized steel for strength and long life. Black is most common; poles can be powder coated or painted to match your home or HOA colors.' },
          { title: 'High-performance netting', body: 'Polyester or nylon sports netting with strong UV ratings and a polypropylene rope border, in black, beige, white or green.' },
          { title: 'Warranty', body: 'New structures carry a 1-year warranty on material and workmanship. Netting carries a 10-year pro-rated warranty against UV degradation.' },
        ]} />
      </Section>

      <Section eyebrow="Who it is for" heading="Installations for homes, communities and courses" tone="white">
        <LinkCards navigate={navigate} items={audienceCards.slice(0, 3)} />
        <p className="gn-prose" style={{ marginTop: '28px' }}>
          Wondering about price first? Read <TextLink page={blogPage('golf-ball-netting-cost')} navigate={navigate}>how much golf ball netting costs for a home</TextLink>.
        </p>
      </Section>
    </>
  )
}

function ReplacementBody({ navigate }: Props) {
  return (
    <>
      <Section>
        <QaRow heading="Repair, new net or new structure?">
          <p className="gn-lead">Most worn golf nets do not need a whole new system. What you need depends on the condition of the net and the poles.</p>
          <div className="gn-table-wrap">
            <table className="gn-table">
              <thead><tr><th>What you see</th><th>What it usually needs</th></tr></thead>
              <tbody>
                <tr><td>A small hole, cut or loose section of net</td><td>A net repair</td></tr>
                <tr><td>Net faded, brittle or torn in many places, poles still solid</td><td>A replacement net on your existing structure</td></tr>
                <tr><td>Peeling paint or surface rust on sound poles</td><td>Repainting or repair of the structure</td></tr>
                <tr><td>Poles leaning, badly corroded or no longer sound</td><td>Remove the old structure and install a new one</td></tr>
              </tbody>
            </table>
          </div>
          <p>Not sure which applies? Our guide on <TextLink page={blogPage('golf-net-repair-or-replacement')} navigate={navigate}>how to decide between golf net repair and replacement</TextLink> has a simple checklist.</p>
        </QaRow>
        <QaRow heading="Can you put a new net on my existing poles?">
          <p>Yes, as long as the existing structure is still sound. Because everything we make is custom, the replacement net is built to fit your poles and the run of your structure, in the material and color you choose.</p>
          <p>If the structure needs work first, we can repaint or repair it to keep it sound. If it is past saving, we remove it and <TextLink page={servicePage('golf-netting-installation')} navigate={navigate}>install a new golf net system</TextLink>.</p>
        </QaRow>
      </Section>

      <Section eyebrow="What we fix" heading="Replacement and repair services" tone="white">
        <FeatureGrid items={[
          { title: 'Replacement nets', body: 'Custom polyester or nylon netting with a polypropylene rope border, made to fit your existing structure.' },
          { title: 'Net repairs', body: 'Minor repairs to holes, cuts and loose sections of netting, at reasonable rates.' },
          { title: 'Structure repair', body: 'Repainting or repairing steel poles, or removing a failed structure and building a new one.' },
        ]} />
      </Section>

      <Section narrow>
        <QaRow heading="How do I make a golf net last?">
          <p>Keep plants well trimmed and away from the net. That is the main thing: with plants kept clear, routine maintenance or repair should not normally be needed. Our replacement netting also carries a 10-year pro-rated warranty against UV degradation.</p>
          <p>Only want the material? You can also <TextLink page={servicePage('golf-netting-only')} navigate={navigate}>buy the replacement netting on its own</TextLink> and have it fitted locally.</p>
        </QaRow>
      </Section>
    </>
  )
}

function NettingOnlyBody({ navigate }: Props) {
  return (
    <>
      <Section>
        <QaRow heading="What golf netting do you sell?">
          <p className="gn-lead">The same netting we install on our own projects, made to your sizes.</p>
          <ul>
            <li><strong>Golf ball deterrent netting:</strong> high-performance sports netting in polyester or nylon, chosen for strong UV ratings, usually with a polypropylene rope border.</li>
            <li><strong>Driving range netting:</strong> 100% knotless polyester, which we consider the best UV and weather resistant netting available.</li>
            <li><strong>Colors:</strong> black, beige, white and green are most common. Other colors are available on request.</li>
          </ul>
        </QaRow>
        <QaRow heading="Who buys netting only?">
          <ul>
            <li>Homeowners with a sound structure who need a <TextLink page={servicePage('golf-net-replacement-repair')} navigate={navigate}>replacement net</TextLink>.</li>
            <li>Homeowners outside Arizona who want to use a local builder. We work with your contractor and share tips on building a golf ball deterrent system the right way.</li>
            <li>Golf courses and <TextLink page="driving-range" navigate={navigate}>driving ranges</TextLink> replacing nets on existing poles.</li>
            <li>Contractors and landscapers who need a custom net for a client project.</li>
          </ul>
        </QaRow>
      </Section>

      <Section eyebrow="Ordering" heading="How to order custom golf netting" tone="white">
        <Steps steps={[
          { title: 'Tell us what you need', body: 'Call (480) 515-1300 or use the contact form with your sizes, the use and any color preference.' },
          { title: 'Pricing and lead time', body: 'We reply with pricing and the time it will take to fabricate your net.' },
          { title: 'Fabrication', body: 'Your net is made to order. Everything we make is custom.' },
          { title: 'Shipping', body: 'We ship nets anywhere in the world, ready for you or your contractor to hang.' },
        ]} />
      </Section>

      <Section narrow>
        <QaRow heading="Would you rather we install it?">
          <p>If you are in Arizona, or would like us to travel to you, we can handle the whole job. See <TextLink page={servicePage('golf-netting-installation')} navigate={navigate}>golf netting installation</TextLink> for how that works.</p>
        </QaRow>
      </Section>
    </>
  )
}

function WindowPatioBody({ navigate }: Props) {
  return (
    <>
      <Section>
        <QaRow heading="When are panels the right choice?">
          <p className="gn-lead">Many homeowners call us looking for a creative alternative to a full net structure.</p>
          <ul>
            <li>Only one or two windows keep getting hit.</li>
            <li>The problem is a specific yard, patio or seating area.</li>
            <li>Your HOA will not allow a full structure. See <TextLink page={blogPage('hoa-approval-golf-netting')} navigate={navigate}>how to get HOA approval for golf netting</TextLink>.</li>
            <li>You want protection that stays inside the footprint of your patio.</li>
          </ul>
        </QaRow>
        <QaRow heading="What do patio and window panels look like?">
          <p>For one home, we attached net infill panels to decorative archways to protect the windows and the seating area under a covered patio. The panels follow the architecture rather than adding new poles to the yard.</p>
          <p>Like our full systems, the netting is made to be looked through, much like a window screen, so you keep the view and the light.</p>
        </QaRow>
        <QaRow heading="Panels or a full golf net?">
          <p>Panels protect the spots they cover. If balls are landing across the whole yard, or hitting the roof and upper windows, a <TextLink page="homeowners" navigate={navigate}>full residential golf net</TextLink> is the better answer. We review both options with you during the site visit so you can choose what fits your home, your HOA and your budget.</p>
        </QaRow>
      </Section>

      <Section eyebrow="Keep reading" heading="Guides for homeowners" tone="white">
        <LinkCards navigate={navigate} items={[
          { page: blogPage('golf-ball-damage-to-house-who-pays'), title: 'Golf ball damage: who pays?', body: 'What insurers and lawyers say about golfer, course and homeowner liability.' },
          { page: blogPage('golf-ball-netting-cost'), title: 'How much does golf ball netting cost?', body: 'What drives the price, from small panels to a full system.' },
          { page: servicePage('golf-netting-installation'), title: 'Golf netting installation', body: 'How a full system is planned, approved and installed.' },
        ]} />
      </Section>
    </>
  )
}

const bodies: Record<ServiceSlug, (p: Props) => React.ReactElement> = {
  'golf-netting-installation': InstallationBody,
  'golf-net-replacement-repair': ReplacementBody,
  'golf-netting-only': NettingOnlyBody,
  'window-patio-golf-ball-protection': WindowPatioBody,
}
