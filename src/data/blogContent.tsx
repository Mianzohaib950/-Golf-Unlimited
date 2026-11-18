import type { ReactNode } from 'react'
import type { Page } from '../App'
import { TextLink } from '../components/ContentBlocks'
import { blogPage, servicePage } from '../seo'
import type { BlogSlug } from './blogMeta'

// Article bodies for the four launch guides. Each one follows the Novatore SEO
// Playbook post standard: answer-first intro, question-led H2s, a link to its
// money page in the first half, first-hand facts from Golf Nets Unlimited's
// own published material, and every outside fact linked to its source.
// No invented numbers, quotes, customers or credentials.

export interface BlogSection { id: string; heading: string; body: ReactNode }
export interface BlogBody { intro: ReactNode; sections: BlogSection[] }

type Nav = (p: Page) => void

const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener" className="gn-link">{children}</a>
)

const HOUZZ = 'https://www.houzz.com/hznb/projects/residential-golf-netting-mesa-az-pj-vj~6403288'
const WOWT = 'https://www.wowt.com/2026/01/05/rogue-golf-balls-cause-thousands-damage-homes-near-courses/'
const IAMAG = 'https://www.iamagazine.com/?p=6702'
const FLHOA = 'https://www.floridacondohoalawblog.com/2017/05/22/golf-balls-and-windows-in-florida-hoas/'
const FSR = 'https://www.fsresidential.com/Corporate/News-and-Articles/articles/What-are-my-HOA-backyard-rules'
const SPORTSYS = 'https://blog.sportsystemscanada.com/blog/golf-swings-are-almost-in-season'

export function blogBody(slug: BlogSlug, nav: Nav): BlogBody {
  switch (slug) {
    case 'golf-ball-netting-cost': return costPost(nav)
    case 'golf-ball-damage-to-house-who-pays': return liabilityPost(nav)
    case 'hoa-approval-golf-netting': return hoaPost(nav)
    case 'golf-net-repair-or-replacement': return repairPost(nav)
  }
}

function costPost(nav: Nav): BlogBody {
  return {
    intro: <>A full golf ball net for a home, including its steel structure, usually costs <strong>$5,000 to $8,000</strong>. Smaller jobs, such as net panels for a patio or a netting-only order, can cost a few hundred dollars. This guide is for homeowners on or near a golf course who want a realistic budget before asking for quotes.</>,
    sections: [
      {
        id: 'typical-cost',
        heading: 'How much does golf ball netting cost for a home?',
        body: (
          <>
            <p>Every lot is different, so prices vary widely. On its Houzz project listings, Nets Unlimited (the parent company of Golf Nets Unlimited) notes that <Ext href={HOUZZ}>most residential golf projects that include netting and the supporting structure range from $5,000 to $8,000</Ext>. Here is how that breaks down by project type:</p>
            <div className="gn-table-wrap">
              <table className="gn-table">
                <thead><tr><th>Project</th><th>Typical cost</th></tr></thead>
                <tbody>
                  <tr><td>Netting only, or net panels for a few windows or a patio</td><td>From a few hundred dollars</td></tr>
                  <tr><td>Full residential system: netting plus steel poles, installed</td><td>Most fall between $5,000 and $8,000</td></tr>
                  <tr><td>Taller, longer or custom-finished systems</td><td>Quoted for your site after a visit</td></tr>
                </tbody>
              </table>
            </div>
            <p>If you only want a quick sense of what a full system involves, see our <TextLink page="homeowners" navigate={nav}>residential golf ball netting</TextLink> page.</p>
          </>
        ),
      },
      {
        id: 'price-factors',
        heading: 'What makes golf netting cost more or less?',
        body: (
          <ul>
            <li><strong>Height.</strong> Taller nets need bigger posts. On our systems the post size goes up with the height of the structure.</li>
            <li><strong>Length and coverage.</strong> Protecting one side of a patio costs less than wrapping the whole back of a house.</li>
            <li><strong>Your site.</strong> The right height depends on the terrain, how close you are to the tee and the layout of your home.</li>
            <li><strong>HOA requirements.</strong> Your HOA may limit height or require specific colors. Poles can be powder coated or painted to match.</li>
            <li><strong>Full structure or panels.</strong> Net infill panels on existing patio features avoid a new pole structure entirely.</li>
            <li><strong>What you already have.</strong> If your existing poles are sound, you may only need a new net.</li>
          </ul>
        ),
      },
      {
        id: 'lower-cost',
        heading: 'How can you lower the cost of golf ball protection?',
        body: (
          <>
            <p>Three options often cost less than a new full system:</p>
            <ol>
              <li><strong>Protect only what gets hit.</strong> <TextLink page={servicePage('window-patio-golf-ball-protection')} navigate={nav}>Window and patio net panels</TextLink> cover the spots that take hits.</li>
              <li><strong>Reuse a sound structure.</strong> If you already have poles in good condition, a <TextLink page={servicePage('golf-net-replacement-repair')} navigate={nav}>replacement net</TextLink> costs less than starting over.</li>
              <li><strong>Buy the netting only.</strong> We sell <TextLink page={servicePage('golf-netting-only')} navigate={nav}>custom golf netting on its own</TextLink> and work with your local contractor.</li>
            </ol>
          </>
        ),
      },
      {
        id: 'whats-included',
        heading: 'What is included in a Golf Nets Unlimited quote?',
        body: (
          <>
            <p>We start with general budget information by phone at no cost. A site specialist then visits, looks at where balls are landing and the damage you have seen, and asks what you want to protect. From that visit we prepare a custom plan and estimate.</p>
            <p>An installed system includes the site plan for your approval, help with your HOA approval, schedule 40 galvanized steel poles, polyester or nylon netting with a rope border, and installation by our own crew. New structures carry a 1-year warranty on material and workmanship, and the netting carries a 10-year pro-rated warranty against UV degradation.</p>
          </>
        ),
      },
      {
        id: 'payment',
        heading: 'How does payment work?',
        body: <p>We take a 50% deposit when you place the order and the balance when the installation is complete. After the deposit we provide a site plan for your approval, work with you through any HOA approval, and then schedule the install. In most cases installation takes 2 to 5 days. More detail is on our <TextLink page={servicePage('golf-netting-installation')} navigate={nav}>golf netting installation</TextLink> page.</p>,
      },
      {
        id: 'worth-it',
        heading: 'Is golf netting worth the cost?',
        body: (
          <>
            <p>Compare it with what repeated damage costs. In January 2026, InvestigateTV reported on a Georgia homeowner across from a country club who said she had spent <Ext href={WOWT}>more than $70,000 replacing windows over the years</Ext>, and that the club's insurer had paid only for the first broken windows.</p>
            <p>Not every home sees that much damage, but the pattern is common: a few claims get paid, then the hits keep coming. A net stops the problem at the source. If you are weighing who should pay for damage you already have, read <TextLink page={blogPage('golf-ball-damage-to-house-who-pays')} navigate={nav}>golf ball damage to your house: who pays</TextLink>.</p>
          </>
        ),
      },
    ],
  }
}

function liabilityPost(nav: Nav): BlogBody {
  return {
    intro: <>There is no single rule. Depending on your state, your HOA documents and what happened, the golfer, the golf course or your own homeowners insurance may pay, and the fact that you chose a home on a course can count against your claim. Repeated hits are rarely paid every time, so most homeowners on busy holes end up preventing the damage instead. This guide explains the general picture. It is not legal advice.</>,
    sections: [
      {
        id: 'golfer',
        heading: 'Is the golfer responsible for golf ball damage?',
        body: (
          <>
            <p>Often, but not always. A Florida community association attorney writes that <Ext href={FLHOA}>courts have generally held the person hitting the ball has a duty to exercise ordinary care</Ext>. If a golfer was careless, they may be liable.</p>
            <p>Insurance professionals answering this question in <Ext href={IAMAG}>IA Magazine</Ext> said the golfer's own homeowners policy may respond: personal liability coverage applies if the golfer is legally liable, and some policies include coverage for damage to the property of others even when the golfer is not, typically $500 to $1,000.</p>
            <p>In practice, the golfer has to be identified and willing to come forward, which often does not happen.</p>
          </>
        ),
      },
      {
        id: 'course',
        heading: 'Is the golf course responsible?',
        body: <p>Sometimes. The same Florida attorney notes a course may be liable <Ext href={FLHOA}>if it can be proven that the design of the golf course is flawed and unsafe</Ext>. The course can defend itself by arguing that the homeowner was on notice that living on a golf course could bring golf balls onto the property, and that the homeowner assumed the risk.</p>,
      },
      {
        id: 'assumption-of-risk',
        heading: 'What does assumption of risk mean for homeowners?',
        body: (
          <>
            <p>It is the idea that by buying a home beside a fairway, you accepted that some balls will land on it. Insurance faculty in <Ext href={IAMAG}>IA Magazine</Ext> note that assumption of risk sometimes bars claims, and that an HOA's covenants might contain a provision releasing golfers or the course from liability.</p>
            <p>Some courses are also protected by easements. In the Georgia case reported by <Ext href={WOWT}>InvestigateTV</Ext>, a 1989 easement protected the club's golf ball liability within 30 feet of its property.</p>
            <p>Before you file a claim, or before you buy on a course, read the CC&amp;Rs, any easements on the lot and your homeowners policy.</p>
          </>
        ),
      },
      {
        id: 'insurance',
        heading: 'Will your own homeowners insurance pay?',
        body: <p>It may, subject to your deductible and policy terms, so ask your agent. Keep in mind that a deductible applies to every claim, and frequent small claims add up. That is a big reason many homeowners on exposed lots choose <TextLink page="homeowners" navigate={nav}>residential golf ball netting</TextLink> instead of claiming every time.</p>,
      },
      {
        id: 'repeat-damage',
        heading: 'What happens when the golf balls keep coming?',
        body: (
          <>
            <p>The Georgia homeowner in the <Ext href={WOWT}>InvestigateTV report</Ext> said she had spent more than $70,000 on windows over almost 25 years. The club's insurer paid for the first broken windows more than a decade earlier and nothing since, and lawyers she called would only take a case involving injuries. A golf course industry representative suggested courses could move tee boxes or plant trees, but those are the course's decisions, not yours.</p>
            <p>What you control is your own property. A full net protects the yard and the house. If only a few windows or a patio take hits, or your HOA will not allow a full structure, <TextLink page={servicePage('window-patio-golf-ball-protection')} navigate={nav}>window and patio net panels</TextLink> protect just those spots.</p>
          </>
        ),
      },
      {
        id: 'after-a-hit',
        heading: 'What should you do after a golf ball hits your house?',
        body: (
          <ol>
            <li>Check that nobody is hurt and make the area safe, especially around broken glass.</li>
            <li>Photograph the damage and keep the ball.</li>
            <li>Note the date, time and the hole the ball likely came from. If the golfer comes forward, take their contact details.</li>
            <li>Tell the course, and call your insurance agent about whether to claim.</li>
            <li>Read your CC&amp;Rs for any golf-related provisions.</li>
            <li>If it is not the first hit, plan prevention. See <TextLink page={blogPage('golf-ball-netting-cost')} navigate={nav}>what golf ball netting costs</TextLink> and <TextLink page={blogPage('hoa-approval-golf-netting')} navigate={nav}>how to get HOA approval</TextLink>.</li>
          </ol>
        ),
      },
    ],
  }
}

function hoaPost(nav: Nav): BlogBody {
  return {
    intro: <>To get HOA approval for golf netting, read your CC&amp;Rs and architectural guidelines first, then submit a request to the architectural committee or board with drawings, material specifications and color samples, and wait for written approval before any work starts. This guide is for homeowners in golf communities and for HOA boards writing netting rules.</>,
    sections: [
      {
        id: 'do-you-need-approval',
        heading: 'Do you need HOA approval for golf netting?',
        body: (
          <>
            <p>In most HOA communities, yes. A golf net is a visible exterior structure, and exterior changes usually go through architectural review. FirstService Residential, a large community management firm, explains that <Ext href={FSR}>the HOA's architectural committee or board of directors reviews modification requests</Ext>, and that an HOA can enforce penalties or require removal of unauthorized structures.</p>
            <p>So the rule is simple: get approval in writing before anything is built. We have extensive experience working with HOAs on golf netting; see how on our <TextLink page="hoa" navigate={nav}>HOA golf netting</TextLink> page.</p>
          </>
        ),
      },
      {
        id: 'read-first',
        heading: 'What should you read before you apply?',
        body: (
          <>
            <p>Start with your community's governing documents:</p>
            <ul>
              <li><strong>CC&amp;Rs</strong> (covenants, conditions and restrictions): look for rules on structures, fences, screening and golf course lots.</li>
              <li><strong>Architectural guidelines or design standards:</strong> look for height limits, required colors, setbacks and any existing rules for golf netting.</li>
              <li><strong>The application form:</strong> check what drawings and samples it asks for, and any fee.</li>
            </ul>
            <p>If the documents say nothing about golf netting, do not take that as permission. Submit a request anyway.</p>
          </>
        ),
      },
      {
        id: 'application',
        heading: 'What goes in an HOA application for golf netting?',
        body: (
          <>
            <p>FirstService Residential lists <Ext href={FSR}>architectural drawings, material specifications and color samples</Ext> as typical parts of a modification request, along with any required forms or fees. For a golf net that looks like this:</p>
            <div className="gn-table-wrap">
              <table className="gn-table">
                <thead><tr><th>Item</th><th>What it shows</th><th>Who provides it</th></tr></thead>
                <tbody>
                  <tr><td>Site plan or drawing</td><td>Where the net goes, its height and length</td><td>Golf Nets Unlimited</td></tr>
                  <tr><td>Material specifications</td><td>Schedule 40 galvanized steel poles; polyester or nylon netting with a polypropylene rope border</td><td>Golf Nets Unlimited</td></tr>
                  <tr><td>Color samples</td><td>Net color (black, beige, white or green) and pole finish</td><td>Golf Nets Unlimited</td></tr>
                  <tr><td>Application form and fee</td><td>Your request to the committee</td><td>You, the homeowner</td></tr>
                </tbody>
              </table>
            </div>
            <p>We provide most anything an HOA requires, from documentation and drawings to samples, and we stay with you through the approval process.</p>
          </>
        ),
      },
      {
        id: 'easy-to-approve',
        heading: 'How do you make golf netting easy to approve?',
        body: (
          <ul>
            <li><strong>Match the colors.</strong> Poles can be powder coated or painted to match your home or the HOA's required colors.</li>
            <li><strong>Pick a net color that disappears.</strong> Our nets are built to be looked through, much like a window screen.</li>
            <li><strong>Build only what you need.</strong> A net sized to where balls actually land is easier to approve than the biggest possible structure.</li>
            <li><strong>Offer an alternative.</strong> If a full structure is refused, <TextLink page={servicePage('window-patio-golf-ball-protection')} navigate={nav}>window and patio net panels</TextLink> often fit within the rules.</li>
          </ul>
        ),
      },
      {
        id: 'no-guidelines',
        heading: 'What if your HOA has no golf netting guidelines?',
        body: <p>We have worked with HOAs that had no set requirements to create guidelines for their communities. A clear standard helps everyone: homeowners know exactly what to present, and the board can approve or decline a golf structure quickly, often without a board meeting. It also keeps every net in the community looking uniform. HOA boards and property managers can <TextLink page="contact" navigate={nav}>contact us</TextLink> to start one.</p>,
      },
      {
        id: 'timeline',
        heading: 'How long does HOA approval take?',
        body: <p>It depends on your association and the project. FirstService Residential notes that <Ext href={FSR}>approval time varies with the complexity of the project</Ext>, so ask your HOA for its review timeline. On our side, once you place an order we provide the site plan for your HOA submission, and once approval comes through we schedule the install. Most installations take 2 to 5 days; see <TextLink page={servicePage('golf-netting-installation')} navigate={nav}>golf netting installation</TextLink>.</p>,
      },
    ],
  }
}

function repairPost(nav: Nav): BlogBody {
  return {
    intro: <>Small holes and loose sections can be repaired. A net that is faded, brittle or torn in many places needs replacing, and if the poles are still sound the new net can go on the existing structure. Only leaning, badly corroded or unsound poles call for a new structure. This guide shows homeowners and course managers how to tell which one they need.</>,
    sections: [
      {
        id: 'inspect',
        heading: 'How do you inspect a golf net?',
        body: (
          <>
            <p>Walk the full length of the net and check four things. Sport Systems, a Canadian netting company, recommends checking <Ext href={SPORTSYS}>for damage caused by wind, trees and debris, that poles still stand upright with solid footing, and that net borders are still properly attached to the cabling</Ext>.</p>
            <ul>
              <li><strong>The net:</strong> holes, cuts, fraying, faded or brittle sections.</li>
              <li><strong>The border:</strong> the rope edge still secured along its full length.</li>
              <li><strong>The poles:</strong> standing straight, solid at the base, paint intact, no heavy rust.</li>
              <li><strong>The surroundings:</strong> plants, trees or debris touching or pushing on the net.</li>
            </ul>
          </>
        ),
      },
      {
        id: 'decision',
        heading: 'Repair, replace the net, or rebuild?',
        body: (
          <>
            <div className="gn-table-wrap">
              <table className="gn-table">
                <thead><tr><th>What you find</th><th>What to do</th></tr></thead>
                <tbody>
                  <tr><td>One or two small holes, a loose section of border</td><td>Repair the net</td></tr>
                  <tr><td>Net faded, brittle or torn in many places; poles solid</td><td>Replace the net on the existing structure</td></tr>
                  <tr><td>Peeling paint or surface rust on otherwise sound poles</td><td>Repaint or repair the structure</td></tr>
                  <tr><td>Poles leaning, loose at the base or badly corroded</td><td>Remove and replace the structure</td></tr>
                </tbody>
              </table>
            </div>
            <p>We handle all four. See <TextLink page={servicePage('golf-net-replacement-repair')} navigate={nav}>golf net replacement and repair</TextLink> for how it works.</p>
          </>
        ),
      },
      {
        id: 'repair',
        heading: 'When is a repair enough?',
        body: <p>When the damage is local and the rest of the net is in good shape. A branch that fell on one panel, or a cut in one spot, is a repair job. Golf Nets Unlimited makes minor net repairs at reasonable rates. Fix small holes early: a golf ball that finds a gap goes straight through.</p>,
      },
      {
        id: 'replace-net',
        heading: 'When should you replace the net?',
        body: (
          <>
            <p>When the wear is everywhere rather than in one spot. Sun-faded, stiff or brittle netting, or many tears along the run, are signs the material itself is at the end of its life. Patching it only buys a little time.</p>
            <p>If the structure is still sound, you do not need new poles. We make replacement nets to fit existing structures, and our netting carries a 10-year pro-rated warranty against UV degradation. If you have a local installer, you can also <TextLink page={servicePage('golf-netting-only')} navigate={nav}>buy the replacement netting only</TextLink>.</p>
          </>
        ),
      },
      {
        id: 'poles',
        heading: 'When do the poles need work?',
        body: <p>Poles that are leaning, loose at the base or badly corroded are a safety problem, not a cosmetic one, because the net depends on them. Sound poles with tired paint can be repainted or repaired. Poles that are no longer sound should be removed and replaced with a new structure. Our new structures use schedule 40 galvanized steel and carry a 1-year warranty on material and workmanship. See <TextLink page={servicePage('golf-netting-installation')} navigate={nav}>golf netting installation</TextLink>.</p>,
      },
      {
        id: 'prevent',
        heading: 'How do you keep a golf net from needing repairs?',
        body: (
          <ul>
            <li><strong>Trim plants.</strong> Keep shrubs and trees well trimmed and away from the net. With that done, routine maintenance or repair should not normally be needed on our systems.</li>
            <li><strong>Check after storms.</strong> High winds and falling branches cause most sudden damage.</li>
            <li><strong>Do a yearly walk-through.</strong> Sport Systems suggests <Ext href={SPORTSYS}>checking netting barriers when spring comes around</Ext>. In Arizona, a check before the busy winter golf season works just as well.</li>
          </ul>
        ),
      },
    ],
  }
}
