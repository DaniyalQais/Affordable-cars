import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, handleToggle1, isToggled1, handleToggle2, isToggled2, handleToggle3, isToggled3 }) {
    return (
        <>
            <header id="header3" className="main-header header header-fixed ">
                {/* Header Lower */}
                <div className="top-bar">
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-md-9">
                                <ul className="list-infor-topbar">
                                    <li>
                                        <Link href="tel:+18258520783">
                                            <i className="icon-Group-11" />
                                            <p>Call Us: +1 825-852-0783</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <i className="icon-Group3" />
                                            <p>Affordable cars. Fast approvals. No-pressure buying.</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="icon-topbar">
                                    <li>
                                        <Link href="/#"><i className="icon-6" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><i className="icon-4" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><i className="icon-5" /></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><i className="icon-7" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-lower">
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-style2 flex justify-space align-center">
                                    {/* Logo Box */}
                                    <div className="logo-box flex">
                                        <div className="logo"><Link href="/"><img src="/assets/images/logo/affordable-cars-logo-cropped.png" alt="Affordable Cars For Sale" /></Link></div>
                                    </div>
                                    <div className="nav-outer flex align-center">
                                        {/* Main Menu */}
                                        <nav className="main-menu show navbar-expand-md">
                                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix">
                                                    <li className="current"><Link href="/">Home</Link></li>
                                                    <li><Link href="/car-list">Inventory</Link></li>
                                                    <li><Link href="/listing-details">Featured Deals</Link></li>
                                                    <li><Link href="/blog">Buying Tips</Link></li>
                                                    <li><Link href="/contact-us">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                        {/* Main Menu End*/}
                                    </div>
                                    <div className="header-account flex align-center">
                                        <Link className="premium-phone-link" href="tel:+18258520783">+1 825-852-0783</Link>
                                        <Link className="premium-nav-cta" href="/car-list">Browse Cars</Link>
                                    </div>
                                    <div className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu}>
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Header Lower */}
                {/* Mobile Menu  */}
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-cancel-1" /></div>
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box">
                        <div className="nav-logo">
                            <Link href="/"><img src="/assets/images/logo/affordable-cars-logo-cropped.png" alt="Affordable Cars For Sale" /></Link>
                        </div>
                        <div className="bottom-canvas">
                            <div className="menu-outer">
                                <MobileMenu />
                            </div>
                            <div className="help-bar-mobie search">
                                <Link href="/car-list" className="fw-7 font-2"><i className="icon-loupe-1" />Browse Cars</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* End Mobile Menu */}
            </header>

        </>
    )
}
