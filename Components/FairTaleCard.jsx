import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FairTaleCard.css';
import Button from '../Images/bttn2.svg';

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
                    <img src={Button}
                         alt={NaN}
                         />
                </Link>
            </div>
        </div>

    );
};


export default FairyTaleCard;
