import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './simulationbanner.css';
import Offer from '../../assets/img/offer.png'

class SimulationBanner extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column align-items-center  mt-5  p-5 pb-0">
                            <h2 className="bannerTitle mt-5">Faça a simulação do nosso plano,</h2>
                            <h1 className="planTitle">SempreMais.</h1>
                            <p className="bannerTitle">Para saber quanto você economiza com ligações assinando nosso novo plano, clique no botão abaixo e faça sua simulação.</p>
                            <Link to='/falemais' className="btn btn-outline-light linkButton mb-5">Quero fazer a simulação!</Link>
                        </div>
                        <div className="col-lg-6 d-md-flex d-none justify-content-center mt-5 p-5 mb-5 pb-0">
                            <img src={Offer} width="30%" alt="Imagem de desconto"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SimulationBanner;