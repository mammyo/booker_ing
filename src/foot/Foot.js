import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import './Foot.css';
class Body extends Component {
    render() {
        return (
            <div id="footer">
                <div className="foot-container">create by jeonghoon</div>
            </div>
        );
    }
}

export default Body