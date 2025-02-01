// Rating.js
import React, { useState, useEffect } from "react";
import "../Styles/Rating.css";

const Rating = ({ taleId }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    // Загружаем оценку из localStorage при монтировании
    useEffect(() => {
        const savedRating = localStorage.getItem(`rating-${taleId}`);
        if (savedRating) {
            setRating(Number(savedRating));
        }
    }, [taleId]);

    const handleRating = (value) => {
        setRating(value);
        localStorage.setItem(`rating-${taleId}`, value); // Сохраняем оценку
    };

    return (
        <div className="rating">
            <h3>Оцените сказку:</h3>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={
                            star <= (hoverRating || rating) ? "star active" : "star"
                        }
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
            ★
          </span>
                ))}
            </div>
            <p>Ваша оценка: {rating} из 5</p>
        </div>
    );
};

export default Rating;