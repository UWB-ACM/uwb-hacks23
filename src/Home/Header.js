import React from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Nav({to, text}) {
    return (
        <NavLink to={to} className="text-warning-700 mx-5 font-bold text-3xl pt-3">
            {text}
        </NavLink>
    );
}

function NavScroll({to, text}) {
    return (
        <Link to={to} smooth={'easeInOutQuint'} ignoreCancelEvents={false} duration={500} isDynamic={true} offset={-10}
              style={{cursor: 'pointer'}} className="text-warning-700 mx-5 font-bold text-3xl pt-3">
            {text}
        </Link>
    );
}

function Header() {
    return (
        <header className="h-20 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex justify-end">
                <nav>
                    <ul className="flex">
                        <Nav to="/uwb-hacks23" text="Home"></Nav>
                        <Nav to="/uwb-hacks23/Registration" text="Registration"></Nav>
                        <Nav to="mailto:acmuwbothell@gmail.com?subject=Hackathon" text="Contact"></Nav>
                        <NavScroll to="faqSection" text="FAQ"></NavScroll>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
