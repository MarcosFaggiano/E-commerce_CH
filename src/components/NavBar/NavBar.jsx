import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ background }) => {

  const categories = [
    { name: "Inicio", path: "/" },
    { name: "Hombres", path: "/category/Hombres" },
    { name: "Mujer", path: "/category/Mujer" },
    { name: "Electronics", path: "/category/electronics" },
    { name: "Women", path: "/category/women's clothing" }
  ];

  return (
    <header className={`header background--${background}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/src/assets/img/shopping.png" alt="logo" className="mi-clase-de-imagen" />
          </Link>
        </div>
        <nav>
          <ul className="nav-container">
            {categories.map((category) => (
              <li key={category.name}>
                <Link to={category.path}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cart-widget">
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default NavBar;


