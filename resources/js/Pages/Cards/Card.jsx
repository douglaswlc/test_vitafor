import React from 'react';

const Card = ({ name, image, onClick }) => {
  return (
    <div className="col" onClick={onClick}>
        <img src={image} className="card-img-top cursor-pointer" alt={name} />
        <div className="card-body cursor-pointer">
            <h5 className="card-title">{name}</h5>
        </div>
    </div>
  );
};

export default Card;

