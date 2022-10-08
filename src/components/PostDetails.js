import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id, title, body, userId } = postDetails;
    return (
        <div className="container">
            <div className="p-6 text-left">
                <p>Post ID: {id}</p>
                <h4 className="mb-2 text-xl font-semibold capitalize">{title}</h4>
                <p>{body}</p>

                <div className="block">
                    <Link
                        className="mt-4 inline-block rounded bg-slate-700 py-2 px-4 text-center text-white transition hover:bg-slate-800"
                        to={`/users/user/${userId}`}>
                        Get the author
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
