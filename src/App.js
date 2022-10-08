import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./layout/Layout";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children: [
                { path: "/", element: <HomePage></HomePage> },
                { path: "/home", element: <HomePage></HomePage> },
                { path: "/products", element: <ProductsPage></ProductsPage> },
                { path: "/about", element: <AboutPage></AboutPage> },
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
