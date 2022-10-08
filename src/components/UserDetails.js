import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userData = useLoaderData();
    console.log(userData);
    const { name, username, phone, email, website, address } = userData;
    return (
        <div className="rounded border bg-slate-100 p-6 text-left shadow">
            <h4 className="mb-2 text-xl font-semibold">{name}</h4>
            <p>
                <span className="font-semibold">Address:</span>{" "}
                {`${address.street}, ${address.city}`}
            </p>
            <p>
                <span className="font-semibold">Username:</span> {username}
            </p>
            <p>
                <span className="font-semibold">Phone:</span> {phone}
            </p>
            <p>
                <span className="font-semibold">Email:</span> {email}
            </p>
            <p>
                <span className="font-semibold">Website:</span> {website}
            </p>
        </div>
    );
};

export default UserDetails;
