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
    state={
        setimage:'X',
        setcommnet:'X',
        setcalendar:'X',
        settime1:'',
        settime2:'',
        setcoupon:'X',
    
    }

    minclick = () => {
        alert("완료되었습니다.")
    }

    onsetimage=(text)=>{
        this.setState({
            setimage: (text==false) ? "O" : "X",
        })
    }

    onsetcomment=(text)=>{
        this.setState({
            setcommnet: (text==false) ? "O" : "X",
        })
    }

    onsecalendar=(text)=>{
        this.setState({
            setcalendar: (text==false) ? "O" : "X",
        })
    }

    


    render() {
        console.log(this.state);
        return (
            <div className='homepage_box'>
                <div>
                    <ImageSwitch onClick={this.onsetimage}/>
                </div>

                <div>
                    <CommentSwitch onClick={this.onsetcomment}/>
                </div>

                <div>
                    <Time />
                </div>

                <div>
                    <Time2 />
                </div>


                <button className='homepage_button' onClick={this.minclick}>완료</button>

            </div>
        );
    }
}



export default Ceohomepage;