export const SITE_URL = 'https://golfnetsunlimited.com'
export const SITE_NAME = 'Golf Nets Unlimited'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/optimized/home-residential-1600.jpg`

export type Page =
  | 'home'
  | 'homeowners'
  | 'driving-range'
  | 'hoa'
  | 'other-nets'
  | 'gallery'
  | 'about'
  | 'faq'
  | 'contact'
  | 'not-found'

export const pagePaths: Record<Page, string> = {
  home: '/',
  homeowners: '/homeowners',
  'driving-range': '/driving-range',
  hoa: '/hoa',
  'other-nets': '/other-nets',
  gallery: '/gallery',
  about: '/about',
  faq: '/faq',
  contact: '/contact',
  'not-found': '/404',
}

export interface PageMeta {
  title: string
  description: string
  keywords: string
  /** Label used in breadcrumbs and structured data. */
  name: string
  /** Above-the-fold image preloaded in the prerendered HTML. */
  heroImage?: { href: string; srcset?: string; sizes?: string }
  ogImage?: string
}

export const pageMeta: Record<Page, PageMeta> = {
  home: {
    name: 'Home',
    title: 'Golf Nets Unlimited | Golf Ball Deterrent Netting Systems',
    description: 'Custom golf ball deterrent netting for homeowners, HOAs, driving ranges, and golf courses. Phoenix, AZ netting contractor. Call (480) 515-1300.',
    keywords: 'golf nets, golf netting, golf ball deterrent netting, golf protection netting, residential golf nets, HOA golf netting, driving range netting, golf course netting, Nets Unlimited',
    heroImage: {
      href: '/images/optimized/home-residential-900.jpg',
      srcset: '/images/optimized/home-residential-900.jpg 900w, /images/optimized/home-residential-1600.jpg 1600w',
      sizes: '100vw',
    },
  },
  homeowners: {
    name: 'Homeowners',
    title: 'Residential Golf Ball Netting | Golf Nets Unlimited',
    description: 'Custom residential golf netting systems that protect homes, patios, windows, and families from errant golf balls. Low-visibility nets on galvanized steel poles.',
    keywords: 'residential golf nets, home golf netting, golf ball protection, patio netting, window protection netting, golf course home protection',
    heroImage: {
      href: '/images/optimized/residential-system-760.jpg',
      srcset: '/images/optimized/residential-system-760.jpg 760w, /images/optimized/residential-system-1200.jpg 1200w',
      sizes: '100vw',
    },
    ogImage: `${SITE_URL}/images/optimized/residential-system-1200.jpg`,
  },
  'driving-range': {
    name: 'Driving Range & Practice',
    title: 'Driving Range & Golf Course Netting | Golf Nets Unlimited',
    description: 'Professional driving range, tee box, cart path, and golf course protection netting designed, fabricated, and installed by Nets Unlimited, Inc.',
    keywords: 'driving range netting, golf course netting, tee box netting, cart path netting, practice netting, golf range safety nets',
    heroImage: {
      href: '/images/optimized/driving-range-banner-760.jpg',
      srcset: '/images/optimized/driving-range-banner-760.jpg 760w, /images/optimized/driving-range-banner-1200.jpg 1200w',
      sizes: '100vw',
    },
    ogImage: `${SITE_URL}/images/optimized/driving-range-banner-1200.jpg`,
  },
  hoa: {
    name: 'HOA',
    title: 'HOA Golf Protection Netting | Golf Nets Unlimited',
    description: 'Golf ball deterrent netting for HOAs, golf-course communities, and property managers, with drawings, samples, and guideline support for uniform installs.',
    keywords: 'HOA golf netting, community golf protection, property manager golf nets, golf course community netting, homeowner association netting',
    heroImage: {
      href: '/images/optimized/community-netting-760.jpg',
      srcset: '/images/optimized/community-netting-760.jpg 760w, /images/optimized/community-netting-1200.jpg 1200w',
      sizes: '100vw',
    },
    ogImage: `${SITE_URL}/images/optimized/community-netting-1200.jpg`,
  },
  'other-nets': {
    name: 'Other Nets',
    title: 'Sport, Pet, Shade & Decorative Netting | Golf Nets Unlimited',
    description: 'Custom batting cages, sport court containment, aviaries, pet protection, shade structures, handrails, bridges, tunnels, and decorative netting.',
    keywords: 'sport containment netting, pet protection netting, shade netting, decorative netting, handrail netting, bridge netting, custom nets',
    heroImage: {
      href: '/images/optimized/service-01-hero-760.jpg',
      srcset: '/images/optimized/service-01-hero-760.jpg 760w, /images/optimized/service-01-1200.jpg 1200w',
      sizes: '100vw',
    },
    ogImage: `${SITE_URL}/images/optimized/service-01-1200.jpg`,
  },
  gallery: {
    name: 'Gallery',
    heroImage: { href: '/images/optimized/gallery-01-570.jpg' },
    title: 'Golf Netting Project Gallery | Golf Nets Unlimited',
    description: 'Photos of completed Golf Nets Unlimited projects: residential, HOA, golf course, driving range, zoo, handrail, and play-element netting installations.',
    keywords: 'golf netting gallery, golf nets projects, residential netting photos, driving range netting photos, golf protection netting examples',
  },
  about: {
    name: 'About Us',
    heroImage: { href: '/images/optimized/home-residential-900.jpg' },
    title: 'About Golf Nets Unlimited | Nets Unlimited, Inc.',
    description: 'Golf Nets Unlimited is a division of Nets Unlimited, Inc. (AZ ROC #236070), a licensed, bonded, and insured rope and netting contractor in Phoenix, AZ.',
    keywords: 'about Golf Nets Unlimited, Nets Unlimited Inc, licensed netting contractor, golf netting company, custom netting contractor',
  },
  faq: {
    name: 'FAQs',
    title: 'Golf Netting FAQs: Cost & Warranty | Golf Nets Unlimited',
    description: 'Answers about golf ball deterrent netting: cost, warranty, HOA approval, materials, maintenance, installation time, and buying netting only.',
    keywords: 'golf netting FAQ, golf ball deterrent questions, golf net installation, golf net materials, residential golf net questions',
  },
  contact: {
    name: 'Contact Us',
    title: 'Contact Golf Nets Unlimited | Get a Free Quote',
    description: 'Contact Golf Nets Unlimited for a no-cost golf netting estimate. 20625 N. 29th Place, Phoenix, AZ 85050. Call (480) 515-1300, Mon–Fri 7 am–4 pm.',
    keywords: 'contact Golf Nets Unlimited, golf netting quote, golf net installation estimate, Phoenix golf netting, Nets Unlimited contact',
  },
  'not-found': {
    name: 'Page not found',
    title: 'Page Not Found | Golf Nets Unlimited',
    description: 'The page you are looking for does not exist. Browse golf ball deterrent netting for homeowners, HOAs, and driving ranges.',
    keywords: '',
  },
}

export const indexablePages = (Object.keys(pagePaths) as Page[]).filter(page => page !== 'not-found')

export function pageFromPath(pathname: string, base = '/'): Page {
  let path = pathname
  const trimmedBase = base.replace(/\/$/, '')
  if (trimmedBase && path.startsWith(trimmedBase)) path = path.slice(trimmedBase.length)
  path = path.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/'
  const match = indexablePages.find(page => pagePaths[page] === path)
  return match ?? 'not-found'
}

export const canonicalUrl = (page: Page) => `${SITE_URL}${pagePaths[page]}`

export const faqs: [string, string][] = [
  ['Where does Nets Unlimited work?', 'Nets Unlimited will ship nets anywhere in the world. We predominantly provide installations of golf nets in Arizona for homeowners. We will travel anywhere that someone wants our installation services. If, however, you prefer to stay local we will also work with your contractor to provide the net materials and offer tips on how to build your golf ball deterrent system the right way.'],
  ['What about my HOA?', "For homeowners living in HOA restricted communities, Nets Unlimited has extensive experience in working with HOA's. We provide most anything an HOA requires from documentation and drawings to samples. We have also worked with HOA's that do not have set requirements yet, to create guidelines for their communities."],
  ['Is there a Warranty?', 'Nets Unlimited offers a 1-year warranty for defects in material and workmanship on all new structures installed. The netting carries a 10-year pro-rated warranty against UV degradation as well.'],
  ['Does Nets Unlimited work with existing structures?', 'Nets Unlimited will replace netting on an existing structure, so long as that structure is still sound. We can also make minor repairs on the netting or repaint/repair the existing structures in order to maintain soundness. Should a structure need to be replaced we can remove the old one and replace it with a new one as well.'],
  ['What is the cost of the system?', 'Unfortunately, since each home and course provide different dynamics, the cost of a golf net can vary widely, from a few hundred dollars to several thousand. Nets Unlimited will provide a no-cost estimate over the phone, or we are happy to come to your residence as well to give you a custom quote.'],
  ['I have an estimate, what are the next steps?', 'We require a 50% deposit with the placement of the order, with the balance due upon completion.\n\nOnce a deposit is received, we will provide a site plan for your approval and continue to work with you throughout the course of your HOA approval process, if applicable. We will schedule the installation of your golf ball deterrent system based on availability after everything is approved. In most cases, installation takes between 2-5 days to complete.'],
  ['What are the maintenance requirements for golf net deterrent systems?', 'Routine maintenance or repair should not be necessary for the netting structure as long as plants are kept well-trimmed, and away from the net. However, if something does occur we are available to make repairs at reasonable rates.'],
  ["I don't want to build a new structure... Can I buy just the netting?", 'Absolutely! We are happy to provide netting as a material only purchase. Just give us a call or send a request through our contact page and we can provide pricing and information about the time it takes for fabrication. Everything we do is custom so let us know what you are interested in and we are happy to help.'],
  ['What do you make the golf net deterrent systems out of?', 'All of our poles are schedule 40 galvanized steel for strength, durability, and longevity. The size of the post depends on the height of your structure. Heights of structures vary with terrain, proximity to the Tee, the home, and HOA allowances. Black is the most common color for the steel structures but poles can be custom colored with either powder coating in an array of colors or painted to match the HOA requirements or home color.\n\nOur golf nets are high-performance sports netting made of either polyester or nylon for superior UV ratings and typically have a polypropylene rope border. Black, Beige, White, and Green are the most common color choices—others are available upon request.'],
  ['Do you have other types of netting products?', "We specialize in a wide variety of rope and netting products. Whether you want to add a tropical theme to your backyard, add safety netting for your pets, or have another project in mind, we would love to help. Either give us a call to speak to one of our specialized representatives or go to our parent company's main website for information and inspiration!"],
]

const business = {
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon-512.png`,
  image: DEFAULT_OG_IMAGE,
  description: 'Golf Nets Unlimited designs, fabricates, and installs golf ball deterrent netting systems for homeowners, HOAs, driving ranges, golf courses, and property managers.',
  telephone: '+1-480-515-1300',
  email: 'info@netsunlimited.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '20625 North 29th Place',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    postalCode: '85050',
    addressCountry: 'US',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '16:00',
  }],
  areaServed: [{ '@type': 'State', name: 'Arizona' }, { '@type': 'Country', name: 'United States' }],
  parentOrganization: { '@type': 'Organization', name: 'Nets Unlimited, Inc.', url: 'https://netsunlimited.com/' },
  sameAs: [
    'https://www.facebook.com/NetsUnlimited/',
    'https://www.houzz.com/professionals/specialty-contractors/nets-unlimited-inc-pfvwus-pf~1547408577',
    'https://instagram.com/netsunlimitedinc/',
    'https://www.pinterest.com/netsunlimitedinc/',
    'https://x.com/nets_unlimited',
    'https://www.yelp.com/biz/nets-unlimited-phoenix-3',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Golf Netting Services',
    itemListElement: [
      ['Residential golf ball deterrent netting', 'homeowners'],
      ['HOA golf protection netting', 'hoa'],
      ['Driving range and golf course netting', 'driving-range'],
      ['Sport, pet, shade, and decorative netting', 'other-nets'],
    ].map(([name, page]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, url: canonicalUrl(page as Page) },
    })),
  },
}

/** JSON-LD graph for a page, emitted into the prerendered HTML. */
export function structuredData(page: Page) {
  const meta = pageMeta[page]
  const url = canonicalUrl(page)
  const graph: Record<string, unknown>[] = [
    business,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-US',
    },
    {
      '@type': page === 'faq' ? ['WebPage', 'FAQPage'] : page === 'contact' ? 'ContactPage' : page === 'about' ? 'AboutPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-US',
      ...(page === 'faq' && {
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer.replace(/\n\n/g, ' ') },
        })),
      }),
    },
  ]
  if (page !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: meta.name, item: url },
      ],
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}
