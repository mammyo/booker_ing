import React, { Component } from 'react';
import './Dashboard.css';
import Product_image from '../images/Product.PNG';
import Template_image from '../images/Template.png';
import Prepare_image from '../images/prepare.PNG';
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
                    <div className='dash_explain'>
                    <img src={Prepare_image} width="100%" height="100%"></img>
                    </div>
                    <div className='dash_explain_box'>
                        <div className='dash_explain2'>
                            <li>Use Booker</li>
                        </div>
                    </div>
                </div>



                <div className='dashbody2'>
                    <div className='dash_unit-box'>
                        <div className='dash_inner-title'>Today</div>
                        <div className='dash_inner-box'>1명</div>
                    </div>

                    <div className='dash_unit-box'>
                        <div className='dash_inner-title'>Week</div>
                        <div className='dash_inner-box'>6명</div>
                    </div>

                    <div className='dash_unit-box'>
                        <div className='dash_inner-title'>Month</div>
                        <div className='dash_inner-box'>30명</div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Dashboard;