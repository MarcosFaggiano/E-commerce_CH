// ItemDetail.jsx
import React from 'react';
import Contador from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ product }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    agregarAlCarrito(product, newQuantity);
  };

  return (
    <div className="item-detail-container">
      <h2 className="item-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-image" />
      <h2 className="price">${product.price}</h2>
      <h6 className="description">{product.description}</h6>
      <Contador inicial={1} stock={10} onAdd={handleQuantityChange} />
    </div>
  );
};

export default ItemDetail;










