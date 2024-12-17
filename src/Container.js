import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Container = (props) => {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    const backgroundClass = `star-${props.character.rarity}-bg`;

    const toggleDescription = () => {
        setDescriptionExpanded(prevState => !prevState);
    };

    return (
        <>
            <div className={`container ${backgroundClass}`}>
                <img
                    src={`${props.character.faceImgUrl}`}
                    alt={`${props.character.faceImgUrl}`}
                    onClick={toggleDescription}
                />
                <a
                    href={`https://www.youtube.com/results?search_query=character+Trailer+${props.character.name}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="character-name">
                        {`${props.character.name}`}
                    </div>
                </a>
                <div className="character-rarity">
                    {[...Array(props.character.rarity)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
            </div>
            {props.character.description && descriptionExpanded && (
                <div className="character-description" onClick={toggleDescription}>
                    <pre>
                        <img
                            src={`${props.character.bodyImgUrl}`}
                            alt={`${props.character.bodyImgUrl}`}
                        />
                        {props.character.description}
                    </pre>
                    <div>
                        <p><strong>Name:</strong> {props.character.name}</p>
                        <p><strong>Weapon:</strong> {props.character.weapon}</p>
                        <p><strong>Element:</strong> {props.character.element}</p>
                        <p><strong>Region:</strong> {props.character.region}</p>
                        <p><strong>Rarity:</strong> {props.character.rarity}</p>
                        <p><strong>Constellation:</strong> {props.character.constellation}</p>
                        <p><strong>Birthday:</strong> {props.character.birthday}</p>
                        <p><strong>Release Date:</strong> {props.character.releaseDate}</p>
                        <p><strong>VA:</strong> {props.character.va}</p>
                    </div>
                </div>
            )}


        </>
    );
};

export default Container;