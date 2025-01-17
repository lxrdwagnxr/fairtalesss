

// FairyTaleCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const FairyTaleCard = ({ fairyTale }) => {
    return (
        <div className="fairytale-card">
            <Link to={`/story/${fairyTale.id}`}>
                <img src={fairyTale.image} alt={fairyTale.name} className="fairytale" />
                <h2 className="fairytale-name">{fairyTale.name}</h2>
                <p className="fairytale-description">{fairyTale.description}</p>
                <p className="fairytale-price">{fairyTale.price}</p>
                <button className="fairytale-button">Перейти к сказке</button>
            </Link>
        </div>
    );
};


export default FairyTaleCard; 