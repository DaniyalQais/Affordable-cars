'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

const WHATSAPP_HREF = "https://wa.me/18258520783?text=Hi%2C%20I%20am%20interested%20in%20a%20specific%20car.%20Please%20message%20me%20today."
const PHONE_HREF = "tel:+18258520783"

export default function MobileStickyCta() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.querySelector(".widget-tf-slider")

            if (!hero) {
                setIsVisible(window.scrollY > 520)
                return
            }

            const heroBottom = hero.getBoundingClientRect().bottom
            setIsVisible(heroBottom <= 0)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])

    return (
        <div className={`mobile-sticky-cta ${isVisible ? "is-visible" : ""}`} aria-label="Quick contact actions">
            <Link href={PHONE_HREF}>📞 Call</Link>
            <Link href={WHATSAPP_HREF}>💬 WhatsApp</Link>
            <Link href="/#inquiry-form">📋 Inquire</Link>
        </div>
    )
}
