import React from "react";
import Navbar from "./Navbar";

const Header = ({ title, user }) => {
    return (
        <header className="layout-header_container">
            <div className="layout-header_content-title">
                <h2>{title}</h2>
            </div>
            {user && (
                <div className="layout-header_content-user">
                    <span>{user?.name}</span>
                    <img src={user?.avatar} alt={user?.name} />
                </div>
            )}
        </header>
    );
};

const Layout = ({ children, page, title, user = null }) => {
    return (
        <div className="layout-container">
            <Navbar page={page} isAuth={user !== null} />
            <div className="layout-content_container">
                <Header title={title} user={user} />
                <div className="layout-content">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
