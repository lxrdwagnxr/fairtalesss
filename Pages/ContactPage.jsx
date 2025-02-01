import React from 'react';
import '../Styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Свяжитесь с нами</h1>
                <p className="subtitle">
                    Мы всегда рады вашему обращению! Выберите удобный способ связи или посетите наш офис.
                </p>
            </section>

            <div className="contact-cards">
                <div className="contact-card">
                    <div className="contact-icon">📧</div>
                    <h2>Электронная почта</h2>
                    <p>Пишите нам по любым вопросам:</p>
                    <a href="mailto:support@fairytale.boombox" className="contact-link">
                        support@fairytale.boombox
                    </a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">🏢</div>
                    <h2>Наш офис</h2>
                    <address className="contact-address">
                        Ул. Сказочная, д. 7<br/>
                        Волшебный Город, 123456<br/>
                        Этаж 5, Офис «Золотая Рыбка»
                    </address>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">📞</div>
                    <h2>Телефон</h2>
                    <p>Звоните в рабочее время:</p>
                    <a href="tel:+78005553535" className="contact-link">
                        +7 (800) 555-35-35
                    </a>
                </div>
            </div>

            <section className="contact-map">
                <h2>Мы на карте</h2>
                <div className="map-container">
                    <iframe
                        title="Офис на карте"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8dd4f0b6c7d8d7f4909b362aa1c814c5a1a62e4e3a8f5a8a4d0e0d7a7c6d0d3a&amp;source=constructor"
                        frameBorder="0"
                    />
                </div>
            </section>

            <section className="contact-form-section">
                <h2>Форма обратной связи</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Ваше имя" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Ваш email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Ваше сообщение" rows="5" required />
                    </div>
                    <button type="submit" className="submit-btn">
                        Отправить сообщение
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactPage;