import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//import mi archivo css 
import './NavBar.css';

const NavBar = ({ background }) => {
  //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
  const brand =
    'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';
  //la lógica va siempre antes del return
  return (
    <header className={`header background--${background}`}>
      
      <div className="header-container">
        
        {/* links de navegación */}
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

        {/* logo de la marca */}
        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>

        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
