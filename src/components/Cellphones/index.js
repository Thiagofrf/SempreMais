import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cellphones.css';


class Cellphones extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="col-md-3">
                <div className="card cardSettings">
                    <img src={this.props.img} className="card-img-top cellphonesImg mt-3 mb-3" alt="Imagem do celular."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">R${this.props.price}</p>
                        <Link className="check">Confira</Link>
                    </div>
                </div>
            </div>  
        )
    }

}

export default Cellphones;