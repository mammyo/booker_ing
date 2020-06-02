import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';
import Head from 'head/Head';
import Body from 'body/Body';
import Foot from 'foot/Foot';
class App extends Component {
    render() {
        return (
            <div>
                <Head/>

                <Body/>
                <Foot/>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;