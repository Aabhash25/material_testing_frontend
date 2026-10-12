import { writeFileSync } from 'node:fs'
import { SERVICES } from '../src/data/siteData.js'

const SITE = 'https://ssnmaterialtesting.com'
const paths = [
  '/',
  '/services',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  '/about',
  '/contact',
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `<url>\n<loc>${SITE}${p}</loc>\n</url>`).join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`sitemap.xml written with ${paths.length} URLs`)