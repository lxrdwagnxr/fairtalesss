

// FairyTaleCard.js
import React from 'react';

const FairyTaleCard = ({ fairyTale }) => { // Исправлено
  return (
    <div className="fairytale-card">
      <img src={fairyTale.image} alt={fairyTale.name} className="fairytale" />
      <h2 className="fairytale-name">{fairyTale.name}</h2>
      <p className="fairytale-description">{fairyTale.description}</p>
      <p className="fairytale-price">{fairyTale.price}</p>
      <a href={fairyTale.link} target="_blank" rel="noopener noreferrer">
        <button className="fairytale-button">Перейти к сказке</button>
      </a>
    
    </div>
  );
};
export default FairyTaleCard; 