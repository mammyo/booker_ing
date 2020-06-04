import React, { Component } from 'react';
import './Dashboard.css';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Check from './Check';
import { Route, Switch } from 'react-router-dom';





export default class Dashboard extends Component {

    state = {
        email: '',
    }

    componentDidMount() {
        this.callApi();

    }

    callApi = () => {
        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    email: data[0].id,
                })
            )
            .catch(error => console.log(error));

        console.log(this.state.email);
    }

    render() {
        return (
            <div className='dash'>

                <div className='dashbody1'>
                    <div className='dash_explain'>업체사진</div>
                    <div className='dash_explain_box'>
                        <div className='dash_explain2'>업체설명</div>
                    </div>
                </div>



                <div className='dashbody2'>
                    <div className='dash_unit-box'>
                        <div className='dash_inner-title'>Today</div>
                        <div className='dash_inner-box'>1명</div>
                    </div>

                    <div className='dash_unit-box'>
                        <div className='dash_inner-title'>Week</div>
                        <div className='dash_inner-box'>1명</div>
                    </div>

                    <div className='dash_unit-box'>
                        <div className='dash_inner-title'>Month</div>
                        <div className='dash_inner-box'>1명</div>
                    </div>
                </div>
            </div>
        );
    }
};
