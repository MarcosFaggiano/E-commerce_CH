import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';
import { db } from "../../firebase/client";
import { collection, doc, getDoc, getDocs, getFirestore, query, where, limit } from 'firebase/firestore'; // Importar las funciones necesarias de Firestore


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();


  useEffect(() => {

    // ******Obtener 1 solo producto*****/////
    // const productRef = doc(db, "products", "bp4v0YcCXfhdWdppTO2f")
    // getDoc(productRef)
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log({ id: snapshot.id, ...snapshot.data() })
    //     }
    //   })
    //   .catch(e => console.error(e))

    // ******filtros *****/////
    // const productsReffilter = query(
    //   collection(db, "products"),
    //   where("categoryId", "==", "pantalones")
    // )




    const productsRef = collection(db, "products",)
    getDocs(productsRef)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
      .catch(e => console.error(e))
    // .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;





