
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
export default function TestimonialSliderV2() {
    return (
        <>
            <div className="swiper testimonial-swiper">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="testimonial-v2-content swiper-slide">
                        <span className="sub-title">Trusted Car Dealer Service</span>
                        <h3 className="title">What Our Buyers Say</h3>
                        <p className="description">I found the exact car I wanted and got a same-day response.
                            The team answered my questions clearly and helped me move forward
                            with confidence.
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="/assets/images/testimonial/avt1.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Michael R.</div>
                                <div className="position">Verified Buyer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-v2-content swiper-slide">
                        <span className="sub-title">Trusted Car Dealer Service</span>
                        <h3 className="title">What Our Buyers Say</h3>
                        <p className="description">The inquiry form made it easy to ask about a specific car.
                            I received pricing details quickly and the buying process felt
                            straightforward.
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="/assets/images/testimonial/avt1.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Sarah K.</div>
                                <div className="position">Verified Buyer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="testimonial-v2-content swiper-slide">
                        <span className="sub-title">Trusted Car Dealer Service</span>
                        <h3 className="title">What Our Buyers Say</h3>
                        <p className="description">I appreciated the fast communication and delivery options.
                            Everything was focused on the car I was interested in, not a
                            generic sales pitch.
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="/assets/images/testimonial/avt1.png" alt="avatar" />
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
