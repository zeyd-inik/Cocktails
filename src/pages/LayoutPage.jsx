import './LayoutPage.scss';
import { Outlet } from 'react-router';

import Header from '../components/Header';

function LayoutPage() {
  return (
    <div className="LayoutPage">
      <Header />
      <div className="outlet_container">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPage;
