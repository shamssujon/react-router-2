import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className="text-center">
                <h1 className="text-4xl font-bold text-rose-800">404. Not found!</h1>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;
