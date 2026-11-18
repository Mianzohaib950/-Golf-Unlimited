import type { FaqList } from './faqs'

// Blog post metadata (titles, dates, images, FAQs, sources). Kept free of JSX
// so src/seo.ts can build titles, sitemap entries and JSON-LD from it. The
// article bodies live in src/data/blogContent.tsx and load only on blog pages.
//
// Publishing rule (Novatore SEO Playbook, rules 7 and 9): a named Golf Nets
// Unlimited expert fact-checks and approves each post before it is deployed.

export const blogSlugs = [
  'golf-ball-netting-cost',
  'golf-ball-damage-to-house-who-pays',
  'hoa-approval-golf-netting',
  'golf-net-repair-or-replacement',
] as const

export type BlogSlug = (typeof blogSlugs)[number]

export interface BlogMeta {
  slug: BlogSlug
  title: string
  metaTitle: string
  description: string
  keywords: string
  category: string
  published: string
  updated?: string
  readMinutes: number
  image: { src: string; alt: string; width: number; height: number }
  excerpt: string
  takeaways: string[]
  faqs: FaqList
  sources: { label: string; url: string }[]
}

export const blogMeta: Record<BlogSlug, BlogMeta> = {
  'golf-ball-netting-cost': {
    slug: 'golf-ball-netting-cost',
    title: 'How Much Does Golf Ball Netting Cost for a Home?',
    metaTitle: 'Golf Ball Netting Cost for Homes | Golf Nets Unlimited',
    description: 'What golf ball netting costs for a home on a golf course, what drives the price, and how to get an accurate quote. Most full systems run $5,000 to $8,000.',
    keywords: 'golf ball netting cost, golf net cost for home, residential golf netting price, how much is golf netting',
    category: 'Cost & Planning',
    published: '2026-11-18',
    readMinutes: 6,
    image: { src: '/images/optimized/gallery-08-760.jpg', alt: 'Black golf ball netting on steel poles beside a desert-landscaped home', width: 760, height: 570 },
    excerpt: 'A full residential golf net with its steel structure usually costs $5,000 to $8,000. Panels and netting-only orders cost less. Here is what changes the price.',
    takeaways: [
      'Most residential projects with netting and a steel structure run $5,000 to $8,000.',
      'Smaller jobs, such as window or patio panels or netting only, can cost a few hundred dollars.',
      'Height, length, terrain, pole finish and HOA rules drive the price more than anything else.',
      'A free site visit is the only way to get a firm number for your lot.',
    ],
    faqs: [
      ['Is there a cheaper option than a full golf net?', 'Yes. Net infill panels for a few windows or a patio, or buying the netting only and having your own contractor build the structure, both cost less than a full system.'],
      ['Do you charge for an estimate?', 'No. Golf Nets Unlimited gives no-cost estimates by phone or at your home.'],
      ['How is payment handled?', 'A 50% deposit is due when you place the order and the balance is due when the installation is complete.'],
    ],
    sources: [
      { label: 'Nets Unlimited Inc. on Houzz: Residential golf netting, Mesa, AZ (project cost note)', url: 'https://www.houzz.com/hznb/projects/residential-golf-netting-mesa-az-pj-vj~6403288' },
    ],
  },
  'golf-ball-damage-to-house-who-pays': {
    slug: 'golf-ball-damage-to-house-who-pays',
    title: 'Golf Ball Damage to Your House: Who Pays, and How to Stop It',
    metaTitle: 'Golf Ball Damage to Homes: Who Pays? | Golf Nets Unlimited',
    description: 'Who pays when a golf ball breaks your window? What insurers and lawyers say about golfer, course and homeowner liability, and how to stop the damage.',
    keywords: 'golf ball damage to house who pays, golf ball broke window who is liable, golf course home damage, golf ball damage insurance',
    category: 'Homeowners',
    published: '2026-11-18',
    readMinutes: 7,
    image: { src: '/images/optimized/gallery-09-760.jpg', alt: 'Home behind golf ball netting along a fairway and bunkers', width: 760, height: 570 },
    excerpt: 'There is no single answer. It can be the golfer, the course or your own policy, and living on a course can count against you. Prevention is the reliable fix.',
    takeaways: [
      'There is no single rule: the golfer, the course or your own homeowners policy may end up paying.',
      'Golfers are generally expected to use ordinary care, but assumption of risk is a common defense when you chose a home on a course.',
      'Check your HOA covenants and any course easement: they can limit who is responsible.',
      'Repeated hits rarely get paid every time. A net or panels stop the damage at the source.',
    ],
    faqs: [
      ['Does homeowners insurance cover golf ball damage?', 'Often, yes, but check your own policy and deductible. Insurance professionals note that liability coverage on the golfer\'s homeowners policy may also respond if the golfer is legally liable.'],
      ['Is the golf course responsible for balls hitting my house?', 'Sometimes. A Florida attorney notes a course may be liable if its design is shown to be flawed and unsafe, but the course can argue the homeowner was on notice and assumed the risk.'],
      ['Is this legal advice?', 'No. Liability depends on your state, your HOA documents and the facts. Speak to your insurer or a local attorney about a specific claim.'],
    ],
    sources: [
      { label: 'IA Magazine (Big "I"): Personal liability for hitting a golf ball through someone\'s window, Sept 23, 2022', url: 'https://www.iamagazine.com/?p=6702' },
      { label: 'Florida Condo & HOA Law Blog: Golf balls and windows in Florida HOAs, David G. Muller, May 22, 2017', url: 'https://www.floridacondohoalawblog.com/2017/05/22/golf-balls-and-windows-in-florida-hoas/' },
      { label: 'WOWT / InvestigateTV: Rogue golf balls cause thousands in damage to homes near courses, Jan 5, 2026', url: 'https://www.wowt.com/2026/01/05/rogue-golf-balls-cause-thousands-damage-homes-near-courses/' },
    ],
  },
  'hoa-approval-golf-netting': {
    slug: 'hoa-approval-golf-netting',
    title: 'How to Get HOA Approval for Golf Netting',
    metaTitle: 'HOA Approval for Golf Netting: A Guide | Golf Nets Unlimited',
    description: 'A step-by-step guide to getting your HOA to approve golf netting: what to read first, what to submit, how to match colors, and what to do if there are no rules.',
    keywords: 'HOA approval golf netting, HOA golf net rules, golf netting architectural review, golf net HOA guidelines',
    category: 'HOA',
    published: '2026-11-18',
    readMinutes: 6,
    image: { src: '/images/optimized/gallery-05-760.jpg', alt: 'View through beige-pole golf netting from a backyard putting green to the course', width: 760, height: 570 },
    excerpt: 'Read your CC&Rs, submit drawings, materials and color samples to the architectural committee, and wait for written approval. Here is how to make it quick.',
    takeaways: [
      'Read the CC&Rs and architectural guidelines before you plan anything.',
      'Submit drawings, material specs and color samples to the architectural committee or board.',
      'Never build first: an HOA can require removal of unapproved structures.',
      'No guidelines yet? A community standard makes later approvals fast for everyone.',
    ],
    faqs: [
      ['How long does HOA approval take?', 'It varies with the project and the association. Simple changes can move quickly, while structures can take longer, so ask your HOA for its review timeline before you schedule work.'],
      ['Can Golf Nets Unlimited deal with my HOA for me?', 'We provide the documentation, drawings and samples your HOA asks for, and stay with you through the approval process. You submit the request as the homeowner.'],
      ['What if my HOA says no to a full net?', 'Ask what it would allow. Net infill panels for windows or a patio, or a shorter or color-matched structure, are often acceptable alternatives.'],
    ],
    sources: [
      { label: 'FirstService Residential: Architectural modifications, what are my HOA backyard rules?, Feb 12, 2024', url: 'https://www.fsresidential.com/Corporate/News-and-Articles/articles/What-are-my-HOA-backyard-rules' },
    ],
  },
  'golf-net-repair-or-replacement': {
    slug: 'golf-net-repair-or-replacement',
    title: 'Golf Net Repair or Replacement: How to Decide',
    metaTitle: 'Golf Net Repair vs Replacement | Golf Nets Unlimited',
    description: 'How to tell whether your golf net needs a repair, a new net on the old poles, or a new structure. A simple inspection checklist for homeowners and courses.',
    keywords: 'golf net repair, golf net replacement, replace golf netting, golf netting repair, golf net poles',
    category: 'Repair & Maintenance',
    published: '2026-11-18',
    readMinutes: 5,
    image: { src: '/images/optimized/gallery-04-760.jpg', alt: 'Tall golf netting poles and cables along a course with homes beyond', width: 760, height: 570 },
    excerpt: 'Small holes get repaired, a worn net on sound poles gets replaced, and a failing structure gets rebuilt. Here is how to check which one you need.',
    takeaways: [
      'If the poles are sound, you usually only need a new net, not a new structure.',
      'Small holes and loose borders can be repaired; widespread wear or UV damage means a new net.',
      'Check poles for lean, rust and footing, and check the net border where it attaches.',
      'Trimming plants away from the net prevents most damage.',
    ],
    faqs: [
      ['How often should I check my golf net?', 'Look it over after storms and high winds, and give it a closer check once a year. A Canadian netting supplier recommends a check every spring.'],
      ['Can you put a new net on my existing poles?', 'Yes, as long as the existing structure is still sound. We make the new net to fit your poles.'],
      ['Does the netting have a warranty?', 'Netting from Golf Nets Unlimited carries a 10-year pro-rated warranty against UV degradation, and new structures carry a 1-year warranty on material and workmanship.'],
    ],
    sources: [
      { label: 'Sport Systems: Golf swings are almost in season (netting barrier checks), Feb 12, 2014', url: 'https://blog.sportsystemscanada.com/blog/golf-swings-are-almost-in-season' },
    ],
  },
}

export const blogList: BlogMeta[] = blogSlugs.map(slug => blogMeta[slug])
