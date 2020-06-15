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
import Comment from './comment.js';
import TimePicker from 'react-time-picker';
import { post } from 'axios';
import { TextField, Button } from "@material-ui/core"
class Ceohomepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            title: '',
            contents: '',
            fileName: '',
            img1: '',
            img2: '',
            img3: '',
            img4: ''
        }
    }

    // state={}
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer(this.state.file)
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            file: null,
            title: '',
            contents: '',
            fileName: ''

        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })

    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

    }

    addCustomer = () => {
        const url = `http://59.29.224.191:8080/api/store_list`;
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('title', this.state.title);
        formData.append('contents', this.state.contents);

        const header = {
            'Content-Type': 'multipart/form-data'
        };
        console.log(this.state.file);
        console.log(this.state.title);
        console.log(this.state.contents);
        console.log(formData);
        return post(url, formData, header);
    }



    minclick = () => {
        alert("완료되었습니다.")
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





    render() {
        console.log(this.props.businessnumber);

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

                    <form onSubmit={this.handleFormSubmit}>

                        <br /><br />
                        이미지<br /><TextField label="이미지" type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <br /><br />
                        title<br /><TextField label="title" type="text" name="title" value={this.state.title} onChange={this.handleValueChange} /><Button variant="contained" color="primary" onClick={this.handleCheckId}>중복확인</Button>
                        <br /><br />
                        content<br /><TextField label="contents" type="text" name="contents" value={this.state.contents} onChange={this.handleValueChange} />
                        <br /><br />
                        <Button variant="contained" color="primary" type="submit">추가하기</Button>
                    </form>


                    <div>
                        <div className="switch-container">
                            <h3>업종 설명</h3>

                            <Comment />

                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>-오픈 시간</h3>
                            <TimePicker
                                onChange={this.onChange}
                                value={this.state.time}
                            />
                            <button className='homepage_click_bt' onClick={this.handleClick} >click</button>

                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>-마감 시간</h3>
                            <TimePicker
                                onChange={this.onChange}
                                value={this.state.time}
                            />
                            <button className='homepage_click_bt' onClick={this.handleClick} >click</button>

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
