import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return <header className="layout-header_container"></header>;
};

const Layout = ({ children, page }) => {
    return (
        <div className="layout-container">
            <Navbar page={page} />
            <div className="layout-content_container">
                <Header />
                <div className="layout-content">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
