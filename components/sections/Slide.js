'use client'
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function Slide() {
    const whatsappHref = "https://wa.me/18258520783?text=Hi%2C%20I%20want%20to%20find%20a%20car%20today."

    return (
        <>
            <div className="widget-tf-slider " style={{ minHeight: '700px' }}>
                <div className="slider-wrap swiper-wrapper">
                    <div className="tf-slide-item swiper-slide" style={{ position: 'relative', minHeight: '700px' }}>
                        <div className="slide-item-image" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                            <img src="/assets/images/slide/bg.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            <div className="overlay" />
                        </div>
                        <div className="slide-item-content">
                            <div className="slide-content">
                                <span className="wow fadeInUp sub-title" data-wow-delay="100ms" data-wow-duration="2000ms">Affordable Cars For Sale</span>
                                <h1 className=" title-slide wow slideInUp" data-wow-delay="50ms" data-wow-duration="200ms">
                                    Find Your Car Today — Message Us on WhatsApp</h1>
                                <p className="description wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    Browse our inventory and get a same-day response</p>
                                <div className="box">
                                    {/* Button */}
                                    <div className="btn-main wow fadeInUp" data-wow-delay="400ms" data-wow-duration="2000ms">
                                        <Link href={whatsappHref} className="button_main_inner ">
                                            <span>
                                                💬 Chat on WhatsApp
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Button */}
                                    <div className="video-wrap wow fadeInUp" data-wow-delay="500ms" data-wow-duration="2000ms">
                                        <VideoPopup style={2} />
                                    </div>
                                </div>
                            </div>
                            <div className="slide-image">
                                <img src="/assets/images/slide/icon.png" className="icon-shape wow swing" alt="" />
                                <div className="box-offer">
                                    <p>40 <span>%</span></p>
                                    <span>off</span>
                                </div>
                                <div className="box-car">
                                    <img src="/assets/images/slide/car.png" alt="" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
                            <div className="box">
                                <span>+1 825-852-0783</span>
                                <span>Dallas, TX, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
