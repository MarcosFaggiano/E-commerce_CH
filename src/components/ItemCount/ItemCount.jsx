// Contador.jsx
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
    onAdd(contador); // Envía la cantidad al contexto del carrito
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





// import { useState } from "react";

// const Contador = ({ inicial, stock, funcionAgregar }) => {
//   const [contador, setContador] = useState(inicial);


//   const sumarContador = () => {
//     if (contador < stock) {
//       setContador(contador + 1);
//     }
//   }

//   const restarContador = () => {
//     if (contador > inicial) {
//       setContador(contador - 1);
//     }
//   }

//   return (
//     <>
//       <div>
//         <button onClick={restarContador}> - </button>
//         <strong> {contador} </strong>
//         <button onClick={sumarContador}> + </button>
//       </div>
//       {/* <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button> */}
//     </>

//   )
// }

// export default Contador










