import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { db } from '../../firebase/client';
import { collection, getDocs, query as firestoreQuery, where } from 'firebase/firestore';

import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        let firestoreQueryRef = firestoreQuery(productsRef);

        if (id) {
          firestoreQueryRef = firestoreQuery(productsRef, where('categoryId', '==', id));
        }

        const snapshot = await getDocs(firestoreQueryRef);
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

