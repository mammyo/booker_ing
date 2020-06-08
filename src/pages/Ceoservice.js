import React, { Component } from 'react';
import './Noregist.css';
import noregist from './noregist.JPG';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Head from '../head/Head';
import './Ceoservice';
import Ceoservice_module from '../Servicelist/Ceoservice_module';





function Fruit({ name }) {
    
    return <button><Link exact to='/dash/dash' > {name}</Link></button>
}


const temp = [{
    name: '민이 분식'
},
{ name: 'Min피시방' },
]




class Ceoservice extends Component {

    constructor(){
        super();
    }
    state={
        name : ''
    }


    busregist=()=>{
        window.open('http://localhost:3000/Ceoservice_module','ot','width=800, height=600, status=no,resizable=no');
    }

    
    
    render() {
        return (
            <div class="service_title">
                <div class="content">

                    <h6>서비스를 등록해주세요</h6>
                    <div className='choose'>
                        {temp.map(element => <Fruit name={element.name} />)}
                        <button style={{width :"100px"}} onClick={this.busregist}> + </button>
                        
                    </div>

                </div>
                

            </div>

        )
    }
};

export default Ceoservice;