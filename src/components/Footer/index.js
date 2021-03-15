import React, { Component } from 'react';
import './footer.css';
import Telefonica from '../../assets/img/telefonica.png'

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center mt-5 mb-5">
                        <img src={Telefonica} className="img-responsive" width="20%" alt="Logo da Telefonica"/>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center mt-5 mb-5">
                        Desenvolvido por: Thiago Fontanella
                    </div>
                    <div className="col-md-4 d-flex justify-content-center mt-5 mb-5">
                        BrTelefonia
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;