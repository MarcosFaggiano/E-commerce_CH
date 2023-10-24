import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    alert(`Producto "${product.title}" agregado al carrito`);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2 className="item-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-image" />
      <h2 className="price">${product.price}</h2>
      <h6 className="description">{product.description}</h6>
      <button onClick={handleAddToCart} className="btn btn-primary">
        Agregar a Carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;




