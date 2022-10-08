import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import UsersPage from "./pages/UsersPage";
import UserDetails from "./components/UserDetails";
import BlogPage from "./pages/BlogPage";
import PostDetails from "./components/PostDetails";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children: [
                { path: "/", element: <HomePage></HomePage> },
                { path: "/home", element: <HomePage></HomePage> },
                { path: "/about", element: <AboutPage></AboutPage> },
                { path: "/products", element: <ProductsPage></ProductsPage> },
                {
                    path: "/users",
                    element: <UsersPage></UsersPage>,
                    loader: async () => {
                        return fetch("https://jsonplaceholder.typicode.com/users");
                    },
                },
                {
                    path: "/user/:userId",
                    loader: async ({ params }) => {
                        return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
                    },
                    element: <UserDetails></UserDetails>,
                },
                {
                    path: "/blog",
                    loader: async () => {
                        return fetch("https://jsonplaceholder.typicode.com/posts");
                    },
                    element: <BlogPage></BlogPage>,
                },
                {
                    path: "/blog/post/:postId",
                    loader: async ({ params }) => {
                        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
                    },
                    element: <PostDetails></PostDetails>,
                },
            ],
        },
        { path: "/contact", element: <ContactPage></ContactPage> },
        { path: "*", element: <ErrorPage></ErrorPage> },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
