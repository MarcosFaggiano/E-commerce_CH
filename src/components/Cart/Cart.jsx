import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <div>
          <img
            src="/src/assets/img/emptycart-2.png"  // Reemplaza con la ruta de tu imagen
            alt="Imagen de muestra"
            className="imagen-sin-compras"
          />
          <h2>Sin compras</h2>
          <p>
            Todavía no viste todo lo que tenemos para vos? <Link to="/">Ingresa aquí</Link>
          </p>
        </div>
      </>
    );
  }

  // Añadimos un console.log para depurar
  console.log("Total:", total);

  return (
    <div>
      {carrito.map((producto, index) => (
        <CartItem key={index} item={producto.item} cantidad={producto.cantidad} />
      ))}
      {/* Añadimos un console.log para depurar */}
      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()} className="btn btn-danger vaciar-carrito">Vaciar Carrito</button>
      <Link to="/Order" className="btn btn-primary">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;


















