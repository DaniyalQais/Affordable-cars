'use client'
import Link from 'next/link'
import { useState } from "react"

const PHONE_HREF = "tel:+18258520783"

const tabs = [
    { id: 1, label: "Cadillac" },
    { id: 2, label: "Audi" },
    { id: 3, label: "BMW" },
    { id: 4, label: "Mercedes" },
    { id: 5, label: "Hyundai" },
]

const carsByTab = {
    1: [
        {
            name: "Chevrolet Suburban 2021",
            subTitle: "Family SUV • Same-day response",
            image: "/assets/images/cart-service/1.jpg",
            priceSale: "$3,958",
            price: "$7,894",
            year: "2023",
        },
        {
            name: "Cadillac Escalade Premium",
            subTitle: "Luxury SUV • Ready to drive",
            image: "/assets/images/cart-service/2.jpg",
            priceSale: "$4,250",
            price: "$8,400",
            year: "2023",
        },
    ],
    2: [
        {
            name: "Audi Q7 Premium Plus",
            subTitle: "All-wheel drive • Available today",
            image: "/assets/images/cart-service/1.jpg",
            priceSale: "$4,120",
            price: "$8,190",
            year: "2023",
        },
        {
            name: "Audi A6 Sport Sedan",
            subTitle: "Clean title • Nationwide delivery",
            image: "/assets/images/cart-service/2.jpg",
            priceSale: "$3,740",
            price: "$7,580",
            year: "2022",
        },
    ],
    3: [
        {
            name: "BMW X5 xDrive",
            subTitle: "Luxury SUV • Fast approval",
            image: "/assets/images/cart-service/1.jpg",
            priceSale: "$4,395",
            price: "$8,750",
            year: "2023",
        },
        {
            name: "BMW 5 Series Sedan",
            subTitle: "Premium sedan • Message for details",
            image: "/assets/images/cart-service/2.jpg",
            priceSale: "$3,980",
            price: "$7,950",
            year: "2022",
        },
    ],
    4: [
        {
            name: "Mercedes-Benz GLE",
            subTitle: "Luxury SUV • Same-day response",
            image: "/assets/images/cart-service/1.jpg",
            priceSale: "$4,520",
            price: "$8,990",
            year: "2023",
        },
        {
            name: "Mercedes-Benz C-Class",
            subTitle: "Comfort sedan • Delivery available",
            image: "/assets/images/cart-service/2.jpg",
            priceSale: "$3,850",
            price: "$7,720",
            year: "2022",
        },
    ],
    5: [
        {
            name: "Hyundai Santa Fe",
            subTitle: "Affordable SUV • Ready today",
            image: "/assets/images/cart-service/1.jpg",
            priceSale: "$2,995",
            price: "$5,990",
            year: "2023",
        },
        {
            name: "Hyundai Sonata",
            subTitle: "Fuel efficient • Fast approval",
            image: "/assets/images/cart-service/2.jpg",
            priceSale: "$2,650",
            price: "$5,280",
            year: "2022",
        },
    ],
}

function inquiryHref(carName) {
    return `/?car=${encodeURIComponent(carName)}#inquiry-form`
}

function CarCard({ car }) {
    return (
        <div className="col-12 col-sm-6 col-md-6 col-xl-6">
            <div className="tf-car-service-v2">
                <Link href="/listing-details" className="image">
                    <div className="stm-badge-top">
                        <div className="feature-group">
                            <span className="featured">Featured</span>
                            <span className="year">{car.year}</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={car.image} className="img-responsive" alt={car.name} />
                    </div>
                </Link>
                <div className="content">
                    <span className="sub-title">{car.subTitle}</span>
                    <h6 className="title"><Link href="/listing-details">{car.name}</Link></h6>
                    <div className="description">
                        <ul>
                            <li className="listing-information fuel">
                                <i className="icon-gasoline-pump-1" />
                                <div className="inner">
                                    <span>Fuel type</span>
                                    <p>Petrol</p>
                                </div>
                            </li>
                            <li className="listing-information size-engine">
                                <i className="icon-Group1" />
                                <div className="inner">
                                    <span>Mileage</span>
                                    <p>90 k.m</p>
                                </div>
                            </li>
                            <li className="listing-information transmission">
                                <i className="icon-gearbox-1" />
                                <div className="inner">
                                    <span>Transmission</span>
                                    <p>Auto</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-btn-wrap cta-card-footer">
                        <div className="price-group">
                            <span className="price-sale">{car.priceSale}</span>
                            <span className="price">{car.price}</span>
                        </div>
                        <div className="car-card-cta-group">
                            <Link href={inquiryHref(car.name)} className="car-card-cta primary">
                                I'm Interested
                            </Link>
                            <Link href={PHONE_HREF} className="car-card-cta secondary">
                                Call Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CarListV2({ h5 }) {
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <>
            <div className={`${h5 ? "widget-car-list-v2-h5" : "widget-car-list-v2"} `}>
                <div className="themesflat-container">
                    <div className="header-tab mb-46">
                        <div className="heading-section">
                            {!h5 && <span className="sub-title mb-10 wow fadeInUp">Same-Day Buyer Support</span>}
                            <h2 className={`${h5 ? "title-section-main" : "title"} wow fadeInUp`}>
                                {`${!h5 ? "Popular Cars Ready Today" : "Explore All Cars"}`}
                            </h2>
                        </div>
                        <ul className="nav nav-pills tab-car-service-v2 justify-content-end" id="pills-tab-service-v2" role="tablist">
                            {tabs.map((tab) => (
                                <li className="nav-item" onClick={() => setActiveIndex(tab.id)} key={tab.id}>
                                    <button className={activeIndex == tab.id ? "nav-link active" : "nav-link"}>{tab.label}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent-v2">
                        {tabs.map((tab) => (
                            <div className={activeIndex == tab.id ? "tab-pane fade show active" : "tab-pane fade"} key={tab.id}>
                                <div className="row">
                                    {carsByTab[tab.id].map((car) => (
                                        <CarCard car={car} key={car.name} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
