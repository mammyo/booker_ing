import React, { Component } from 'react';
import './Ceo_regist.css';
import Noregist from './Noregist';



class Ceo_regist extends Component {
    state={
            Name:'',
    }

    close=()=>{


        //window.close()
    }
    render() {

        return (
            <div className="login_cont">
                <div className="login_cont_cont">

                    <div className="login_logo">

                        <h6>사업자 등록하기</h6>
                        
                        <div className="login_id">
                            <input className="login_id_input" value={this.state.Name}  placeholder="등록할 사업자명" />
                        </div>


                        <div className="login_pwd">
                            <input className="login_pwd_input" placeholder="사업자 등록번호" />
                            <button>중복</button>
                        </div>

                        <div className="login_check">
                            <button className="login_check_btn" onClick={this.close()}>등록하기</button>
                        </div>
                    </div>


                </div>




            </div>
        );
    }
}

export default Ceo_regist;