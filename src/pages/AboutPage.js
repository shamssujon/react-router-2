import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
    return (
        <div>
            <Header></Header>
            <section className="py-12">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold">This is About page</h2>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;
