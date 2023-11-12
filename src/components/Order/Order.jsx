import React, { useState, useEffect, useRef } from 'react';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation'; // Importa el componente OrderConfirmation

const Order = () => {
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [orderID, setOrderID] = useState(null); // Nuevo estado para almacenar el ID de la orden

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
      direccion,
      telefono,
      email,
    };

    try {
      // Agregar la orden a la colección en la base de datos
      const refOrder = await addDoc(collection(db, 'orders'), orden);
      console.log('Orden creada con ID:', refOrder.id);

      // Almacenar el ID de la orden en el estado
      setOrderID(refOrder.id);

      // Limpiar los campos del formulario después de crear la orden
      setApellido('');
      setNombre('');
      setDireccion('');
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
        <button type="button" className="btn btn-primary" onClick={crearOrdenDeCompra}>
          Comprar
        </button>

        {/* Mostrar el modal de confirmación solo si se ha generado una orden */}
        {orderID && <OrderConfirmation orderID={orderID} />}
      </form>
    </div>
  );
};

export default Order;




// import React, { useState } from 'react';
// import { getFirestore } from 'firebase/firestore';
// import { collection, addDoc } from 'firebase/firestore';
// import { useContext } from 'react';
// import { CartContext } from '../../Context/CartContext';

// const Order = () => {
//   const [apellido, setApellido] = useState('');
//   const [nombre, setNombre] = useState('');
//   const [direccion, setDireccion] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [email, setEmail] = useState('');
//   const [confirmarEmail, setConfirmarEmail] = useState('');

//   const db = getFirestore();
//   const { vaciarCarrito } = useContext(CartContext);

//   const crearOrdenDeCompra = async () => {
//     // Verificar si los campos de email coinciden
//     if (email !== confirmarEmail) {
//       alert('Los correos electrónicos no coinciden');
//       return;
//     }

//     // Crear objeto de orden con los datos del formulario
//     const orden = {
//       apellido,
//       nombre,
//       direccion,
//       telefono,
//       email,
//     };

//     try {
//       // Agregar la orden a la colección en la base de datos
//       const refOrder = await addDoc(collection(db, 'orders'), orden);
//       console.log('Orden creada con ID:', refOrder.id);

//       // Limpiar los campos del formulario después de crear la orden
//       setApellido('');
//       setNombre('');
//       setDireccion('');
//       setTelefono('');
//       setEmail('');
//       setConfirmarEmail('');

//       // Limpiar el carrito después de crear la orden
//       vaciarCarrito();

//       // Puedes realizar otras acciones después de crear la orden si es necesario
//     } catch (error) {
//       console.error('Error al crear la orden:', error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className=" align-items-center mb-4">
//         <h2>Estás a un click de confirmar tu compra!</h2>
//         <img
//           src="/src/assets/img/envio.webp"
//           alt="Imagen de confirmación"
//           className="ml-2" // Agregamos margen a la izquierda para separar la imagen del texto
//           style={{ width: '400px', height: '200px' }} // Puedes ajustar el tamaño de la imagen según tus necesidades
//         />
//         <h5>Completa los siguientes datos asi podemos enviarte tu pedido</h5>
//       </div>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="apellido" className="form-label">
//             Apellido
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="apellido"
//             value={apellido}
//             onChange={(e) => setApellido(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="nombre" className="form-label">
//             Nombre
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="nombre"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="direccion" className="form-label">
//             Direccion ¿Donde te lo enviamos?
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="direccion"
//             value={direccion}
//             onChange={(e) => setDireccion(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="telefono" className="form-label">
//             Teléfono de Contacto
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="telefono"
//             value={telefono}
//             onChange={(e) => setTelefono(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Correo Electrónico
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="confirmarEmail" className="form-label">
//             Confirmar Correo Electrónico
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="confirmarEmail"
//             value={confirmarEmail}
//             onChange={(e) => setConfirmarEmail(e.target.value)}
//           />
//         </div>
//         <button type="button" className="btn btn-primary" onClick={crearOrdenDeCompra}>
//           Comprar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Order;


