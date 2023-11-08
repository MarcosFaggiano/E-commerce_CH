import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client'; // Asegúrate de que la ruta sea correcta
import ItemCount from '../ItemCount/ItemCount'; // Asegúrate de que la ruta sea correcta

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product && selectedQuantity > 0) {
      alert(`Producto "${product.title}" - Cantidad: ${selectedQuantity} agregado al carrito`);
      // Lógica para agregar al carrito
    } else {
      alert('Por favor, selecciona al menos un producto para agregar al carrito.');
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'products', productId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          setProduct({
            id: productSnapshot.id,
            ...productSnapshot.data(),
          });
        } else {
          console.log('No se encontró el producto con el ID especificado.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2 className="item-title">{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-image" />
      <h2 className="price">${product.price}</h2>
      <h6 className="description">{product.description}</h6>

      <ItemCount initial={selectedQuantity} stock={10} onAdd={setSelectedQuantity} />
    </div>
  );
};

export default ItemDetailContainer;







