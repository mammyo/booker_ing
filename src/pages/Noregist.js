import React, { Component } from 'react';
import './Noregist.css';
import noregist from './noregist.JPG';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Head from '../head/Head';
import Ceo_regist from './Ceo_regist';




function Fruit({ name,number }) {
return <button><Link exact to={`/${name}/${number}`}>{name} {number}</Link></button>
}


class Noregist extends Component {

    state = {
        Ceolist: [],
    }



    componentDidMount() {
        this.callApi();

    }

    callApi = () => {
        fetch('http://59.29.224.191:8080/api/store_list')
            .then(response => response.json())
            .then(data => 
                this.setState({
                    Ceolist :data.map(num =>{return [num.store_name,num.storeNumber]}),
                })
                
                /*
                console.log(data);
                var ceolist=[];
                ceolist = data.map(num =>{return num.busname})
                this.setState({
                    Ceolist :data.map(num =>{return num.busname}),
                })
                */
                
            )
            .catch(error => console.log(error))
           

    }


    busregist = () => {
        window.open(`Ceo_regist/${this.props.match.params.uid}`, 'ot', 'width=800, height=600');
    }

    handleCreate = (data) => {
        console.log(data);
    }



    render() {
        console.log(this.state.Ceolist);
        console.log(this.state.Ceolist);
        const { params} = this.props.match;
        console.log(params.uid);
        return (
            <div className="img">
                <div className="content">
                    <h6>등록한 사업지를 선택해주세요</h6>
                    <div className='choose'>
                        {this.state.Ceolist.map(element => <Fruit name={element[0]} number={element[1]} />)}
                        <button style={{ width: "100px" }} onClick={this.busregist}> + </button>
                        {/* <Ceo_regist onCreate={this.handleCreate}/> */}
                    </div>

                </div>
                <div class="img-cover"></div>

            </div>

        )
    }
};

export default Noregist;