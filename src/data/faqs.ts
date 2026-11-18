// FAQ lists for the service, audience and blog pages. Plain strings only, so
// src/seo.ts can emit them as FAQPage JSON-LD without pulling page code into
// the main bundle. Every answer is built from facts already published on
// golfnetsunlimited.com or Nets Unlimited's own listings: no new claims.

export type FaqList = [question: string, answer: string][]

export const homeownersFaqs: FaqList = [
  ['How much does a residential golf net cost?', 'It depends on your lot, so prices vary widely, from a few hundred dollars for netting or small panels to several thousand for a full structure. Most residential projects that include netting and the supporting steel structure fall between $5,000 and $8,000. We give a free estimate by phone or at your home.'],
  ['Will a golf net block my view of the course?', 'No. We build low-visibility structures that you look through, much like a window screen. Net colors (black, beige, white or green) and pole colors are chosen to blend with your home and the course.'],
  ['Do I need a full net structure?', 'Not always. If only a few windows, a patio or a seating area take hits, or your HOA will not allow a full structure, net infill panels can protect just those areas.'],
  ['How long does installation take?', 'Once your site plan and any HOA approval are in place, most installations take 2 to 5 days.'],
]

export const hoaFaqs: FaqList = [
  ['What can you provide for an HOA review?', 'We provide most anything an HOA requires, from documentation and drawings to samples of the netting and pole colors.'],
  ['Our HOA has no golf netting guidelines. Can you help?', 'Yes. We have helped communities without set requirements create guidelines, so homeowners know what to submit and the board can approve or decline a structure quickly, often without a board meeting.'],
  ['Can poles and nets match our community colors?', 'Yes. Poles can be powder coated or painted to match HOA requirements or home colors. Common net colors are black, beige, white and green, with others available on request.'],
]

export const drivingRangeFaqs: FaqList = [
  ['What netting do you use for driving ranges?', 'Driving range nets are 100% knotless polyester, which we consider the best UV and weather resistant netting available.'],
  ['Can you match the height and pole type to our range?', 'Yes. Each range net is built to fit your course, with the height and the pole type, wood or steel, chosen for your site.'],
  ['Do you install the whole system?', 'Yes. Unlike many net providers, we come on site and install everything from the posts to the nets.'],
  ['What else can you protect on a course?', 'Tee boxes, cart paths and walkways between holes, practice bays, and open spaces near clubhouses. Cart path netting is often black polyester 7/8 inch netting on a black steel structure.'],
]

export const servicesHubFaqs: FaqList = [
  ['Where does Golf Nets Unlimited work?', 'We install mainly in Arizona from our Phoenix shop, travel for installations anywhere, and ship netting worldwide. We can also supply netting to your own contractor.'],
  ['Are you licensed?', 'Yes. Golf Nets Unlimited is a division of Nets Unlimited, Inc., a licensed, bonded and insured contractor (AZ ROC #236070).'],
  ['How do I get a price?', 'Call (480) 515-1300 or send the contact form. We discuss budget by phone first, then a site specialist can visit to measure and give you a custom estimate at no cost.'],
]

export const installationFaqs: FaqList = [
  ['How long does golf netting installation take?', 'In most cases installation takes 2 to 5 days once the site plan and any HOA approval are complete.'],
  ['What happens before installation?', 'We require a 50% deposit with the order. We then prepare a site plan for your approval, help with your HOA approval if needed, and schedule the install. The balance is due on completion.'],
  ['Do you install outside Arizona?', 'Yes. Most of our installs are in Arizona, but we will travel anywhere for installation. If you prefer a local builder, we can supply the netting and share tips on building the system the right way.'],
  ['Is the installation warrantied?', 'New structures carry a 1-year warranty for defects in material and workmanship. The netting also carries a 10-year pro-rated warranty against UV degradation.'],
]

export const replacementFaqs: FaqList = [
  ['Can you replace just the net on my existing poles?', 'Yes, as long as the existing structure is still sound. We make the new net to fit your structure.'],
  ['What if my poles are rusted or damaged?', 'We can repaint or repair the existing structure to keep it sound. If a structure needs to be replaced, we can remove the old one and install a new one.'],
  ['Do you repair holes in golf netting?', 'Yes. We make minor repairs to netting at reasonable rates.'],
  ['How do I keep my net from needing repairs?', 'Keep plants well trimmed and away from the net. With that done, routine maintenance or repair should not normally be needed.'],
]

export const nettingOnlyFaqs: FaqList = [
  ['Can I buy golf netting without installation?', 'Yes. We sell netting as a material-only purchase. Tell us what you need and we will send pricing and the fabrication time.'],
  ['What is the netting made of?', 'High-performance sports netting in polyester or nylon for strong UV ratings, usually with a polypropylene rope border.'],
  ['Do you ship outside Arizona?', 'Yes. We ship nets anywhere in the world.'],
  ['Can my own contractor build the structure?', 'Yes. We work with your contractor, supply the net materials and offer tips on building your golf ball deterrent system the right way.'],
]

export const windowPatioFaqs: FaqList = [
  ['Do I need a full golf net to protect my windows?', 'Not always. If balls hit only a couple of windows or one patio area, net infill panels can protect those spots without a full structure.'],
  ['My HOA will not allow a full structure. What are my options?', 'Many homeowners call us for exactly this reason. We review options such as infill panels on existing patio features and help you choose the one that fits your HOA rules.'],
  ['Can panels attach to my patio?', 'Yes. For one home we attached net infill panels to decorative archways to protect the windows and the seating area under a covered patio.'],
  ['Will the panels block light or the view?', 'The netting is designed to be looked through, much like a window screen, so the view and light stay open.'],
]
