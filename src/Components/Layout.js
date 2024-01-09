// Layout.js
import React from "react";
import { Link } from "react-router-dom";
import { useSharedState } from "./SharedStateContext";

const Layout = ({ children }) => {
  const { pageTitle } = useSharedState();

  return (
    <div>
      <header>
        <a href="#" className="logo1"><h1>MY APP</h1></a>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1 className="title">{pageTitle}</h1>
        {children}
      </main>

      <footer>
        <p>copyright &copy; {new Date().getFullYear()} MY APP</p>
      </footer>
    </div>
  );
};

export default Layout;
