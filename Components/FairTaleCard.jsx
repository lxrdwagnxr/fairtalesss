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

                <Link
                    to={`/story/${fairyTale.id}`}
                    className="overlay-button"
                >

                </Link>
            </div>
        </div>
    );
};

export default FairyTaleCard;
