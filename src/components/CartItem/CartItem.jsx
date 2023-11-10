import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  // Comprobamos que el precio y la cantidad sean números válidos
  const isValidNumber = value => typeof value === 'number' && !isNaN(value);

  console.log("Precio del ítem:", item.precio);
  console.log("Cantidad:", cantidad);

  // Definir el precio unitario y la cantidad del producto
  const precio = isValidNumber(item.precio) ? item.precio : 0;
  const cantidadProducto = isValidNumber(cantidad) ? cantidad : 0;

  // Calcular el precio total
  const precioTotal = precio * cantidadProducto;

  console.log("Precio total:", precioTotal);

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <h2 className="item-title">{item.title}</h2>
          <img src={item.image} alt={item.title} className="item-image img-fluid" style={{ maxWidth: '100px' }} />
        </div>
        <div className="d-flex justify-content-around">
          <p className="mb-1">Cantidad: {cantidadProducto}</p>
          <p className="mb-1">Precio por unidad: ${precio}</p>
          <p className="mb-1">Precio total: ${precioTotal}</p>
          <button onClick={() => eliminarProducto(item.id)} className="btn btn-danger mt-2">
            Eliminar
          </button>
        </div>
      </div>
    </div>




  );
};

export default CartItem;






















