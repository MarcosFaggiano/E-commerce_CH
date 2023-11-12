import React, { useRef, useEffect } from 'react';
import { Modal } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({ orderID }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const modal = new Modal(modalRef.current);
    modal.show();

    return () => {
      // Asegúrate de ocultar y destruir el modal al desmontar el componente
      modal.hide();
      modal.dispose();
    };
  }, []);

  const handleClose = () => {
    // Oculta el modal antes de redirigir
    const modal = Modal.getInstance(modalRef.current);
    modal.hide();
    navigate('/');
  };

  return (
    <div className="modal fade" ref={modalRef} data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Orden Confirmada</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Tu orden ha sido confirmada con el número: <span style={{ color: 'red', fontSize: '1.1em', fontWeight: 'bold' }}>{orderID}</span></p>
            <img src="/src/assets/img/Conf-envio-order.webp" alt="Imagen de confirmación" style={{ width: '5cm', height: '5cm', marginBottom: '0.5cm' }} />
            <p>Por favor, guarda este número de orden para seguimiento de tu pedido.</p>
            <p style={{ color: 'green', fontSize: '1.1em', fontWeight: 'bold' }}>¡Gracias por comprar en Córdoba Mayorista!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;




















