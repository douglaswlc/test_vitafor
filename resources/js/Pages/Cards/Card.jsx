import React from 'react';

const Card = ({ name, image }) => {
  return (
    <div>
        {/* {/* <div className="card">
            <img src={image} className="card-img-top" alt={card.name} />
            <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div> */}
        <div className="card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
  );
};


export default Card;
