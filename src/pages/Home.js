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





class Home extends Component {

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
            <div className='home_body'>
                <div className='home_body1'>
                    <Link exact to='/dash'><button>대쉬보드</button></Link>
                    <Link exact to='/list'><button>예약자리스트</button></Link>
                    <Link exact to='/prepare'><button>???</button></Link>

                </div>

                <div className='home_body2'>
                    <Switch>
                        <Route exact path="/dash" component={Dashboard} />
                        <Route exact path="/list" component={Check} />
                        <Route exact path="/prepare" component={Prepare} />
                    </Switch>
                </div>


            </div>
        );
    }
};

export default Home;