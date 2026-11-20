import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import Users from '../Users/Users';

const Root = () => {
    const navigation = useNavigate();
    const isNavigating = Boolean(navigation.location);
    return (
         <>
            <Header></Header>

            <div>
                <aside>
                     <SideBar></SideBar>
                     {isNavigating && <span>Loading...</span>}
                </aside>
                <Outlet></Outlet>
            </div>
           
            <Footer></Footer>
         </>
         
    );
};

export default Root;