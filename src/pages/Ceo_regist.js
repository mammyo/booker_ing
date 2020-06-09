import React, { Component } from 'react';
import './Ceo_regist.css';
import Noregist from './Noregist';
import { post } from 'axios';
import Postcode from '../Servicelist/kakaoAddress';


class Ceo_regist extends Component {

    state = {
        category: '',
        busName: '',
        busAddress:'',
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

    addCustomer = () => {
        const url = 'http://localhost:8080/jpa/ceo';
        const data = {
            busname: this.state.busName,

        };
        const header = {
            'Content-Type': 'application/json'
        };
        return post(url, data, header);
    }

    optionchange = (e) => {
        this.setState({
            category: e.target.value
        });

    }

    address=() => {
        window.open('address', 'address', 'width=500, height=600');
    }

    


    render() {
        console.log(this.state.category);
        return (
            <div className="login_cont">
                <div className="login_cont_cont">

                    <div className="login_logo">
                        <form onSubmit={this.handleSubmit}>
                            <h6>사업자 등록하기</h6>



                            <div className='radio'>

                                <input type="radio" value="음식점" checked={this.state.category === '음식점'} onChange={this.optionchange} />
                                <button value="음식점" onClick={this.optionchange}>음식점</button>

                                <input type="radio" value="미용실" checked={this.state.category === '미용실'} onChange={this.optionchange} />
                                <button value="미용실" onClick={this.optionchange}>미용실</button>

                                <input type="radio" value="헬스장" checked={this.state.category === '헬스장'} onChange={this.optionchange} />
                                <button value="헬스장" onClick={this.optionchange}>헬스장</button>

                                <input type="radio" value="PC방" checked={this.state.category === 'PC방'} onChange={this.optionchange} />
                                <button value="PC방" onClick={this.optionchange}>PC방</button>

                            </div>



                            <div className="login_id">
                                <input className="login_id_input" placeholder="등록할 사업자명"
                                    name="busNayme"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                            </div>


                            <div className="login_pwd">
                                <input className="login_pwd_input" placeholder="주소 검색"
                                    name="busAddress"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                                    <button onClick={this.address}>검색</button>
                            </div>

                            {/* <div>
                                <Postcode/>
                            </div> */}

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