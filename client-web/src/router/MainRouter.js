import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Vijest from '../pages/vijest/Vijest';
import StudentskaSluzba from "../pages/studentskaSluzba/StudentskaSluzba";
import UpravaFakulteta from "../pages/upravaFakulteta/UpravaFakulteta";
import Biblioteka from "../pages/biblioteka/Biblioteka";
import Info from "../pages/info/Info";

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/info" component={Info} />
                <Route path="/studentska-sluzba" component={StudentskaSluzba} />
                <Route path="/uprava-fakulteta" component={UpravaFakulteta} />
                <Route path="/biblioteka" component={Biblioteka} />
                <Route exact path="/vijest/:id/:slug" component={Vijest} />
            </Switch>
        );
    }
}


export default MainRouter;
