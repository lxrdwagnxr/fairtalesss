import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FairTaleCard.css';

const FairyTaleCard = ({ fairyTale }) => {
    return (
        <div className="glass-card">
            <div className="card-image-container">
                <img
                    src={fairyTale.image}
                    alt={fairyTale.name}
                    className="card-image"
                />
            </div>

            <div className="card-content">
                <h2 className="card-title">{fairyTale.name}</h2>
                <p className="card-description">{fairyTale.description}</p>

                <div className="card-meta">
                    <span className="card-price">{fairyTale.price}</span>
                    <Link
                        to={`/story/${fairyTale.id}`}
                        className="card-button"
                    >
                        Читать →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FairyTaleCard;