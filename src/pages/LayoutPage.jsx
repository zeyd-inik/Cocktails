import './LayoutPage.scss';
import { Outlet } from 'react-router';

import Navbar from './../components/Navbar';

function LayoutPage() {
  return (
    <div className="LayoutPage">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default LayoutPage;
