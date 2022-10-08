import React from "react";
import NavLink from "./NavLink";

const Header = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Products", path: "/products" },
        { id: 3, name: "About", path: "/about" },
        { id: 4, name: "Contact", path: "/contact" },
    ];
    return (
        <header className="bg-slate-100 py-4">
            <div className="container flex items-center justify-between">
                <h4 className="text-2xl font-bold ">
                    <a href="/">React router 2</a>
                </h4>
                <nav className="flex items-center gap-4">
                    {routes.map((route) => (
                        <NavLink key={route.id} route={route}></NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
