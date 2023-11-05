import React from "react";
import FooterNav from "./FooterNav";
import { footerNav } from '../utils/constant/constant';
import images from "../utils/image";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container grid grid--footer">

                <div className="logo-col">
                    <a href="#top" className="footer-logo">
                        <img className="logo" src={images.OmnifoodLogo} alt="Omnifood logo" />
                    </a>
                    <ul className="social-links">
                        <li><a className="footer-link" href="#insta">
                            <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
                        </a></li>
                        <li><a className="footer-link" href="#facebook">
                            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
                        </a></li>
                        <li><a className="footer-link" href="#twitter">
                            <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
                        </a></li>
                    </ul>
                    <p className="copyright">
                        Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
                    </p>
                </div>

                <div className="address-col">
                    {/*  we willnot use an new h element because it is not any new section we will use p */}
                    <p className="footer-heading">Contact us</p>
                    <address className="contacts">
                        <p className="address"> 623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                        <p>
                            <a className="footer-link" href="tel:415-201-6370">415-201-6370</a>
                            <br />
                            <a className="footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
                        </p>
                    </address>
                </div>
                {footerNav.map(footer => <FooterNav {...footer} />)}
            </div>
        </footer>
    )
}

export default Footer;