import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FairTaleCard.css';

const FairyTaleCard = ({ fairyTale }) => {
    return (
        <div className="overlay-card">
            <img
                src={fairyTale.image}
                alt={fairyTale.name}
                className="card-bg-image"
            />

            <div className="card-content-overlay">
                <h2 className="overlay-title">{fairyTale.name}</h2>
                <p className="overlay-description">{fairyTale.description}</p>
                <Link
                    to={`/story/${fairyTale.id}`}
                    className="overlay-button"
                >
                    Читать сейчас
                </Link>
            </div>
        </div>
    );
};

export default FairyTaleCard;
