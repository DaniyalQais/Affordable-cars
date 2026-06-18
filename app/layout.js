import '../public/assets/css/bootstrap.css'
import '../public/assets/css/animate.min.css'
import '../public/assets/css/animation.css'
import '../public/assets/css/map.min.css'
import '../public/assets/css/swiper-bundle.min.css'
import '../public/assets/css/magnific-popup.min.css'
import '../public/assets/css/nice-select.css'
import '../public/assets/css/style-core.css'
import '../public/assets/css/next-fixes.css'

import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-main-family",
    display: 'swap',
})
const dm = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-btn-family",
    display: 'swap',
})

export const metadata = {
    title: 'Affordable Cars For Sale',
    description: 'Find Your Perfect Car — Fast & Affordable',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
            </head>
            <body className={`body counter-scroll ${dm.variable} ${jakarta.variable}`}>{children}</body>
        </html>
    )
}
