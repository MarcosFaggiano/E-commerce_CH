import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { db } from '../../firebase/client';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const snapshot = await getDocs(productsRef);
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;











