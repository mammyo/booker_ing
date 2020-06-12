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
    constructor(props){
        super(props);
        this.state = {
            businessnumber:'',
            day: '',
        }

    }

    componentWillMount(){
        console.log("componentWillMount");
        this.setState({
            businessnumber: this.props.businessnumber
        })
        this.callApi(this.props.businessnumber);
      }

    
    
    

    

    callApi = (data) => {
        fetch(`http://59.29.224.90:8080/jpa/book/${data}`)
            .then(response => response.json())
            .then(data =>
                
                    this.setState({
                        day : data.length,
                    })
                
            )
            .catch(error => console.log(error));

        console.log(this.state.day);
    }
    



    render() {
        console.log(this.props.businessnumber);
        console.log(this.state.day);
        
        
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
                        <div className='dash_inner-box'>{this.state.day}명</div>
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