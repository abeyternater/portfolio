import {Navbar} from './Navbar';
import { Outlet } from 'react-router-dom';
import './PageLayoutstyles.css'


function PageLayout() {
  return (<div>
    <Navbar />
    <Outlet />
    </div>
  );
}

export default PageLayout;