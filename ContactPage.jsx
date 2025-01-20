import React from 'react';
import "./App.css";
const ContactPage = () => {
    return (
        <div>
            <h1>Контакты</h1>
            <p>Мы всегда рады услышать от вас! Свяжитесь с нами любым удобным способом:</p>

            <h2>Электронная почта</h2>
            <p>Напишите нам письмо по адресу <a href="mailto:example@example.com">example@example.com</a>. Мы ответим вам в течение 24 часов.</p>




            <h2>Адрес офиса</h2>
            <p>Вы также можете посетить наш офис лично:</p>
            <address>
                Улица Пушкина, дом 1, Москва, Россия<br />
                Телефон: +7 (495) 123-45-67
            </address>


        </div>
    );
};

export default ContactPage;