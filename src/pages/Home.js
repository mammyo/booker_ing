import React, { Component } from 'react';
import Usertabs from '../module/tabs/Usertabs.js';
import './Home.css';
import { NavLink } from 'react-router-dom';
import UserTabs from '../module/tabs/Usertabs.js';
import { Link } from 'react-router-dom';
import Check from './Check';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Prepare from './Prepare.js';
import Notice from './Notice.js';



class Home extends Component {
    constructor(props){
        super(props);
    }

    

    render() {
        console.log(this.props.subname);
        console.log(this.props.busno);
        return (
            <div className='home_body'>
                <div className='home_body1'>
                    <Link exact to={`/${this.props.subname}/dash/dash`}><button>대쉬보드</button></Link>
                    <Link exact to={`/${this.props.subname}/dash/list`}><button>예약자리스트</button></Link>
                    

                </div>

                <div className='home_body2'>
                    <Switch>
                        <Route path={`/${this.props.subname}/dash/dash`} render={() => <Dashboard businessnumber={this.props.busno}/>}/>
                        <Route path={`/${this.props.subname}/dash/list`} component={Check} />
                        <Route path={`/${this.props.subname}/dash/prepare`} component={Prepare} />
                        <Route path={`/${this.props.subname}`} component={Notice} />
                    </Switch>
                </div>
                

            </div>
        );
    }
};

export default Home;