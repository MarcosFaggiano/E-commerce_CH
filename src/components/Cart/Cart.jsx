import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>Sin compras</h2>
        <p>
          Todavía no viste todo lo que tenemos para vos?  <Link to="/">aquí</Link>
        </p>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto, index) => (
        <CartItem key={index} {...producto} />
      ))}
      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()} className="btn btn-danger">Vaciar Carrito</button> {/* Estilo de botón para "Vaciar Carrito" */}
      <Link to="/Order" className="btn btn-primary">Finalizar Compra</Link> {/* Estilo de botón para "Finalizar Compra" */}
    </div>
  );
};

export default Cart;












