import React, { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';

const NavBar = ({ background }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const productsRef = collection(db, 'products');
        const snapshot = await getDocs(productsRef);

        const uniqueCategories = new Set();
        snapshot.docs.forEach(doc => {
          uniqueCategories.add(doc.data().categoryId);
        });

        setCategories(Array.from(uniqueCategories));
      } catch (error) {
        console.error('Error fetching categories: ', error);
      }
    };

    fetchCategories();
  }, []);

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
            {categories.map(category => (
              <li key={category}>
                <Link to={`/category/${category}`}>{category}</Link>
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







