import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className="rounded border bg-slate-100 p-6 text-left shadow">
            <h4 className="mb-2 text-xl font-semibold">
                {title.length > 30 ? title.slice(0, 30) + "..." : title}
            </h4>
            <p>{body.length > 100 ? body.slice(0, 100) + "..." : body}</p>
            <Link
                className="mt-4 block rounded bg-slate-700 py-2 px-4 text-center text-white transition hover:bg-slate-800"
                to={`/blog/post/${id}`}>
                Details
            </Link>
        </div>
    );
};

export default Post;
