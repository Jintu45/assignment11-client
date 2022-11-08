import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Share/Footer/Footer';
import Header from '../Pages/Home/Share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;