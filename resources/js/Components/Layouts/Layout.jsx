import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return <header className="layout-header_container"></header>;
};

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Navbar />
            <div className="layout-content_container">
                <Header />
                <div className="container">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
