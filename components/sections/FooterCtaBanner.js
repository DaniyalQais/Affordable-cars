import Link from "next/link"

const WHATSAPP_HREF = "https://wa.me/18258520783?text=Hi%2C%20I%20am%20ready%20to%20drive%20today.%20Please%20help%20me%20with%20a%20specific%20car."
const PHONE_HREF = "tel:+18258520783"

export default function FooterCtaBanner() {
    return (
        <section className="footer-cta-banner">
            <div className="themesflat-container">
                <div className="footer-cta-card">
                    <div>
                        <span className="sub-title">Same-Day Approvals</span>
                        <h2>Ready to Drive Today?</h2>
                        <p>Same-day approvals available — contact us now</p>
                    </div>
                    <div className="footer-cta-actions">
                        <Link href={WHATSAPP_HREF}>💬 WhatsApp Us</Link>
                        <Link href={PHONE_HREF}>📞 Call Us</Link>
                        <Link href="/#inquiry-form">📋 Send Inquiry</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
