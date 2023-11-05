import React from "react";
import OmniFoodLogo from '../../assests/img/omnifood-logo.png'

const Header =()=>{
    return (
        <header className="header">
        <a href="#top">
            <img className="logo" src={OmniFoodLogo} alt="Omnifood logo"/>
        </a>
        <nav className="main-nav">
            <ul className="main-nav-list">
                <li><a className="main-nav-link" href="#how">How it works</a></li>
                <li><a className="main-nav-link" href="#meals">Meals</a></li>
                <li><a className="main-nav-link" href="#testimonial">Testimonials</a></li>
                <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
                <li><a className="main-nav-link nav-cta" href="#cta">Try for free</a></li>
            </ul>
        </nav>

        <button className="btn-mobile-nav">
            <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
            <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
    </header>

    )
}
export default Header;