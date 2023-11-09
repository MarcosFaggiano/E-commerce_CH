import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <h2 className="price">${product.price}</h2>
      <Link to={`/product/${product.id}`} className="btn btn-primary">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;



