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
import SeatToggle from './SeatToggle';
import PlaceToggle from './PlaceToggle';
class Reservepage extends Component {
    state = {

        setcoupon: 'X',

    }

    minclick = () => {
        alert("완료되었습니다.")
    }



    onsetcoupon = (text) => {
        this.setState({
            setcoupon: (text == false) ? "O" : "X",
        })
    }


    render() {
        console.log(this.state);
        return (
            <div className='hompi_box'>
                <div className='hompi_title'>
                    예약페이지 설정
                </div>
    
                <div className='homepage_box'>
                    <div>
                        <CouponToggle onClick={this.onsetcoupon} /><br></br>
                    </div>
                    

                    <div>
                        <SeatToggle onClick={this.onsetcoupon} /><br></br>
                    </div>
                    

                    

                    <div>
                        <PlaceToggle onClick={this.onsetcoupon} /> <br></br>
                    </div>
                    <button className='homepage_button' onClick={this.minclick}>완료</button>
                </div>

                
            </div>
        );
    }
}



export default Reservepage;