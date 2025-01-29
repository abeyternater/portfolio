import {Navbar} from './Navbar';
import { Outlet } from 'react-router-dom';
import '../PageLayout/PageLayoutstyles.css';
import React from 'react';


function PageLayout() {
    


    return (<div>
        <Navbar />
        <Outlet />

    </div>
    );
}

export default PageLayout;