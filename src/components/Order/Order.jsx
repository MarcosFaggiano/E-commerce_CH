import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebase/client";
import { addDoc, collection } from "firebase/firestore";

const Order = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CartContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los correos electrónicos no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docref) => {
        setOrdenId(docref.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      });
  };

  return (
    <div>
      <h2>Order</h2>

      <form onSubmit={manejadorFormulario} className="needs-validation">
        {carrito.map((producto) => (
          <div key={producto.item.id} className="mb-3">
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio: ${producto.item.precio}</p>
          </div>
        ))}

        <div className="mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailConfirmacion">Confirmar Email</label>
          <input
            type="email"
            className="form-control"
            id="emailConfirmacion"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="btn btn-primary">
          Confirmar Compra
        </button>

        {ordenId && (
          <strong>
            Gracias por la compra!! Tu número de orden es {ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Order;
