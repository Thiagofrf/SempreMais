import React, { Component } from 'react';
import './planbanner.css';
import PlanImage from '../../assets/img/guy-phone.png'


class PlanBanner extends Component {
    
    constructor(props){
        super(props);
        this.state = {

        }
    }

    

    render(){
        return(
            <div className="main shadow">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 d-flex flex-column justify-content-center">
                            <h3 className="align-self-center planName">BrTelefonia SempreMais</h3>
                            <h2 className="align-self-end planDesc">O plano pra quem quer falar mais e pagar menos.</h2>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center mt-5">
                            <img src={PlanImage} width="45%" alt=""/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default PlanBanner;