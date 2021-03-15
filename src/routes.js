import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import FaleMais from '../src/pages/FaleMais';

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/falemais' component={FaleMais}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;