import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <HomePage></HomePage> },
        { path: "/products", element: <ProductsPage></ProductsPage> },
        { path: "/about", element: <AboutPage></AboutPage> },
        { path: "/contact", element: <ContactPage></ContactPage> },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
