import React, { useState, useEffect, useContext } from 'react';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../../Context/CartContext';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';

const Order = () => {
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [orderID, setOrderID] = useState(null);
  const [formCompleto, setFormCompleto] = useState(false);
  const { carrito, vaciarCarrito } = useContext(CartContext);

  const db = getFirestore();

  useEffect(() => {
    const formularioCompleto =
      apellido !== '' &&
      nombre !== '' &&
      direccion !== '' &&
      telefono !== '' &&
      email !== '' &&
      confirmarEmail !== '' &&
      email === confirmarEmail;

    setFormCompleto(formularioCompleto);
  }, [apellido, nombre, direccion, telefono, email, confirmarEmail]);

  const crearOrdenDeCompra = async () => {
    if (email !== confirmarEmail) {
      alert('Los correos electrónicos no coinciden');
      return;
    }

    const orden = {
      apellido,
      nombre,
      direccion,
      telefono,
      email,
      productos: carrito.map(item => ({
        title: item.item.title,
        cantidad: item.cantidad,
        precio: item.item.price,
      })),
    };

    try {
      const refOrder = await addDoc(collection(db, 'orders'), orden);
      console.log('Orden creada con ID:', refOrder.id);

      setOrderID(refOrder.id);

      setApellido('');
      setNombre('');
      setDireccion('');
      setTelefono('');
      setEmail('');
      setConfirmarEmail('');

      vaciarCarrito();

      // Puedes realizar otras acciones después de crear la orden si es necesario
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className=" align-items-center mb-4">
        <h2>Estás a un click de confirmar tu compra!</h2>
        <img
          src="/src/assets/img/envio.webp"
          alt="Imagen de confirmación"
          className="ml-2"
          style={{ width: '400px', height: '200px' }}
        />
        <h5>Completa los siguientes datos así podemos enviarte tu pedido</h5>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Direccion ¿Donde te lo enviamos?
          </label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono de Contacto
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmarEmail" className="form-label">
            Confirmar Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="confirmarEmail"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={crearOrdenDeCompra} disabled={!formCompleto}>
          Comprar
        </button>

        {orderID && <OrderConfirmation orderID={orderID} />}
      </form>
    </div>
  );
};

export default Order;

