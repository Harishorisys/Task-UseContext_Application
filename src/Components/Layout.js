// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSharedState } from './SharedStateContext';

const Layout = ({ children }) => {
    const  { PageTitle } = useSharedState();

  return (
    <div>
      <header>
        <h1 className='logo1'>MY APP</h1>
        <nav className='navbar' >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>{PageTitle}</h1>
        {children}
      </main>

      <footer>
        <p>copyright &copy; {new Date().getFullYear()} MY APP</p>
      </footer>
    </div>
  );
};

export default Layout;
