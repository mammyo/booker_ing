import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Check from 'pages/Check';
import Env from 'pages/Env';
import NotFound from 'pages/NotFound';
import './Body.css';

class Body extends Component {
    constructor(props){
        super(props);
    }
        

    render() {
        return (
            <div id='body'>
                
                    <Switch>
                        <Route path={`/${this.props.uname}/env`} render={() => <Env subname={this.props.uname} />}/> />
                        <Route path={`/${this.props.uname}`} render={() => <Home subname={this.props.uname} />}/> />

                        <Route component={NotFound} />
                    </Switch>

            </div>
        );
    }
    
}

export default Body