import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

const NavBar = ({ background }) => {
  const brand = '/src/assets/img/Logo.jpg';

  return (
    <header className={`header background--${background}`}>
      <div className="header-container">
        <div className="logo-container">
          { }
          <img src={brand} alt="logo" className="mi-clase-de-imagen" />
        </div>
        { }
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>

        { }
        <div className="cart-widget">
          { }
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
