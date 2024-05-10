import React, { useEffect, useState } from 'react';
import Card from './Card';
import characterAPI from '../../../service/charactersAPI';
import ModalCharacters from '../../Components/ModalCharacters';

const CardGrid = () => {
    const [characters, setCharacters] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

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
    }, []);

    const handleCardClick = (character) => {
        setSelectedCharacter(character);
        setShowModal(true);
    }

    return (
        <div>
            <div className="card-group">
                {characters.map(character => (
                    <div key={character.id} onClick={() => handleCardClick(character)}>
                        <Card name={character.name} image={character.image} />
                    </div>
                ))}
            </div>
            {showModal && <ModalCharacters
                name={characters.name}
                species={characters.species}
                image={characters.image}
                url={characters.url}
                created_at={characters.created_at}
                updated_at={characters.updated_at}
                character={selectedCharacter}
                onClose={() => setShowModal(false)}
            />}
        </div>
    );
};

export default CardGrid;
