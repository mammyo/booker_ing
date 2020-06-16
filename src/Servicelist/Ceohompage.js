import React, { Component } from 'react';
import './Ceohompage.css'
import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import ImageSwitch from './imageToggle';
import CommentSwitch from './commentToggle';
import CouponToggle from './couponToggle';
import ImageUpload2 from './ImageUpload2.js';
import ImageUpload3 from './ImageUpload3.js';
import ImageUpload4 from './ImageUpload4.js';
import ImageUpload from './ImageUpload.js';
import Comment2 from './comment2.js';
import TimePicker from 'react-time-picker';
import { post } from 'axios';
import { TextField, Button } from "@material-ui/core"
class Ceohomepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
            coment: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            open:'',
            close:'',

        }
    }

   
    



    minclick = () => {
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            coment: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            open:'',
            close:'',

        })
    
    }


    addCustomer = () => {
        const url = `http://http://59.29.224.191:8080/api/store_list/${this.props.businessnumber}`;
        const data = {
            
            storeImage1: this.state.img1,
            storeImage2: this.state.img2,
            storeImage3: this.state.img3,
            storeImage4: this.state.img4,
            store_open_time: this.state.open,
            tore_end_time: this.state.close,
            tore_explanation: this.state.comment,

        };
        const header = {
            'Content-Type': 'application/json'
        };
        return post(url, data, header);
    }


    uploadpic1 = (text) => {
        // this.setState({
        //     img1: 
        // })
    }

    uploadpic2 = (text) => {
        console.log(text);
    }

    uploadpic3 = (text) => {
        console.log(text);
    }

    uploadpic4 = (text) => {
        console.log(text);
    }
    onChange = time => {
        this.setState({ time })

    };

    handleClick = () => {
        console.log(this.state);

    };


    uploadopen = (text)=>{
        this.setState({
            open: text,
        })
    }

    uploadclose = (text)=>{
        this.setState({
            close: text,
        })
    }


    uploadcomment =(text)=>{
        this.setState({
            comment: text,
        })
    }





    render() {
        console.log(this.props.businessnumber);
        console.log(this.state);

        return (
            <div className='hompi_box'>
                <div className='hompi_title'>
                    홈페이지 등록설정
                </div>

                <div className='homepage_box'>
                    <div>
                        <div className="switch-container">
                            <h3>이미지 등록 </h3>
                            <h4>-홈페이지 3개</h4>
                            <ImageUpload pic1={this.uploadpic1} />
                            <ImageUpload2 pic2={this.uploadpic2} />
                            <ImageUpload3 pic3={this.uploadpic3} />
                            <h4>-예약페이지 1개</h4>
                            <ImageUpload4 pic4={this.uploadpic4} />
                        </div>
                    </div>
                    <div>
                        <div className="switch-container">
                            <h3>업체 설명</h3>

                            <Comment2 comment={this.uploadcomment}/>

                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>-오픈 시간</h3>
                            <Time time={this.uploadopen}/>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>-마감 시간</h3>
                            <Time2 time={this.uploadclose}/>

                        </div>
                    </div>


                    <button className='homepage_button' onClick={this.minclick}>완료</button>

                </div>
            </div>
        );
    }
}



export default Ceohomepage;



// onsetimage = (text) => {
//     this.setState({
//         setimage: (text == false) ? "O" : "X",
//     })
// }

// onsetcomment = (text) => {
//     this.setState({
//         setcommnet: (text == false) ? "O" : "X",
//     })
// }

// onsecalendar = (text) => {
//     this.setState({
//         setcalendar: (text == false) ? "O" : "X",
//     })
// }
