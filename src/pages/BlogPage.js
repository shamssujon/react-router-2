import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const BlogPage = () => {
    const posts = useLoaderData();
    return (
        <section className="py-12">
            <div className="container text-center">
                <h2 className="text-4xl font-bold mb-8">This is Blog Page: {posts.length}</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Post key={post.id} post={post}></Post>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
