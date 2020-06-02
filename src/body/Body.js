import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About} from 'pages';
import Check from 'pages/Check';
import Service from 'pages/Service';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div id ='body'>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/check" component={Check}/>
                    <Route exact path="/service" component={Service}/>
                    <Route exact path="/about" component={About}/>
                </Switch>  
            </div>
        );
    }
}

export default Body