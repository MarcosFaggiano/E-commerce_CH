import { useState, createContext } from "react";

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0
});

const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);


  const total = carrito.reduce((acc, producto) => {

    const precio = typeof producto.item.price === "number" && !isNaN(producto.item.price) ? producto.item.price : 0;
    const cantidad = typeof producto.cantidad === "number" && !isNaN(producto.cantidad) ? producto.cantidad : 0;

    return acc + precio * cantidad;
  }, 0);

  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find(prod => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito(prev => [
        ...prev,
        {
          item,
          cantidad,
          precio: item.price
        }
      ]);
    } else {
      const carritoActualizado = carrito.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
    }

    setCantidadTotal(prev => prev + cantidad);
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find(prod => prod.item.id === id);
    const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

    setCarrito(carritoActualizado);
    setCantidadTotal(prev => prev - productoEliminado.cantidad);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };

