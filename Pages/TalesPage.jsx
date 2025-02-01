import React, { useState } from 'react';
import '../Styles/TalesPage.css';

const fairyTales = [
    {
        id: 1,
        title: "Сказка о золотом петушке",
        description: "Мудрая история о предсказаниях и последствиях",
        videoId: "GD5y3WQBKH4"
    },
    {
        id: 2,
        title: "Царевна-лягушка",
        description: "Волшебная история о преодолении испытаний",
        videoId: "lfb0k-vXt-s"
    },
    {
        id: 3,
        title: "Колобок",
        description: "Классическая русская народная сказка",
        videoId: "deWCbfBGuiU"
    }
];

const TalesPage = () => {
    const [selectedVideo, setSelectedVideo] = useState(fairyTales[0].videoId);

    return (
        <div className="tales-page">
            <h1>Сказочная видеотека</h1>
            <p className="subtitle">Выберите сказку и смотрите её в нашем плеере</p>

            <div className="tales-grid">
                {fairyTales.map((tale) => (
                    <div
                        key={tale.id}
                        className={`tale-card ${selectedVideo === tale.videoId ? 'active' : ''}`}
                        onClick={() => setSelectedVideo(tale.videoId)}
                    >
                        <div className="card-content">
                            <h3>{tale.title}</h3>
                            <p>{tale.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="video-container">
                <iframe
                    title="fairytale-player"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default TalesPage;