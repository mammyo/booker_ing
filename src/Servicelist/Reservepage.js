import React, { Component } from 'react';
import './Ceohompage.css'
import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import ImageSwitch from './imageToggle';
import CommentSwitch from './commentToggle';
import CouponToggle from './couponToggle';
class Reservepage extends Component {
    state={
        
        setcoupon:'X',
    
    }

    minclick = () => {
        alert("완료되었습니다.")
    }



    onsetcoupon=(text)=>{
        this.setState({
            setcoupon: (text==false) ? "O" : "X",
        })
    }


    render() {
        console.log(this.state);
        return (
            <div className='homepage_box'>
                
                <div>
                    <CouponToggle onClick={this.onsetcoupon}/>
                </div>

                <button className='homepage_button' onClick={this.minclick}>완료</button>

            </div>
        );
    }
}



export default Reservepage;