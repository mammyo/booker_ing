import React, { Component } from 'react';
import './Ceo_regist.css';
import Noregist from './Noregist';
import { post } from 'axios';
import Postcode from '../Servicelist/kakaoAddress';




class Ceo_regist extends Component {

    state = {
        category: '',
        busName: '',
        busAddress: '',
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

    hadleAddress = (e) => {
        this.setState({
            busAddress: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        // e.preventDefault()
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

        this.close()
        console.log(this.state);

    }

    addCustomer = () => {
        const url = 'http://59.29.224.191:8080/api/store_list';
        const data = {
            store_name: this.state.busName,
            store_address: this.state.busAddress,
            storeNumber: this.state.busNo,
            category: this.state.category,

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

    address = () => {
        window.open('address', 'address', 'width=600, height=600');
    }

    addressalert = (text) => {
        alert(text);
    }

    receiveMessage = (address) => {
        this.setState({
            busAddress: address.data
        })
    }

    componentDidMount() {
        window.addEventListener("message", this.receiveMessage, false);
    }

    render() {
        console.log(this.state);
        return (
            <div className="login_cont">
                <div className="login_cont_cont">
                    <div className="login_logo">

                        <h6>사업자 등록하기</h6>

                        <div className='radio'>
                            <input type="radio" value="음식점" checked={this.state.category === '음식점'} onChange={this.optionchange} />
                            <button value="음식점" onClick={this.optionchange}>음식점</button>

                            <input type="radio" value="미용실" checked={this.state.category === '미용실'} onChange={this.optionchange} />
                            <button value="미용실" onClick={this.optionchange}>미용실</button>

                            <input type="radio" value="헬스장" checked={this.state.category === '헬스장'} onChange={this.optionchange} />
                            <button value="헬스장" onClick={this.optionchange}>헬스장</button>

                            <input type="radio" value="PC방" checked={this.state.category === 'PC방'} onChange={this.optionchange} />
                            <button value="PC방" onClick={this.optionchange}>PC방</button><br></br>

                            <input type="radio" value="필라테스" checked={this.state.category === '필라테스'} onChange={this.optionchange} />
                            <button value="필라테스" onClick={this.optionchange}>필라테스</button>

                            <input type="radio" value="볼링장" checked={this.state.category === '볼링장'} onChange={this.optionchange} />
                            <button value="볼링장" onClick={this.optionchange}>볼링장</button>

                            <input type="radio" value="렌트카" checked={this.state.category === '렌트카'} onChange={this.optionchange} />
                            <button value="렌트카" onClick={this.optionchange}>렌트카</button>

                            <input type="radio" value="수영장" checked={this.state.category === '수영장'} onChange={this.optionchange} />
                            <button value="수영장" onClick={this.optionchange}>수영장</button>
                        </div>

                        <div className="login_id">
                            <input className="login_id_input" placeholder="등록할 사업자명"
                                name="busName"
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </div>

                        <div className="login_address">
                            <input id="login_address_input" placeholder="주소 검색"
                                name="busAddress"

                                value={this.state.address}
                                onChange={this.hadleAddress} />
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
                            <button className="login_check_btn" onClick={this.handleSubmit}>
                                등록하기</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Ceo_regist;

//<input type="text" id="receiveFromChild" value=""/>