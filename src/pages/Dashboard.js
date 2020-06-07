import React, { Component } from 'react';
import './Dashboard.css';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Check from './Check';
import { Route, Switch } from 'react-router-dom';




class Dashboard extends Component {

    // state = {
    //     email: '',
    // }

    // componentDidMount() {
    //     this.callApi();

    // }

    // callApi = () => {
    //     fetch('api/users')
    //         .then(response => response.json())
    //         .then(data =>
    //             this.setState({
    //                 email: data[0].id,
    //             })
    //         )
    //         .catch(error => console.log(error));

    //     console.log(this.state.email);
    // }
    state = {
        image:'',
        name:'',
        semicategory:'',
        explaination:''
    }

    componentDidMount(){
        this.callApi()
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/main_category');
        const body = await response.json();
        this.setState({
            image: body[0].image,
            name: body[0].name,
            semiCategory: body[0].semiCategory,
            explaination: body[0].explaination,
        });
        console.log(this.state.name);
        return body;
    }



    render() {
        return (
            <div className='dash'>

                <div className='dashbody1'>
                    <div className='dash_explain'>업체사진
                    
                        <p>{this.state.name}</p>
                        <p>{this.state.semiCategory}</p>
                        <p>{this.state.explaination}</p>
                    </div>
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


export default Dashboard;