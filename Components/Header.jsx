import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import HeaderImg from '../Images/Group 213.svg';

const Header = () => {
  return (
      <div className="header">
          <div className="header-content">
              <img
                  src={HeaderImg}
                  alt="Логотип сказок"
                  className="header-logo"
              />
              <h1 className="header-title">
                  Русские народные сказки
              </h1>
          </div>


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