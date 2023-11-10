import React from 'react';
import { useContext } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Item = ({ product }) => {
  const { numero } = useContext(CartContext)
  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <h2 className="price">${product.price}</h2>
      <Link to={`/product/${product.id}`} className="btn btn-primary">
        Ver detalles
      </Link>
      <p>{numero}</p>
    </div>
  );
};

export default Item;



