import {
  installationFaqs,
  nettingOnlyFaqs,
  replacementFaqs,
  windowPatioFaqs,
  type FaqList,
} from './faqs'

// The four standalone service pages under /services/. Each one targets a buyer
// search that none of the audience pages (Homeowners, HOA, Driving Range)
// answers on its own, so they do not compete with those pages for rankings.

export const serviceSlugs = [
  'golf-netting-installation',
  'golf-net-replacement-repair',
  'golf-netting-only',
  'window-patio-golf-ball-protection',
] as const

export type ServiceSlug = (typeof serviceSlugs)[number]

export interface ServiceMeta {
  slug: ServiceSlug
  /** Short label for cards, breadcrumbs and menus. */
  name: string
  title: string
  description: string
  keywords: string
  /** One-line summary for the services hub card. */
  summary: string
  serviceType: string
  image: { src: string; alt: string; width: number; height: number }
  faqs: FaqList
}

export const services: Record<ServiceSlug, ServiceMeta> = {
  'golf-netting-installation': {
    slug: 'golf-netting-installation',
    name: 'Golf Netting Installation',
    title: 'Golf Netting Installation in Arizona | Golf Nets Unlimited',
    description: 'Golf ball netting installed from site visit to final net: custom plan, HOA support, schedule 40 steel poles and 2 to 5 day installs. Free estimates.',
    keywords: 'golf netting installation, golf net installers, golf ball netting contractor, golf netting installation Phoenix, golf net installation Arizona',
    summary: 'Site visit, custom plan, HOA support and a 2 to 5 day install by our own crew.',
    serviceType: 'Golf netting installation',
    image: { src: '/images/optimized/gallery-07-760.jpg', alt: 'Black golf ball netting installed on steel poles beside a two-story home', width: 760, height: 428 },
    faqs: installationFaqs,
  },
  'golf-net-replacement-repair': {
    slug: 'golf-net-replacement-repair',
    name: 'Golf Net Replacement & Repair',
    title: 'Golf Net Replacement & Repair | Golf Nets Unlimited',
    description: 'Replace worn golf netting on your existing poles, repair holes, or repaint and fix the steel structure. Custom nets made to fit. Call (480) 515-1300.',
    keywords: 'golf net replacement, golf netting repair, replace golf net, golf net repair near me, golf netting replacement Arizona',
    summary: 'New nets for sound structures, net repairs, and pole repainting or replacement.',
    serviceType: 'Golf net replacement and repair',
    image: { src: '/images/optimized/gallery-01-760.jpg', alt: 'Green golf netting on steel poles running along a fairway', width: 760, height: 570 },
    faqs: replacementFaqs,
  },
  'golf-netting-only': {
    slug: 'golf-netting-only',
    name: 'Custom Golf Netting (Netting Only)',
    title: 'Buy Custom Golf Netting Only | Golf Nets Unlimited',
    description: 'Buy custom golf netting without installation. Polyester or nylon net with a rope border, made to size and shipped anywhere for you or your contractor.',
    keywords: 'buy golf netting, custom golf netting, golf barrier netting for sale, golf netting material, golf net by the foot',
    summary: 'Made-to-size polyester or nylon netting, shipped anywhere for your own install.',
    serviceType: 'Custom golf netting fabrication and supply',
    image: { src: '/images/optimized/gallery-03-760.jpg', alt: 'Close view of high golf barrier netting on tall white poles', width: 760, height: 570 },
    faqs: nettingOnlyFaqs,
  },
  'window-patio-golf-ball-protection': {
    slug: 'window-patio-golf-ball-protection',
    name: 'Window & Patio Golf Ball Protection',
    title: 'Window & Patio Golf Ball Protection | Golf Nets Unlimited',
    description: 'When a full net is not allowed or not needed, net infill panels protect windows, patios and seating areas from golf balls. Custom fit, low visibility.',
    keywords: 'golf ball window protection, golf ball protection for windows, patio golf netting, golf ball screens, golf ball patio protection',
    summary: 'Net infill panels for the windows, patios and seating areas that take the hits.',
    serviceType: 'Window and patio golf ball protection netting',
    image: { src: '/images/optimized/patio-infill-760.jpg', alt: 'Net infill panels on patio archways protecting windows and a seating area', width: 760, height: 505 },
    faqs: windowPatioFaqs,
  },
}

export const serviceList: ServiceMeta[] = serviceSlugs.map(slug => services[slug])
