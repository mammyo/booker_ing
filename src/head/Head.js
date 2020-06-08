import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Head.css';
import Noregist from '../pages/Noregist';



class Head extends React.Component {

  state = {
    image:'',
    name:'',
    semicategory:'',
    explaination:''
}

componentDidMount(){
    this.callApi()
        .catch(err => console.log(err));
}

callApi = async () => {
    const response = await fetch('/api/main_category');
    const body = await response.json();
    this.setState({
        image: body[0].image,
        name: body[0].name,
        semiCategory: body[0].semiCategory,
        explaination: body[0].explaination,
    });
    console.log(this.state.name);
    return body;
}


  render() {
    return (
      <div className="header">
        <div className="logo"><Link exact to="/dash/dash">Booker-Ceo</Link></div>

        <div className="menu">
          <Link exact to="/dash/dash" >홈</Link>
          <Link exact to="/env/service" >설정</Link>
        </div>

        <div className='store_box'>
          {this.state.name}
        </div>
      </div>
    );
  }

}




export default Head;