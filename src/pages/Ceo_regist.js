import React, { Component } from 'react';
import './Ceo_regist.css';
import Noregist from './Noregist';
import {post} from 'axios';



class Ceo_regist extends Component {

    state = {
        busName: '',
        busNo: '',
    }

    close = () => {
        window.opener.location.href = "http://localhost:3000";
        window.close()
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
        })
        this.setState({
            busName: '',
           
        })
        
    }

    addCustomer =() => {
        const url = 'http://localhost:8080/jpa/ceo';
        const data = {
            busname: this.state.busName,
           
        };
        const header = {
            'Content-Type': 'application/json'
        };
        return post(url, data, header);
    }


    render() {

        return (
            <div className="login_cont">
                <div className="login_cont_cont">

                    <div className="login_logo">
                        <form onSubmit={this.handleSubmit}>
                            <h6>사업자 등록하기</h6>

                            <div className="login_id">
                                <input className="login_id_input" placeholder="등록할 사업자명"
                                    name="busName"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                            </div>


                            <div className="login_pwd">
                                <input className="login_pwd_input" placeholder="사업자 등록번호"
                                    name="busNo"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                                <button>중복</button>
                            </div>

                            <div className="login_check">
                                <button className="login_check_btn" onClick={this.close} type="submit">
                                    등록하기</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Ceo_regist;