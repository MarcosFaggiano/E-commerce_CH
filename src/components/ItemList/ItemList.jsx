import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;





