import React from 'react';
import Usertabs2 from '../module/tabs2/Usertabs2';
import './Service.css';
import CeoRegister from '../Servicelist/CeoRegister';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Prepare from './Prepare.js';

function minclick() {
    alert("완료되었습니다.")


}


const Service = () => {

    return (
        <div className='service_body'>
            <div className='service_body1'>
                <Link exact to='/service/service'><button>서비스</button></Link>
                <Link exact to='/list'><button>설정</button></Link>
                <Link exact to='/service/prepare'><button>???</button></Link>
            </div>

            <div className='service_body2'>


                <Switch>
                    <Route exact path="/service/service" component={CeoRegister} />
                    {/* <Route exact path="/list" component={Check} /> */}
                </Switch>


                <Route exact path="/service/prepare" component={Prepare} />


            </div>

        </div>
    );
};

export default Service;