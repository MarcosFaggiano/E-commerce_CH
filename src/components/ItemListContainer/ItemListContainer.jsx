import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    const url = nombreCategoria
      ? `https://fakestoreapi.com/products/category/${nombreCategoria}`
      : 'https://fakestoreapi.com/products';

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => console.error(error));
  }, [nombreCategoria]);

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;





