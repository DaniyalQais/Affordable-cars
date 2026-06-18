
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    navigation: {
        nextEl: ".swiper-button-next-tes",
        prevEl: ".swiper-button-prev-tes",
    },
    loop: true,
    speed: 600,
    parallax: true,
}
export default function TestimonialSlider() {
    return (
        <>
            <div className="swiper testimonial-swiper">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="testimonial-content swiper-slide">
                        <span className="sub-title">Trusted Car Dealer Service</span>
                        <h3 className="title">What Our Buyers Say</h3>
                        <p className="description">I found the SUV I wanted, sent a quick inquiry, and received
                            a response the same day. The process was simple from first message
                            to delivery.
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="/assets/images/testimonial/avt.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Michael R.</div>
                                <div className="position">Verified Buyer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-content swiper-slide">
                        <span className="sub-title">Trusted Car Dealer Service</span>
                        <h3 className="title">What Our Buyers Say</h3>
                        <p className="description">The team answered my questions quickly and helped me choose
                            a car that fit my budget. I liked that every step was clear and
                            easy to follow.
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="/assets/images/testimonial/avt.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Sarah K.</div>
                                <div className="position">Verified Buyer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-content swiper-slide">
                        <span className="sub-title">Trusted Car Dealer Service</span>
                        <h3 className="title">What Our Buyers Say</h3>
                        <p className="description">I used the inquiry button for a specific vehicle and got the
                            details I needed within the hour. It made the buying decision much
                            easier.
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="/assets/images/testimonial/avt.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Daniel P.</div>
                                <div className="position">Verified Buyer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="btn-next-prev">
                    <div className="swiper-button-next-tes next">
                        <i className="icon-Vector-11" />
                    </div>
                    <div className="swiper-button-prev-tes prev">
                        <i className="icon-Vector-2" />
                    </div>
                </div>
            </div>
        </>
    )
}
