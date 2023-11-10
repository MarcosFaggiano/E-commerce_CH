import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png";
  return (
    <Link to="/cart">
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
      {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
    </Link>
  );
};

export default CartWidget;
