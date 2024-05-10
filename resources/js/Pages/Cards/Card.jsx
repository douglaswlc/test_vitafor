import React from 'react';

const Card = ({ name, image, onClick }) => {
  return (
    <div className="col cursor-pointer" onClick={onClick}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
        </div>
    </div>
  );
};

export default Card;

