import React, { Component } from 'react';
import './Noregist.css';
import Product_image from '../images/Product.PNG';
import noregist from './noregist.JPG';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Head from '../head/Head';
import './Ceoservice.css';
import Ceoservice_module from '../Servicelist/Ceoservice_module';





function Fruit({ name }) {

    return <div className='service_box_menu'>
                <div className='menu_img'>
                    <img src={Product_image} width="100%" height="100%"></img>
                </div>
                <div className='menu_name'>{name.name}</div>
                <div className='menu_price'>{name.price}</div>
                <div className='menu_explain'>{name.explain}</div>
            </div>
}


const temp = [
    {
    name: '떡볶이',
    price: '3000원',
    explain: '매움'
},
{
    name: '튀김',
    price: '2000원',
    explain: '깔끔한 튀김옷',
},
{
    name: '라면',
    price: '3000원',
    explain: '집 보다 맛있음',
},

{
    name: '김밥',
    price: '3000원',
    explain: '밥알보다 재료가 많음',
},
]




class Ceoservice extends Component {

    constructor() {
        super();
    }
    state = {
        name: ''
    }


    busregist = () => {
        window.open('http://localhost:3000/Ceoservice_module', 'ot', 'width=800, height=600, status=no,resizable=no');
    }



    render() {
        return (
            <div class="service">
                <div class="service_title">
                    서비스를 등록해주세요
                <button  onClick={this.busregist}> + </button>
                </div>



                <div className='service_box'>
                    {temp.map(element => <Fruit name={element} />)}
                    

                </div>




            </div>

        )
    }
};

export default Ceoservice;