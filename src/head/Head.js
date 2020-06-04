import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Head.css';


function Head() {
  const activeStyle = {
    color: 'black'

  };
  return (
    <div className="header">
      <div className="logo"><Link exact to="/dash">Booker-Ceo</Link></div>

      <div className="menu">
        <Link exact to="/dash" activeStyle={activeStyle}>홈</Link>
        <Link exact to="/service/service" activeStyle={activeStyle}>서비스</Link>
        <Link exact to="/" activeStyle={activeStyle}>부커 홈</Link>
      </div>
    </div>
  );

}




export default Head;