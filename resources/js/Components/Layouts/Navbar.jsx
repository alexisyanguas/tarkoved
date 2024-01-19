import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faFish,
    faMapMarkedAlt,
    faGun,
    faPowerOff,
    faRightToBracket,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Logo = ({ handleIsOpen }) => {
    return (
        <div
            className="nav__name"
            onClick={handleIsOpen}
            style={{ cursor: "pointer" }}
        >
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

const Footer = ({ isAuth = false, isOpen }) => {
    const url = isAuth ? "/logout" : "/auth/redirect";
    const name = isAuth ? "Logout" : "Login";
    const icon = isAuth ? faRightFromBracket : faRightToBracket;

    return (
        <div className="navbar-list_footer">
            <NavItem url={url} name={name} icon={icon} navIsOpen={isOpen} />
            <div className="navbar-list_footer-copyright">
                {isOpen ? (
                    <>
                        <span>&copy; 2023 - {new Date().getFullYear()}</span>
                        <span>Khimaira</span>
                    </>
                ) : (
                    <span>&copy; {new Date().getFullYear()}</span>
                )}
            </div>
        </div>
    );
};

const Navbar = ({ page, isAuth }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={`navbar-container ${isOpen ? "open" : ""}`}>
            <Logo handleIsOpen={() => setIsOpen(!isOpen)} />
            <div className="navbar-list_container">
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
                <Footer isAuth={isAuth} isOpen={isOpen} />
            </div>
        </div>
    );
};

export default Navbar;
