import React, { Component } from 'react';
import Usertabs2 from '../module/tabs2/Usertabs2';
import './Env.css';
import Ceoservice from '../pages/Ceoservice';
import Ceohomepage from '../Servicelist/Ceohompage';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Prepare from './Prepare.js';
import Template from './Template.js';




class Env extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='service_body'>
                <div className='service_body1'>

                    <Link exact to={`/${this.props.subname}/env/service`}><button>서비스</button></Link>

                    <Link exact to={`/${this.props.subname}/env/homepage`}><button>홈페이지</button></Link>
                    <Link exact to={`/${this.props.subname}/env/template`}><button>템플릿</button></Link>
                    <Link exact to={`/${this.props.subname}/env/prepare`}><button>???</button></Link>
                </div>

                <div className='service_body2'>
                    <Switch>
                        <Route path={`/${this.props.subname}/env/service`} component={Ceoservice} />
                        <Route exact path={`/${this.props.subname}/env/homepage`} component={Ceohomepage} />
                        <Route exact path={`/${this.props.subname}/env/template`} component={Template} />
                        {/* <Route exact path="/list" component={Check} /> */}
                    </Switch>


                    <Route exact path={`/${this.props.subname}/env/prepare`} component={Prepare} />


                </div>

            </div>
        );
    }
};

export default Env;