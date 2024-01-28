import { useState } from "react";

import "../assets/css/navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <a href="/" className="title">
                l.950
            </a>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;