import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { title, body } = postDetails;
    return (
        <div className="container">
            <div className="p-6 text-left">
                <h4 className="mb-2 text-xl font-semibold">{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostDetails;
