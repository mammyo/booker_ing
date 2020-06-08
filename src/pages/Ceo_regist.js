import React, { Component } from 'react';
import './Ceo_regist.css';
import Noregist from './Noregist';



class Ceo_regist extends Component {

    state = {
        busName: '',
        busNo: '',
    }

    close = () => {
        window.close()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);

        
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })
        
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
                                <button className="login_check_btn" onClick={this.close} type="submit">등록하기</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Ceo_regist;