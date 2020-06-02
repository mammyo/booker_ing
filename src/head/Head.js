import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Head.css';


function Head() {
  const activeStyle = {
    color: 'black'

  };
  return (
    <div classname="header">

      <div className="main_header">

        <div className="logobox">
          <h1><Link to='/'>Booker-Ceo   </Link></h1>
        </div>  
        

        <div>
          <div className="catalog "><Link exact to="/" activeStyle={activeStyle}>홈</Link></div>
          <div className="catalog"><Link exact to="/check" activeStyle={activeStyle}>예약확인</Link></div>
          <div className="catalog"><Link exact to="/service" activeStyle={activeStyle}>서비스</Link></div>

        </div>
        
      </div>
    </div>
  );
}




export default Head;