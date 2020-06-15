import React, { Component } from 'react';

import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import Menuimageup from './Menuimageup';
import CommentSwitch from './commentToggle';
import ImageUpload from './ImageUpload.js';
import './Ceoservice_module.css';
import Comment from './comment.js';
import { post } from 'axios';


class Ceoservice_module extends Component {

    
    state={
        menuname:'',
        menuprice:'',
        menuimg:'',
        comment:'',
    }


    minclick = () => {
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            category: '',
            busName: '',
            busAddress: '',
            busNo: '',

        })
        alert("서비스 등록 \n완료되었습니다.")
        window.close();

    }


    addCustomer = () => {
        const url = 'http://59.29.224.191:8080/api/best_menu';
        const data = {
            serviceName: this.state.menuname,
            servicePrice: this.state.menuprice,
            storeNumber: this.state.menuimg,
            serviceComment: this.state.comment,

        };
        const header = {
            'Content-Type': 'application/json'
        };
        return post(url, data, header);
    }

    uploadmenuname = (text) => {
        this.setState({
            menuname: text,
        })
        
    }

    uploadmenuprice =(text)=>{
        this.setState({
            menuprice: text,
        })

    }

    uploadmenuimg =(text)=>{
        this.setState({
            menuimg: text,
        })
    }

    uploadmenucomment =(text)=>{
        this.setState({
            menucomment: text,
        })
    }

   
    
        


    render() {
        console.log(this.state);
     
        return (
            <div className='mou_box'>
                <div className='mou_title'>
                    서비스 등록
                </div>

                <div className='module_box'>
                    <div>
                        <MenuName name={this. uploadmenuname}/>
                    </div>
                    <div>
                        <MenuPrice price={this.uploadmenuprice} />
                    </div>
                    <div>
                        <Menuimageup   img={this.uploadmenuimg} />
                    </div>
                    <div>
                        <Comment  comment={this.uploadmenucomment}/>
                    </div>
                    <button id='finish' onClick={this.minclick}>완료</button>
                </div>
            </div>


        );
    }
}



export default Ceoservice_module;