import React from 'react';
import Usertabs2 from '../module/tabs2/Usertabs2';
import './Env.css';
import Ceoservice from '../pages/Ceoservice';
import Ceohomepage from '../Servicelist/Ceohompage';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Prepare from './Prepare.js';







const Env = () => {

    return (
        <div className='service_body'>
            <div className='service_body1'>

                <Link exact to='/dash/env/service'><button>서비스</button></Link>

                <Link exact to='/dash/env/homepage'><button>홈페이지</button></Link>
                <Link exact to='/dash/env/prepare'><button>???</button></Link>
            </div>

            <div className='service_body2'>
                <Switch>
                    <Route path="/dash/env/service" component={Ceoservice} />
                    <Route exact path="/dash/env/homepage" component={Ceohomepage} />
                    {/* <Route exact path="/list" component={Check} /> */}
                </Switch>


                <Route exact path="/dash/env/prepare" component={Prepare} />


            </div>

        </div>
    );
};

export default Env;