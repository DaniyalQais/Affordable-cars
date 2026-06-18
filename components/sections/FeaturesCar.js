
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function FeaturesCar() {
    return (
        <>
            <div className="widget-feature-car">
                <div className="themesflat-container full">
                    <div className="feature-car">
                        <div className="feature-car-content">
                            <div className="heading-section">
                                <span className="sub-title mb-6 wow fadeInUp">Trusted Car Dealer Service</span>
                                <h2 className="title mb-40 wow fadeInUp">Frequently Asked Questions</h2>
                                <p className="description wow fadeInUp">Get quick answers about availability,
                                    financing, delivery, and the exact vehicle you want before you visit or buy.
                                </p>
                            </div>
                            <div className="list-icon-check">
                                <ul>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Same-day replies for questions about specific vehicles</p>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Financing guidance and approval support for qualified buyers</p>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Nationwide delivery options available on selected vehicles</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-main">
                                <Link href="/#" className="button_main_inner">
                                    <span>Send Inquiry</span>
                                </Link>
                            </div>
                        </div>
                        <div className="feature-car-video video-wrap">
                            <img src="/assets/images/page/video.jpg" alt="" />
                            <VideoPopup style={1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
