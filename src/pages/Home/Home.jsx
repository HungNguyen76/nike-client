import "./home.scss";
import {Outlet} from "react-router-dom";
import {useContext} from 'react';

import Navbar from '@comp/Navbar/Navbar'


import Footer from "@comp/Footers/Footer";
import {RootContext} from "@/App";


function Home() {

    const {userStore, cartStore} = useContext(RootContext);

    /*const checkAdmin = () => {
        if (userStore.data?.role == "ADMIN") {
            return true
        }
        return false
    }
    */

    return (
        <div className="root_page">
            {/* Navbar */}
            <Navbar userStore={userStore} cartStore={cartStore}/>
            {/* Body */}
            <section className="body_container">
                <div className="body_container_center">
                    {/* <Banner /> */}
                    <Outlet/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;
