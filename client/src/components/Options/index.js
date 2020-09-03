import React from 'react';
import './styles.css';
import menu from '../../assets/menu.svg';
import home from '../../assets/home.svg';
import map from '../../assets/map.svg';
import login from '../../assets/login.svg';

function Options() {
  return (
    <div className="options">
      <a href="/" >
        <img src={menu} alt="Menu" /> 
      </a>
      <a href="/">
        <img src={home} alt="Home" />
      </a>
      <a href="/">
        <img src={map} alt="Mapa" />
      </a>
      <a href="/">
        <img src={login} alt="Login" />
      </a>
    </div>
  );
}

export default Options;
