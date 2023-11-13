import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({ orderID, handleClose }) => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    handleClose();
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    return () => {
      // Limpieza adicional si es necesario al desmontar el componente
    };
  }, [navigate, handleClose]);

  return (
    <Modal
      show={true}
      onHide={handleModalClose}
      backdrop="static"
      keyboard={false}
      onExited={handleModalClose}
      centered
      dialogClassName="custom-modal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Orden Confirmada</h5>
            <Button variant="light" className="btn-close" onClick={handleModalClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body text-center">
            <p>Tu orden ha sido confirmada con el número: <span style={{ color: 'red', fontSize: '1.1em', fontWeight: 'bold' }}>{orderID}</span></p>
            <img src="/src/assets/img/Conf-envio-order.webp" alt="Imagen de confirmación" style={{ width: '5cm', height: '5cm', marginBottom: '0.5cm' }} />
            <p>Por favor, guarda este número de orden para seguimiento de tu pedido.</p>
            <p style={{ color: 'green', fontSize: '1.1em', fontWeight: 'bold' }}>¡Gracias por comprar en Córdoba Mayorista!</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OrderConfirmation;




// import React, { useEffect } from 'react';
// import { Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const OrderConfirmation = ({ orderID, handleClose }) => {
//   const navigate = useNavigate();

//   // Define la función handleModalClose fuera del useEffect para poder usarla en el onHide y en el onExited
//   const handleModalClose = () => {
//     handleClose();
//     navigate('/');
//     window.location.reload();
//   };

//   useEffect(() => {
//     // No necesitas el timeout, manejarás la redirección y actualización en el evento onHide

//     return () => {
//       // Esta parte se ejecutará cuando el componente se desmonte
//       // Puedes agregar limpiezas adicionales si es necesario
//     };
//   }, [navigate, handleClose]);

//   return (
//     <Modal show={true} onHide={handleModalClose} backdrop="static" keyboard={false} onExited={handleModalClose}>
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Orden Confirmada</h5>
//             <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
//           </div>
//           <div className="modal-body">
//             <p>Tu orden ha sido confirmada con el número: <span style={{ color: 'red', fontSize: '1.1em', fontWeight: 'bold' }}>{orderID}</span></p>
//             <img src="/src/assets/img/Conf-envio-order.webp" alt="Imagen de confirmación" style={{ width: '5cm', height: '5cm', marginBottom: '0.5cm' }} />
//             <p>Por favor, guarda este número de orden para seguimiento de tu pedido.</p>
//             <p style={{ color: 'green', fontSize: '1.1em', fontWeight: 'bold' }}>¡Gracias por comprar en Córdoba Mayorista!</p>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default OrderConfirmation;





























