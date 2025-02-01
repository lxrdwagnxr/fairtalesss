import React from 'react';
import '../Styles/AboutUsPage.css';

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <section className="hero-section">
                <h1>О нас</h1>
                <p className="subtitle">
                    Мы команда энтузиастов, создающих волшебные сказки! Наша цель – делиться удивительными историями, которые вдохновляют и учат.
                </p>
            </section>

            <section className="mission-section">
                <h2>Наша миссия</h2>
                <p>
                    Мы оживляем классические и современные сказки, делая их доступными и интересными для широкой аудитории. Наш контент высокого качества радует читателей и слушателей всех возрастов.
                </p>
            </section>

            <section className="team-section">
                <h2>Наша команда</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/AlekseyGorshenev.jpg" alt="Писатель" />
                        <h3>Алексей</h3>
                        <p>Писатель</p>
                        <p>Создатель увлекательных сюжетов и персонажей.</p>
                    </div>
                    {/* Добавьте остальные карточки команды аналогично */}
                </div>
            </section>

            <section className="gallery-section">
                <h2>Наши работы</h2>
                <div className="gallery-grid">
                    <img src="" alt="Иллюстрация 1" />
                    {/* Добавьте остальные изображения галереи */}
                </div>
            </section>

            <section className="join-section">
                <h2>Присоединяйтесь к нам!</h2>
                <form className="join-form">
                    <input type="text" placeholder="Ваше имя" required />
                    <input type="email" placeholder="Ваш email" required />
                    <textarea placeholder="Расскажите о себе" rows={4} required />
                    <button type="submit">Отправить</button>
                </form>
            </section>
        </div>
    );
};

export default AboutUsPage;;