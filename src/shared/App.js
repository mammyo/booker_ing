import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, } from 'pages';
import Menu from 'components/Menu';
import Head from 'head/Head';
import Body from 'body/Body';
import Foot from 'foot/Foot';
import Fisrt from '../pages/Fisrt';
import Noregist from '../pages/Noregist';
import './App.css';



const a = 1;


class App extends Component {



    render() {
        if (a == 1) {
            return (
                <Switch>
                    <Route path="/dash" component={Fisrt} />
                    <Route exact path="/" component={Noregist} />
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