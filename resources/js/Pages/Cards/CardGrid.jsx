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
        <>
            <div className='container text-center'>
                <div className='row row-cols-4'>
                    {characters.map(character => (
                        <Card
                        name={character.name}
                        image={character.image}
                        key={character.id}
                        onClick={() => handleCardClick(character)}/>
                    ))}
                </div>
            </div>
                {showModal && <ModalCharacters
                    name={selectedCharacter.name}
                    species={selectedCharacter.species}
                    image={selectedCharacter.image}
                    url={selectedCharacter.url}
                    created_at={selectedCharacter.created_at}
                    updated_at={selectedCharacter.updated_at}
                    onClose={() => setShowModal(false)}
                />}
        </>
    );
};

export default CardGrid;
