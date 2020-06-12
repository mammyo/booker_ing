import React, { Component } from 'react';
import './Ceoservice_module.css';

class MenuName extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }


  handleClick = () =>{
    console.log(this.state);
    this.setState({name: ' '});
    
};


  render() {
    return (
  <div>
          <h3>-이름</h3>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
        />
  
      <button className='homepage_click_bt' onClick={this.handleClick} >click</button>
     
      </div>
    );
  }
}

export default MenuName;