import React, { Component } from 'react';
import './simulation.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ddd from '../../utilities/ddd';
import planos from '../../utilities/planos';

class Simulation extends Component {
    constructor(props){
        super(props);
        this.state = {
            ddd_list: ddd,
            planos_list: planos,
            call_time: '',
            origin_ddd: '',
            destination_ddd: '',
            selected_plan: '',
            time: '',
            with_call_price: '',
            without_call_price: ''
        }

        this.myChangeHandlerOrigin = this.myChangeHandlerOrigin.bind(this);
        this.myChangeHandlerPlan = this.myChangeHandlerPlan.bind(this);
        this.myChangeHandlerTime = this.myChangeHandlerTime.bind(this);
        this.myChangeHandlerDestination = this.myChangeHandlerDestination.bind(this);
        this.sendSimulation = this.sendSimulation.bind(this);
    }

    

    myChangeHandlerOrigin = (event) => {
        this.setState({
            origin_ddd: event.target.value
        })
    }

    myChangeHandlerDestination = (event) => {
        if(event.target.value === this.state.origin_ddd){
            alert('O DDD de destino não pode ser igual o DDD de origem.');
            event.target.value = 2;
        }
        this.setState({
            destination_ddd: event.target.value
        })
    }

    myChangeHandlerTime = (event) => {
        if(event.target.value > 0){
            this.setState({
                time: event.target.value
            })
        } else {
            alert('O valor em minutos deve ser maior que zero.');
            event.target.value = 0;          
        }
        
    }

    myChangeHandlerPlan = (event) => {
        this.setState({
            selected_plan: event.target.value
        })
    }

    sendSimulation(event){
        if(this.state.time !== '' && this.state.origin_ddd !== '' && this.state.destination_ddd !== '' && this.state.selected_plan !== '' ){
            let time = parseInt(this.state.time);
            let origin_ddd = parseInt(this.state.origin_ddd);
            let destination_ddd = parseInt(this.state.destination_ddd);
            let selected_plan = parseInt(this.state.selected_plan);
            if(origin_ddd === 1){
                if(destination_ddd === 2){
                    this.setState({
                        without_call_price: time * 1.9
                    })
                    if(selected_plan === 1){
                        if(time > 30){
                            let excedent = time - 30;
                            let tax = excedent * 1.90 + (excedent * (1.90 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    } else if (selected_plan === 2){
                        if(time > 60){
                            let excedent = time - 60;
                            let tax = excedent * 1.90 + (excedent * (1.90 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    } else {
                        if(time > 120){
                            let excedent = time - 120;
                            let tax = excedent * 1.90 + (excedent * (1.90 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    }
                }
                if(destination_ddd === 3){
                    this.setState({
                        without_call_price: time * 1.7
                    })
                    if(selected_plan === 1){
                        if(time > 30){
                            let excedent = time - 30;
                            let tax = excedent * 1.70 + (excedent * (1.70 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    } else if (selected_plan === 2){
                        if(time > 60){
                            let excedent = time - 60;
                            let tax = excedent * 1.70 + (excedent * (1.70 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    } else {
                        if(time > 120){
                            let excedent = time - 120;
                            let tax = excedent * 1.70 + (excedent * (1.70 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    }
                }
                if(destination_ddd === 4){
                    this.setState({
                        without_call_price: time * 0.9
                    })
                    if(selected_plan === 1){
                        if(time > 30){
                            let excedent = time - 30;
                            let tax = excedent * 0.90 + (excedent * (0.90 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    } else if (selected_plan === 2){
                        if(time > 60){
                            let excedent = time - 60;
                            let tax = excedent * 0.90 + (excedent * (0.90 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    } else {
                        if(time > 120){
                            let excedent = time - 120;
                            let tax = excedent * 0.90 + (excedent * (0.90 * 0.1));
                            this.setState({
                                with_call_price: tax
                            })
                        } else {
                            this.setState({
                                with_call_price: 0
                            })
                        }
                    }
                }
            }
            if(origin_ddd === 2){
                this.setState({
                    without_call_price: time * 2.9
                })
                if(selected_plan === 1){
                    if(time > 30){
                        let excedent = time - 30;
                        let tax = excedent * 2.90 + (excedent * (2.90 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                } else if (selected_plan === 2){
                    if(time > 60){
                        let excedent = time - 60;
                        let tax = excedent * 2.90 + (excedent * (2.90 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                } else {
                    if(time > 120){
                        let excedent = time - 120;
                        let tax = excedent * 2.90 + (excedent * (2.90 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                }
            }
            if(origin_ddd === 3){
                this.setState({
                    without_call_price: time * 2.70
                })
                if(selected_plan === 1){
                    if(time > 30){
                        let excedent = time - 30;
                        let tax = excedent * 2.70 + (excedent * (2.70 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                } else if (selected_plan === 2){
                    if(time > 60){
                        let excedent = time - 60;
                        let tax = excedent * 2.70 + (excedent * (2.70 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                } else {
                    if(time > 120){
                        let excedent = time - 120;
                        let tax = excedent * 2.70 + (excedent * (2.70 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                }
            }
            if(origin_ddd === 4){
                this.setState({
                    without_call_price: time * 1.9
                })
                if(selected_plan === 1){
                    if(time > 30){
                        let excedent = time - 30;
                        let tax = excedent * 1.90 + (excedent * (1.90 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                } else if (selected_plan === 2){
                    if(time > 60){
                        let excedent = time - 60;
                        let tax = excedent * 1.90 + (excedent * (1.90 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                } else {
                    if(time > 120){
                        let excedent = time - 120;
                        let tax = excedent * 1.90 + (excedent * (1.90 * 0.1));
                        this.setState({
                            with_call_price: tax
                        })
                    } else {
                        this.setState({
                            with_call_price: 0
                        })
                    }
                }
            }
        } else {
            alert('Você deve preencher todos os dados!')
        }
    } 

    render(){
        return(
            <div className="container-fluid main">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-5 mb-5">
                        <h2 className="simulationTitle">Faça sua simulação!</h2>
                    </div>
                </div>
                <div className="row m-auto p-5 pb-0">
                    <div className="col-md-2">
                        <label for="inputGroupSelect01" className="simulationLabel">DDD de origem</label> 
                    </div>
                    <div className="col-md-2">
                        <label for="inputGroupSelect02" className="simulationLabel">DDD de destino</label> 
                    </div>
                    <div className="col-md-4">
                        <label for="callTime" className="simulationLabel">Tempo da ligação (em minutos)</label> 
                    </div>
                    <div className="col-md-4">
                        <label for="inputGroupSelect03" className="simulationLabel">Plano SempreMais</label> 
                    </div>
                </div>
                <div className="row m-auto p-5 pt-3">
                    <div className="col-md-2">
                        <div className="input-group mb-3">
                            <label className="input-group-text" for="inputGroupSelect01"><CallMadeIcon/></label>
                            <select className="form-select" id="inputGroupSelect01" onChange={this.myChangeHandlerOrigin}>
                                <option selected disabled>Selecione</option>
                                {this.state.ddd_list.map((item) => {
                                    return(
                                        <option name={item.ddd_desc} value={item.ddd_id}>{item.ddd_desc}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    {parseInt(this.state.origin_ddd) === 1 ?
                        <div className="col-md-2">
                            <div className="input-group mb-3">
                                <label className="input-group-text" for="inputGroupSelect02"><CallReceivedIcon/></label>
                                <select className="form-select" id="inputGroupSelect02" onChange={this.myChangeHandlerDestination}>
                                    <option selected disabled>Selecione</option>
                                        {this.state.ddd_list.map((item) => {
                                            return(
                                                <option name={item.ddd_desc} value={item.ddd_id}>{item.ddd_desc}</option>
                                            )
                                        })}
                                </select>
                            </div>
                        </div>
                        :
                        <div className="col-md-2">
                            <div className="input-group mb-3">
                                <label className="input-group-text" for="inputGroupSelect02"><CallReceivedIcon/></label>
                                <select className="form-select" id="inputGroupSelect02" onChange={this.myChangeHandlerDestination}>
                                    <option selected disabled>Selecione</option>   
                                        <option name="011" value={1}>011</option>
                                </select>
                            </div>
                        </div>
                    }
                    
                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <label for="callTime" className="input-group-text" id="basic-addon1"><AccessTimeIcon/></label>
                            <input type="number" id="callTime" name="callTime" className="form-control" placeholder="Tempo da ligação (em minutos)" aria-label="Tempo da ligação (em minutos)" aria-describedby="basic-addon1" onChange={this.myChangeHandlerTime}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <label className="input-group-text" for="inputGroupSelect03"><MonetizationOnIcon/></label>
                            <select className="form-select" id="inputGroupSelect03" onChange={this.myChangeHandlerPlan}>
                                <option selected disabled>Selecione</option>
                                {this.state.planos_list.map((item) => {
                                    return(
                                        <option name={item.plano_desc} value={item.plano_id}>{item.plano_desc}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row m-auto p-5 pt-3 pb-0">
                    <div className="col-12">
                        <button className="btn btn-outline-light linkButton mb-5 w-100" onClick={this.sendSimulation}>Simular</button>
                    </div>
                </div>
                <div className="row m-auto mt-5 p-5 pt-2">
                    <div className="col-6 d-flex justify-content-center">
                        <h2 className="simulationTitle">Valor da sua ligação sem o SempreMais</h2>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <h2 className="simulationTitle">Valor da sua ligação com o SempreMais</h2>
                    </div>
                </div>
                <div className="row m-auto mt-5 p-5 pt-2">
                    <div className="col-6 d-flex justify-content-center">
                        <h2 className="simulationValue">R${this.state.without_call_price}</h2>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <h2 className="simulationValue">R${this.state.with_call_price}</h2>
                    </div>
                </div>
            </div>
        );
    }

}

export default Simulation;