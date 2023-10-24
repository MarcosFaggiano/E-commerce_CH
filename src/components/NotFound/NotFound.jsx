import React from 'react';
import notFoundImage from '/src/assets/img/404.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="mensaje-NotFound-div">
      <h2 className="mensaje-NotFound">Ups! No encontramos la página.</h2>
      <img className="mensaje-NotFound-img" src={notFoundImage} alt="Página no encontrada" />
    </div>
  );
}

export default NotFound;
