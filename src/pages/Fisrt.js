import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Noregist from '../pages/Noregist';
import App from '../shared/App';
import Head from 'head/Head';
import Body from 'body/Body';
import Foot from 'foot/Foot';
import Ceoservice_module from '../Servicelist/Ceoservice_module';

const First = ({ match }) => {

    const test = match.params.uname;
    console.log(test);
    return (

        <center>

            <Head uname={match.params.uname}/>
            <Body uname={match.params.uname}/>
            <Foot uname={match.params.uname}/>
        </center>

    );
}





export default First;