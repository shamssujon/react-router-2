import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Header = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Products", path: "/products" },
        { id: 3, name: "Blog", path: "/blog" },
        { id: 4, name: "Users", path: "/users" },
        { id: 5, name: "About", path: "/about" },
        { id: 6, name: "Contact", path: "/contact" },
        { id: 7, name: "404", path: "/404" },
    ];
    return (
        <header className="bg-slate-100 py-4">
            <div className="container flex items-center justify-between">
                <h4 className="text-2xl font-bold ">
                    <Link to="/">React router 2</Link>
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
