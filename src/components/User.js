import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, username, email } = user;
    return (
        <div className="rounded border bg-slate-100 p-6 text-left shadow">
            <h4 className="mb-2 text-xl font-semibold">{name}</h4>
            <p>
                <span className="font-semibold">Username:</span> {username}
            </p>
            <p>
                <span className="font-semibold">Email:</span> {email}
            </p>
            <Link
                className="mt-4 block rounded bg-slate-700 py-2 px-4 text-center text-white transition hover:bg-slate-800"
                to={`/user/${id}`}>
                Details
            </Link>
        </div>
    );
};

export default User;
