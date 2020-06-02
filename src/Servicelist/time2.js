import React,{Component} from 'react';
import TimePicker from 'react-time-picker';

class Time2 extends Component {
  state = {
    time: '22:00',
 

  }
 
  onChange = time => {
      this.setState({ time })
     
    } ;

handleClick = () =>{
    console.log(this.state);
    
};


  render() {
    return (
      <div>
         <h3>-마감 시간</h3>
        <TimePicker
          onChange={this.onChange}
          value={this.state.time}
        />
        <button onClick={this.handleClick} >click</button>
  
      </div>
      
    );
  }
}
export default Time2;