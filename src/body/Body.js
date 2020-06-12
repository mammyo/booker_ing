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
        this.state = {
            businessno:'',
        }
    }




    componentDidMount() {
        this.callApi();
        

    }

    callApi = () => {
        fetch(`http://59.29.224.90:8080/jpa/ceo/${this.props.uname}`)
            .then(response => response.json())
            .then(data => 
                this.setState({
                    businessno :data[0].busnumber,
                })
                
                /*
                console.log(data);
                var ceolist=[];
                ceolist = data.map(num =>{return num.busname})
                this.setState({
                    Ceolist :data.map(num =>{return num.busname}),
                })
                */
                
            )
            .catch(error => console.log(error))

    }
        

    render() {
        console.log(this.state.businessno);
        return (
            <div id='body'>
                
                    <Switch>
                        <Route path={`/${this.props.uname}/env`} render={() => <Env subname={this.props.uname} />}/>
                        <Route path={`/${this.props.uname}`} render={() => <Home subname={this.props.uname} busno={this.state.businessno} />}/>

                        <Route component={NotFound} />
                    </Switch>

            </div>
        );
    }
    
}

export default Body