import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PlanBanner from '../../components/PlanBanner';
import './falemais.css';
import Problem from '../../assets/img/problem.png';
import Solution from '../../assets/img/solution.png';
import Simulation from '../../components/Simulation';

class FaleMais extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header/>
                <PlanBanner/>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <h2 className="planGuide">Como funciona o plano SempreMais?</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 d-flex justify-content-center">
                            <p className="text-center mt-5">
                                Normalmente, os clientes BrTelefonia podem fazer ligações de uma cidade para outra pagando uma tarifa fixa por minuto, com um preço pré-definido de acordo com o DDD de origem e o DDD de destino.
                            </p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={Problem} width="40%" alt=""/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={Solution} width="40%" alt=""/>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <p className="text-center mt-5">
                                Agora, pensando em facilitar a vida de nossos clientes, criamos os planos SempreMais. Como o novo produto da BrTelefonia, o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes têm um acréscimo de 10% sobre a tarifa normal do minuto. 
                            </p>
                        </div>
                    </div>
                </div>
                <Simulation/>
                
                <Footer/>
            </div>
        );
    }
}

export default FaleMais;