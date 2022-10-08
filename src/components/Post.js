import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className="rounded border bg-slate-100 p-6 text-left shadow">
            <h4 className="mb-2 text-xl font-semibold">{title}</h4>
            <p>{body}</p>
            <Link
                className="mt-4 block rounded bg-slate-700 py-2 px-4 text-center text-white transition hover:bg-slate-800"
                to={`/blog/post/${id}`}>
                Details
            </Link>
        </div>
    );
};

export default Post;
