import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Head.css';
import Noregist from '../pages/Noregist';



class Head extends React.Component {


  render() {
    return (
      <div className="header">
        <div className="logo"><Link exact to="/dash/dash">Booker-Ceo</Link></div>

        <div className="menu">
          <Link exact to="/dash/dash" >홈</Link>
          <Link exact to="/env/service" >설정</Link>
        </div>

        <div>
          {this.props.name}
        </div>
      </div>
    );
  }

}




export default Head;