import React from "react";
import Navbar from "../../navbar";
import { Outlet } from "react-router-dom";
import Footer from '../../../pages/Footer/Footer'

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}

export default DefaultLayout;