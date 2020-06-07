import React, { Component } from 'react';
import './main.css'
import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import ImageSwitch from './imageToggle';
import CommentSwitch from './commentToggle';
class Ceohomepage extends Component {


    minclick = () => {
        alert("완료되었습니다.")


    }


    render() {
        return (
            <div className='service_body2_inner'>
                <div id="contents">
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

                    <button id='finish' onClick={this.minclick}>완료</button>

                </div>
            </div>
        );
    }
}



export default Ceohomepage;