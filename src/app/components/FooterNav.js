import React from "react";

const FooterNav = ({ title, nav }) => {
    return (
        <nav className="nav-col">
            <p className="footer-heading">{title}</p>
            <ul className="footer-nav">
                {nav.map(data => {
                    return (
                        <li><a className="footer-link" href="#nav">{data}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default FooterNav;