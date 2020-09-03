import React from 'react';
import './styles.css';

import MenuIcon from '../Icons/MenuIcon';
import HomeIcon from '../Icons/HomeIcon';
import MapIcon from '../Icons/MapIcon';
import LoginIcon from '../Icons/LoginIcon';

function Options() {
  return (
    <div className="options">
      <a href="/" title="Menu">
        <MenuIcon width="40px" height="40px" className="over"></MenuIcon> 
      </a>
      <a href="/" title="Home">
        <HomeIcon width="40px" height="40px" className="over"></HomeIcon> 
      </a>
      <a href="/" title="Map">
        <MapIcon width="40px" height="40px" className="over"></MapIcon> 
      </a>
      <a href="/" title="Login">
        <LoginIcon width="40px" height="40px" className="over"></LoginIcon> 
      </a>
    </div>
  );
}

export default Options;
