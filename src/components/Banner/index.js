import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner.css';
import PhoneCall from '../../assets/img/phone-call.png';





class Banner extends Component {
    
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
                        <div className="col-md-6 d-flex flex-column align-items-center  mt-5  p-5 pb-0">
                            <h2 className="bannerTitle mt-5">Conheça nosso mais novo plano,</h2>
                            <h1 className="planTitle">SempreMais.</h1>
                            <p className="bannerTitle">Para saber mais sobre, acesse a página do plano.</p>
                            <Link to='/falemais' className="btn btn-outline-light linkButton mb-5">Conhecer mais.</Link>
                        </div>
                        <div className="col-lg-6 d-md-flex d-none justify-content-center mt-5 p-5 pb-0">
                            <img className="img-responsive" src={PhoneCall} width="30%" alt="Mulher falando no telefone."/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Banner;