import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faFish,
    faMapMarkedAlt,
    faGun,
} from "@fortawesome/free-solid-svg-icons";

const Logo = ({ handleIsOpen }) => {
    return (
        <div className="nav__name" onClick={handleIsOpen} style={{cursor: "pointer"}}>
            <img src="/img/logo/image.png" alt="logo" />
        </div>
    );
};

const NavItem = ({ url, name, icon, active = false, navIsOpen = false }) => {
    return (
        <li className="navbar-list_item">
            <a href={url} className={active ? "active" : ""}>
                <FontAwesomeIcon
                    icon={icon}
                    className="navbar-list_item_icon"
                />
                {navIsOpen && <span>{name}</span>}
            </a>
        </li>
    );
};

const Navbar = ({ page }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={`navbar-container ${isOpen ? "open" : ""}`}>
            <Logo handleIsOpen={() => setIsOpen(!isOpen)} />
            <ul className="navbar-list">
                <NavItem
                    url="/home"
                    name="Home"
                    icon={faHome}
                    active={page === "home"}
                    navIsOpen={isOpen}
                />
                <NavItem
                    url="/test/maps"
                    name="Maps"
                    icon={faMapMarkedAlt}
                    active={page === "maps"}
                    navIsOpen={isOpen}
                />
                <NavItem
                    url="/test/ammo"
                    name="Ammo"
                    icon={faGun}
                    active={page === "ammo"}
                    navIsOpen={isOpen}
                />
            </ul>
        </div>
    );
};

export default Navbar;
