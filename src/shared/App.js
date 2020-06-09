import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, } from 'pages';
import Menu from 'components/Menu';
import Head from 'head/Head';
import Body from 'body/Body';
import Foot from 'foot/Foot';
import Fisrt from '../pages/Fisrt';
import Noregist from '../pages/Noregist';
import Ceo_regist from '../pages/Ceo_regist';
import Env from '../pages/Env';
import './App.css';
import Ceoservice_module from '../Servicelist/Ceoservice_module';
import Postcode from '../Servicelist/kakaoAddress';

const a = 1;


class App extends Component {

    onSearchSubmit(text) {
    	console.log(text);
    }



    render() {
        if (a == 1) {
            return (
                <Switch>
                    <Route path="/address" component={Postcode} />
                    <Route path="/Ceo_regist" component={Ceo_regist} />
                    <Route path="/Ceoservice_module" component={Ceoservice_module} />
                    <Route path="/:uname" component={Fisrt} />
                    <Route path="/" component={Noregist} />
                    
                </Switch>
            );
        }

        else {
            return (
                <Noregist />
            );
        }



        // return (
        //     <center>
        //         <Head/>
        //         <Body/>
        //         <Foot/>
        //     </center>
        // );
    }
}

export default App;