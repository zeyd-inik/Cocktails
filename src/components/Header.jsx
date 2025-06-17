import { NavLink } from 'react-router';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <h1 className="logo">Cocktails</h1>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
