
import React from 'react';

const TalesPage = () => {
    return (
        <div>
            <h1>Сказки</h1>
            <p>Здесь будет список сказок.</p>
            {/* Встраиваем видео */}
            <iframe
                title="Never Gonna Give You Up"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                allowFullScreen
                style={{
                    width: '100vw',
                    height: '100vh'
                }}
            />
        </div>
    );
};

export default TalesPage;