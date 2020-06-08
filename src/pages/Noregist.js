import React, { Component } from 'react';
import './Noregist.css';
import noregist from './noregist.JPG';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Head from '../head/Head';
import Ceo_regist from './Ceo_regist';




function Fruit({ name }) {
    
    return <button><Link exact to='/dash' > {name}</Link></button>
}


const temp = [{
    name: '민이 분식'
},
{ name: 'Min피시방' },
]




class Noregist extends Component {

    constructor(){
        super();
    }
    state={
        name : ''
    }


    busregist=()=>{
        window.open('Ceo_regist','ot','width=800, height=600, status=no,resizable=no');
    }

    handleCreate = (data) => {
        console.log(data);
      }

    

    render() {
        
        return (
            <div class="img">
                <div class="content">

                    <h6>등록한 사업지를 선택해주세요</h6>
                    <div className='choose'>
                        {temp.map(element => <Fruit name={element.name} />)}
                        <button style={{width :"100px"}} onClick={this.busregist}> + </button>
                        {/* <Ceo_regist onCreate={this.handleCreate}/> */}
                    </div>

                </div>
                <div class="img-cover"></div>

            </div>

        )
    }
};

export default Noregist;