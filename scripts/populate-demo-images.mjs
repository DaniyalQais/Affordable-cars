/**
 * Replaces grey placeholder image files with free stock photos (Pexels).
 * Run: node scripts/populate-demo-images.mjs
 */
import { createWriteStream } from 'fs'
import { mkdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import https from 'https'
import http from 'http'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesRoot = join(__dirname, '..', 'public', 'assets', 'images')

const pexels = (id, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

/** path relative to public/assets/images -> download URL */
const downloads = {
  'slide/bg.jpg': 'https://motorx-six.vercel.app/assets/images/slide/bg.jpg',
  'slide/slide2.jpg': pexels(1149137, 1920),
  'slide/slide3.jpg': pexels(210019, 1920),
  'slide/car.png': 'https://motorx-six.vercel.app/assets/images/slide/car.png',
  'car-list/car1.jpg': pexels(170811),
  'car-list/car2.jpg': pexels(1149137),
  'car-list/car5.jpg': pexels(2449445),
  'car-list/car6.jpg': pexels(1545743),
  'car-list/car7.jpg': pexels(919073),
  'car-list/car8.jpg': pexels(112460),
  'car-list/car11.jpg': pexels(116675),
  'car-list/car12.jpg': pexels(358070),
  'car-list/car13.jpg': pexels(3802510),
  'car-list/car14.jpg': pexels(1592384),
  'car-list/car15.jpg': pexels(2365572),
  'car-list/car16.jpg': pexels(193991),
  'car-list/car17.jpg': pexels(1280560),
  'car-list/car21.jpg': pexels(210019),
  'car-list/car22.jpg': pexels(1545743),
  'car-list/car23.jpg': pexels(1149137),
  'car-list/category1.jpg': pexels(1545743),
  'car-list/category2.jpg': pexels(112460),
  'car-list/category3.jpg': pexels(116675),
  'car-list/category4.jpg': pexels(358070),
  'cart-service/1.jpg': pexels(2449445),
  'cart-service/2.jpg': pexels(170811),
  'banner/1.jpg': pexels(1545743),
  'banner/2.jpg': pexels(1149137),
  'banner/3.jpg': pexels(210019),
  'banner/4.jpg': pexels(1545743),
  'banner/5.jpg': pexels(919073),
  'blog/wg1.jpg': pexels(3802510),
  'blog/wg2.jpg': pexels(2365572),
  'blog/wg3.jpg': pexels(1592384),
  'blog/1.jpg': pexels(193991),
  'blog/2.jpg': pexels(1280560),
  'blog/3.jpg': pexels(112460),
  'page/video.jpg': pexels(1545743, 1600),
  'page/image6.jpg': pexels(1149137),
  'page/image-form.jpg': pexels(170811),
  'page/dealer-detail.jpg': pexels(2449445, 1600),
  'testimonial/tes1.jpg': pexels(1181671, 800),
  'gallary/slide1.jpg': pexels(170811, 1600),
  'gallary/thum1.jpg': pexels(1149137, 400),
  'gallary/thum2.jpg': pexels(210019, 400),
  'gallary/thum3.jpg': pexels(1545743, 400),
  'gallary/thum4.jpg': pexels(919073, 400),
  'gallary/thum5.jpg': pexels(116675, 400),
  'gallary/thum6.jpg': pexels(358070, 400),
  'gallary/thum7.jpg': pexels(3802510, 400),
  'avatar/team1.jpg': 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  'avatar/team2.jpg': 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  'avatar/team3.jpg': 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  'avatar/team4.jpg': 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',

  // Browse by Brands (IconBox) — must be real PNGs (not SVG)
  'partner/1.png': 'https://www.carlogos.org/car-logos/acura-logo.png',
  'partner/2.png': 'https://www.carlogos.org/car-logos/ford-logo.png',
  'partner/3.png': 'https://www.carlogos.org/car-logos/bentley-logo.png',
  'partner/4.png': 'https://www.carlogos.org/car-logos/chevrolet-logo.png',
  'partner/5.png': 'https://www.carlogos.org/car-logos/ferrari-logo.png',
  'partner/6.png': 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png',
  'partner/logo-partner.png': 'https://www.carlogos.org/car-logos/bmw-logo.png',
  'partner/logo-partner2.png': 'https://www.carlogos.org/car-logos/audi-logo.png',

  // Browse by Body (BrowseByMode) — original demo vehicle icons
  'partner/c1.png': 'https://motorx-six.vercel.app/assets/images/partner/c1.png',
  'partner/c2.png': 'https://motorx-six.vercel.app/assets/images/partner/c2.png',
  'partner/c3.png': 'https://motorx-six.vercel.app/assets/images/partner/c3.png',
  'partner/c4.png': 'https://motorx-six.vercel.app/assets/images/partner/c4.png',
  'partner/c5.png': 'https://motorx-six.vercel.app/assets/images/partner/c5.png',
  'partner/c6.png': 'https://motorx-six.vercel.app/assets/images/partner/c6.png',

  // Best Selling Cars section
  'page/car.png': pexels(170811, 900),
  'page/car2.png': pexels(1149137, 900),
  'page/car3.png': pexels(210019, 900),

  // Car banner cutouts
  'banner/c1.png': pexels(116675, 800),
  'banner/c2.png': pexels(358070, 800),
  'banner/c3.png': pexels(3802510, 800),
  'banner/18.png': pexels(1592384, 800),
  'banner/mobie-car.png': pexels(1149137, 600),

  // Car listings used on homepage tabs
  'car-list/car3.jpg': pexels(210019),
  'car-list/car4.jpg': pexels(919073),
  'car-list/img.png': 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
}

function fetchFile(url) {
  return new Promise((resolve, reject) => {
    const request = (targetUrl, redirects = 0) => {
      const client = targetUrl.startsWith('https') ? https : http
      client
        .get(targetUrl, { headers: { 'User-Agent': 'MotorxDemoImageScript/1.0' } }, (res) => {
          if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
            if (redirects > 5) return reject(new Error('Too many redirects'))
            const next = res.headers.location.startsWith('http')
              ? res.headers.location
              : new URL(res.headers.location, targetUrl).href
            res.resume()
            return request(next, redirects + 1)
          }
          if (res.statusCode !== 200) {
            res.resume()
            return reject(new Error(`HTTP ${res.statusCode} for ${targetUrl}`))
          }
          const chunks = []
          res.on('data', (c) => chunks.push(c))
          res.on('end', () => resolve(Buffer.concat(chunks)))
          res.on('error', reject)
        })
        .on('error', reject)
    }
    request(url)
  })
}

async function main() {
  let ok = 0
  let fail = 0
  for (const [relPath, url] of Object.entries(downloads)) {
    const dest = join(imagesRoot, relPath)
    await mkdir(dirname(dest), { recursive: true })
    try {
      process.stdout.write(`Downloading ${relPath}... `)
      const data = await fetchFile(url)
      await new Promise((resolve, reject) => {
        const stream = createWriteStream(dest)
        stream.on('finish', resolve)
        stream.on('error', reject)
        stream.end(data)
      })
      console.log(`OK (${Math.round(data.length / 1024)} KB)`)
      ok++
    } catch (err) {
      console.log(`FAILED: ${err.message}`)
      fail++
    }
  }
  console.log(`\nDone: ${ok} downloaded, ${fail} failed.`)
  if (fail) process.exitCode = 1
}

main()
