import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png";
  return (
    <Link to="/cart" className="cart-widget-container">
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
      {cantidadTotal > 0 && <div className="cart-widget-badge">{cantidadTotal}</div>}
    </Link>
  );
};

export default CartWidget;
