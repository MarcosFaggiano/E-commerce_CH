import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ background }) => {
  // Define las categorías manualmente
  const categories = [
    { name: "Inicio", path: "/" },
    { name: "Men", path: "/category/men's clothing" },
    { name: "Jewelry", path: "/category/jewelery" },
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


