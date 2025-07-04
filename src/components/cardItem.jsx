// src/components/CardItem.js
import React from 'react';

function CardItem({ image, price,name }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p>Name: ${name}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
}

export default CardItem;
