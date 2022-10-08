import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ route }) => {
    const { name, path } = route;
    return (
        <NavLink
            to={path}
            className={({ isActive }) => (isActive ? "text-rose-600" : undefined) + " p-2 font-medium uppercase"}>
            {name}
        </NavLink>
    );
};

export default MenuItem;
