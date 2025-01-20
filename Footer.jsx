import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <h3>Полезные ссылки</h3>
                        <ul>
                            <li><a href="#">Политика конфиденциальности</a></li>
                            <li><a href="#">Условия использования</a></li>
                            <li><a href="#">Часто задаваемые вопросы</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Связаться с нами</h3>
                        <p>Email: example@example.com</p>
                        <p>Телефон: +7 (495) 123-45-67</p>
                    </div>
                </div>
                <hr />
                <div className="copyright">
                    © lxrdwagnxr | jej)
                </div>
            </div>
        </footer>
    );
};

export default Footer;