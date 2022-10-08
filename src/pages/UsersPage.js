import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../components/User";

const UsersPage = () => {
    const users = useLoaderData();
    return (
        <section className="py-12">
            <div className="container text-center">
                <h2 className="text-4xl font-bold mb-8">This is Users Page. Total Users: {users.length}</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <User key={user.id} user={user}></User>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsersPage;
