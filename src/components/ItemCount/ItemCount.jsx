import { useState } from "react";

const Contador = ({ inicial, stock, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const handleAdd = () => {
    onAdd(contador);
  };

  return (
    <div>
      <div>
        <button className="btn btn-outline-secondary" onClick={restarContador}>-</button>
        <strong>{contador}</strong>
        <button className="btn btn-outline-secondary" onClick={sumarContador}>+</button>
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleAdd}>Agregar al Carrito</button>
    </div>
  );
};

export default Contador;
