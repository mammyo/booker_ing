import React, { Component } from 'react';
import './Dashboard.css';
import Product_image from '../images/Product.PNG';
import Template_image from '../images/Template.png';
import Prepare_image from '../images/prepare.PNG';
import dduck_image from '../images/뚱보.jpg';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Check from './Check';
import { Route, Switch } from 'react-router-dom';




class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '5',
            week: '10',
            month: '32',
        }

    }



    componentWillMount() {
        console.log("componentWillMount");
        const date = new Date();
        console.log(`${date.getMonth() + 1}` + '월');
        this.callApi(this.props.businessnumber, date.getMonth() + 1);
    }







    callApi = (numberdata, monthdata) => {
        fetch(`http://192.168.43.136/jpa/book/${numberdata}/${monthdata + 1}` + '월')
            .then(response => response.json())
            .then(data =>

                this.setState({
                    day: data.length,
                })

            )
            .catch(error => console.log(error));


    }




    render() {
        console.log(this.props.businessnumber);
        console.log(this.state.day);



        return (
            <div className='dash_box'>
                <div className='dash_title'>대쉬보드</div>
                <div className='dash'>
                    <div className='dashbody1'>
                        <div className='dash_second_title'>
                            <li>업체 전경</li>
                        </div>
                        <div className='dash_explain'>
                            <img src={dduck_image} width="100%" height="100%"></img>
                        </div>
                        <div className='dash_explain_box'>
                            <div className='dash_second_title'>
                                <li>메모</li>
                            </div>
                            <div className='dash_explain2'>
                                <h3>요일별 할인목록</h3>
                                <li>월 : 떡볶이 1인분 2천원</li>
                                <li>화 : 튀김 1인분 2천원</li>
                                <li>수 : 오뎅 1인분 2천원</li>
                                <li>목 : 라면 1인분 2천원</li>

                            </div>
                        </div>
                    </div>



                    <div className='dashbody2'>
                        <div className='dash_second_title'>
                            <li>일일 예약자</li>
                        </div>
                        <div className='dash_unit-box'>
                            <div className='dash_inner-title'>Today</div>
                            <div className='dash_inner-box'>{this.state.day}명</div>
                        </div>
                        <div className='dash_second_title'>
                            <li>주간 예약자</li>
                        </div>
                        <div className='dash_unit-box'>
                            <div className='dash_inner-title'>Week</div>
                            <div className='dash_inner-box'>{this.state.week}명</div>
                        </div>
                        <div className='dash_second_title'>
                            <li>월간 예약자</li>
                        </div>
                        <div className='dash_unit-box'>
                            <div className='dash_inner-title'>Month</div>
                            <div className='dash_inner-box'>{this.state.month}명</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Dashboard;