import React from 'react';
import Usertabs from '../module/tabs/Usertabs.js';
import './Home.css';
import { NavLink } from 'react-router-dom';
import UserTabs from '../module/tabs/Usertabs.js';



const Home = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };
    return (
        <div id='home_body'>
        <div className='home-container'>
                {/* <div className='inner-container'>
                    <div className='inner-title'><li>일일 예약자 수 </li></div>
                    <div className='inner-box'>123123</div>
                </div>

                <div className='inner-container'>
                    <div className='inner-title'><li>주간 예약자 수 </li></div>
                    <div className='inner-box'>하이요</div>
                </div>

                <div className='inner-container'>
                    <div className='inner-title'><li>달 예약자 수 </li></div>
                    <div className='inner-box'>하이요</div>
                </div>

                <div className='inner-container'>
                    <div className='inner-title'><li>일일 예약자 수 </li></div>
                    <div className='inner-box'>하이요</div>
                </div> */}
        </div>
        </div>
    );
};

export default Home;