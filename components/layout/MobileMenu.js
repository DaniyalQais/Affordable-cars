'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileMenu() {
    const pathname = usePathname()
    return (
        <>
            <ul className="navigation clearfix">
                <li className={pathname == "/" ? "current" : ""}><Link href="/">Home</Link></li>
                <li className={pathname == "/car-list" ? "current" : ""}><Link href="/car-list">Inventory</Link></li>
                <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">Featured Deals</Link></li>
                <li className={pathname == "/blog" || pathname == "/blog-single" ? "current" : ""}><Link href="/blog">Buying Tips</Link></li>
                <li className={pathname == "/contact-us" ? "current" : ""}><Link href="/contact-us">Contact</Link></li>
                <li className="mobile-menu-cta"><Link href="/car-list">Browse Cars</Link></li>
            </ul>
        </>
    )
}
