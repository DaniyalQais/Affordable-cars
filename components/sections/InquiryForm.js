'use client'
import { useEffect, useState } from "react"

const WHATSAPP_NUMBER = "18258520783"

export default function InquiryForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        car: "",
        message: "",
    })

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const selectedCar = params.get("car")

        if (selectedCar) {
            setForm((current) => ({
                ...current,
                car: selectedCar,
                message: `I'm interested in this car: ${selectedCar}. Please contact me today.`,
            }))
        }
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const inquiryText = [
            "New car inquiry",
            `Name: ${form.name || "Not provided"}`,
            `Phone: ${form.phone || "Not provided"}`,
            `Interested car: ${form.car || "Not specified"}`,
            `Message: ${form.message || "No message"}`,
        ].join("\n")

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiryText)}`, "_blank", "noopener,noreferrer")
    }

    return (
        <section className="inquiry-section" id="inquiry-form">
            <div className="themesflat-container">
                <div className="inquiry-card">
                    <div className="inquiry-copy">
                        <span className="sub-title">Fast Response Inquiry</span>
                        <h2>Found a Car You Like? Let&apos;s Talk</h2>
                        <p>Fill out the form below and we&apos;ll get back to you within the hour</p>
                    </div>
                    <form className="inquiry-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="car"
                            placeholder="Which car are you interested in?"
                            value={form.car}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message (optional)"
                            value={form.message}
                            onChange={handleChange}
                        />
                        <button type="submit">Send My Inquiry</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
