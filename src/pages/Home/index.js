import React, { Component } from 'react';
import './home.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Cellphones from '../../components/Cellphones';
import A12 from '../../assets/img/a12.jpg';
import E7 from '../../assets/img/e7.jpg';
import K52 from '../../assets/img/k52.jpg';
import SimulationBanner from '../../components/SimulationBanner';
import Footer from '../../components/Footer'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header/>
                <Banner/>
                <div className="mt-5">
                    <h2 className="CellphoneSection">Mais vendidos</h2>
                    <div className="container-fluid marginCellphone">
                        <div className="row mt-5 mb-5">
                            <div className="col-md-3">
                                <Cellphones name="Samsung Galaxy A10s" price="599,00" img={E7}/>
                            </div>
                            <div className="col-md-3">
                                <Cellphones name="Motorola Moto E7 Plus" price="949,00" img={E7}/>
                            </div>
                            <div className="col-md-3">
                                <Cellphones name="LG K52" price="829,00" img={K52}/>
                            </div>
                            <div className="col-md-3">
                                <Cellphones name="Samsung Galaxy A12" price="899,00" img={A12}/>
                            </div>
                        </div>
                    </div> 
                </div>
                <SimulationBanner/>
                <Footer/>
            </div>
        )
    }
}

export default Home;