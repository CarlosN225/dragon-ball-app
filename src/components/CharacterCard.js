import React from 'react';

const CharacterCard = ({ character }) => {
    return (
        <div className="character-card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p><strong>Raza:</strong> {character.race}</p>
            <p><strong>Poder:</strong> {character.ki}</p>
            <p><strong>Poder Máximo:</strong> {character.maxKi}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Descripción:</strong> {character.description}</p>
            <p><strong>Afilicación:</strong> {character.affiliation}</p>
            {character.originPlanet && (
                <p><strong>Planeta de Origen:</strong> {character.originPlanet.name}</p>
            )}
            {character.transformations && character.transformations.length > 0 && (
                <div>
                    <strong>Transformaciones:</strong>
                    <ul>
                        {character.transformations.map((transformation, index) => (
                            <li key={index}>{transformation.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterCard;
