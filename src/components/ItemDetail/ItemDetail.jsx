import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product, selectedQuantity, setSelectedQuantity }) => {
  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2 className="item-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-image" />
      <h2 className="price">${product.price}</h2>
      <h6 className="description">{product.description}</h6>

      <ItemCount initial={selectedQuantity} stock={10} onAdd={setSelectedQuantity} />
    </div>
  );
};

export default ItemDetail;
