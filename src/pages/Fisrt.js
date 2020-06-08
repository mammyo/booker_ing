import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Noregist from '../pages/Noregist';
import App from '../shared/App';
import Head from 'head/Head';
import Body from 'body/Body';
import Foot from 'foot/Foot';
import Ceoservice_module from '../Servicelist/Ceoservice_module';

class First extends Component {
    render() {
        return(
            
        <center>
            <Head />
            <Body />
            <Foot />
        </center>
       
        
        )
    }

}





export default First;