import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Check from 'pages/Check';
import Env from 'pages/Env';
import NotFound from 'pages/NotFound';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div id='body'>
                
                    <Switch>
                        <Route path="/env/service" component={Env} />
                        <Route path="/dash/dash" component={Home} />
                        <Route component={NotFound} />
                    </Switch>

            </div>
        );
    }
}

export default Body