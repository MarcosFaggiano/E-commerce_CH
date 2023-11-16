import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

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
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
