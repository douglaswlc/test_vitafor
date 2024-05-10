import React from 'react';
import ModalCharacter from '@/Components/ModalCharacters';

const Card = ({ name, image }) => {
  return (
    <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
        </div>
    </div>
  );
};

export default Card;

