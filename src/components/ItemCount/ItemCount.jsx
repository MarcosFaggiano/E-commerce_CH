import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-secondary" type="button" onClick={decreaseCount}>-</button>
        <span className="input-group-text">{count}</span>
        <button className="btn btn-outline-secondary" type="button" onClick={increaseCount}>+</button>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleAdd}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;



