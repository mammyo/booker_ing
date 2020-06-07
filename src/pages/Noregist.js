import React, { Component } from 'react';
import './Noregist.css';
import noregist from './noregist.JPG';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Head from '../head/Head';



function Name(name){
     console.log(name)
}


function Fruit({ name }) {
    return <button onClick={Name(name)}><Link exact to='/dash/dash'> {name}</Link></button>
}


const temp = [{
    name: '민이 분식'
},
{ name: 'Min피시방' },
]




class Noregist extends Component {
    state={
        name : ''
    }


    render() {
        return (
            <div class="img">
                <div class="content">

                    <h6>등록한 사업지를 선택해주세요</h6>
                    <div className='choose'>
                        {temp.map(element => <Fruit name={element.name} />)}
                        <button style={{width :"100px"}}> + </button>
                    </div>

                </div>
                <div class="img-cover"></div>

            </div>

        )
    }
};

export default Noregist;