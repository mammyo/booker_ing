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
class Ceohomepage extends Component {

    minclick = () => {
        alert("완료되었습니다.")


    }

    render() {
        return (
            <div className='homepage_box'>
                <div>
                    <ImageSwitch />
                </div>

                <div>
                    <CommentSwitch />
                </div>

                <div>
                    <CalendarSwitch />
                </div>

                <div>
                    <Time />
                </div>

                <div>
                    <Time2 />
                </div>

                <div>
                    <CouponToggle />
                </div>

                <button className='homepage_button' onClick={this.minclick}>완료</button>

            </div>
        );
    }
}



export default Ceohomepage;