import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ route }) => {
    const { name, path } = route;
    return (
        <Link className="p-2 font-medium uppercase" to={path}>
            {name}
        </Link>
    );
};

export default NavLink;
