import React, { Component } from 'react';
import './componentCSS/comment.css';
import './Ceohompage.css';

class Comment extends Component {
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
    
    this.props.comment(this.state.name);
    this.setState({name: ' '});
};


  render() {
    return (
  <div>
        <input 
         
          placeholder="입력하세요"
          value={this.state.name}
          onChange={this.handleChange}
        />
       
      <button className='homepage_click_bt' onClick={this.handleClick} >click</button>

      </div>
    );
  }
}

export default Comment;