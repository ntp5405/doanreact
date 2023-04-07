import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout