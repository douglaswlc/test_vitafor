import React, { useEffect, useState } from 'react';
import Card from './Card';
import characterAPI from '../../../service/charactersAPI';

const CardGrid = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const charactersData = await characterAPI();
                setCharacters(charactersData.results);
            } catch (error) {
                console.error('Erro ao carregar os personagens', error);
            }
        }

        fetchCharacters();
    })

    return (
        <div className="card-group">
            <div className="card"></div>
        {characters.map(card => (
            <div key={card.id}>
                <img src={card.image} className="card-img-top" alt={card.name} />
                <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <h5 className="card-title">{card.species}</h5>
                </div>
            </div>
            ))}
            </div>
    );








};

export default CardGrid;
