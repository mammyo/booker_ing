import React, { Component } from 'react';
import './main.css'
import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import ImageSwitch from './imageToggle';
import CommentSwitch from './commentToggle';
import './Ceoservice_module.css';
class Ceoservice_module extends Component {


    minclick = () => {
        alert("서비스 등록 \n완료되었습니다.")
        window.close();

    }


    render() {
        return (
           
                <div className='module_box'>

                    <div>
                        <MenuName />
                    </div>

                    <div>
                        <MenuPrice />
                    </div>

                    <div>
                        <ImageSwitch />
                    </div>

                    <div>
                        <CommentSwitch />
                    </div>


                    <button id='finish' onClick={this.minclick}>완료</button>


                </div>
           

        );
    }
}



export default Ceoservice_module;