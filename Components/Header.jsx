import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className="header">
        <h1>Русские народные сказки</h1>
        <nav className="menu">
            <ul>
                <li><Link to="/" className="menu-link">Главная</Link></li>
                <li><Link to="/tales" className="menu-link">Сказки</Link></li>
                <li><Link to="/about-us" className="menu-link">О нас</Link></li>
                <li><Link to="/contact" className="menu-link">Контакты</Link></li>
            </ul>
        </nav>
      </div>

  );
};

export default Header;