import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  const isValidNumber = (value) => typeof value === "number" && !isNaN(value);

  const precio = isValidNumber(item.price) ? item.price : 0;

  const cantidadProducto = isValidNumber(cantidad) ? cantidad : 0;

  const precioTotal = precio * cantidadProducto;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={item.image}
            alt={item.title}
            className="item-image img-fluid"
            style={{ maxWidth: "150px" }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">{item.title}</h2>
            <div className="card-title text-center mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <p
                  className="mb-1"
                  style={{
                    marginBottom: "0.5cm",
                    fontSize: "1.1em",
                    fontWeight: "Open",
                    color: "#666666",
                  }}
                >
                  Cantidad: {cantidadProducto}
                </p>
                <p
                  className="mb-1"
                  style={{
                    marginBottom: "0.5cm",
                    fontSize: "1.1em",
                    fontWeight: "Open",
                    color: "#666666",
                  }}
                >
                  Precio por unidad: ${precio}
                </p>
                <p
                  className="mb-1"
                  style={{
                    marginBottom: "0.5cm",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    color: "#666666",
                  }}
                >
                  Precio total: ${precioTotal}
                </p>
                <button
                  onClick={() => eliminarProducto(item.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;




