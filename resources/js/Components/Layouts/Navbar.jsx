import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFish } from "@fortawesome/free-solid-svg-icons";

const Logo = ({ handleIsOpen }) => {
    return (
        <div className="nav__name" onClick={handleIsOpen}>
            <FontAwesomeIcon icon={faFish} />
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

const Navbar = ({}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={`navbar-container ${isOpen ? "open" : ""}`}>
            <Logo handleIsOpen={() => setIsOpen(!isOpen)} />
            <ul className="navbar-list">
                <NavItem
                    url="/"
                    name="Home"
                    icon={faHome}
                    active={true}
                    navIsOpen={isOpen}
                />
            </ul>
        </div>
    );
};

export default Navbar;
