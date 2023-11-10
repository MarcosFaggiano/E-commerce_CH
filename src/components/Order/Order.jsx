import React, { useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Order = () => {
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');

  const db = getFirestore();
  const { vaciarCarrito } = useContext(CartContext);

  const crearOrdenDeCompra = async () => {
    // Verificar si los campos de email coinciden
    if (email !== confirmarEmail) {
      alert('Los correos electrónicos no coinciden');
      return;
    }

    // Crear objeto de orden con los datos del formulario
    const orden = {
      apellido,
      nombre,
      telefono,
      email,
    };

    try {
      // Agregar la orden a la colección en la base de datos
      const refOrder = await addDoc(collection(db, 'orders'), orden);
      console.log('Orden creada con ID:', refOrder.id);

      // Limpiar los campos del formulario después de crear la orden
      setApellido('');
      setNombre('');
      setTelefono('');
      setEmail('');
      setConfirmarEmail('');

      // Limpiar el carrito después de crear la orden
      vaciarCarrito();

      // Puedes realizar otras acciones después de crear la orden si es necesario
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Orden</h2>
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
        <button type="button" className="btn btn-primary" onClick={crearOrdenDeCompra}>
          Crear Orden
        </button>
      </form>
    </div>
  );
};

export default Order;

