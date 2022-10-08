import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <HomePage></HomePage> },
        { path: "/about", element: <AboutPage></AboutPage> },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
