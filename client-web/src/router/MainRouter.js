import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Vijest from '../pages/vijest/Vijest';
import StudentskaSluzba from "../pages/studentskaSluzba/StudentskaSluzba";

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/studentska-sluzba" component={StudentskaSluzba} />
                <Route exact path="/vijest/:id/:slug" component={Vijest} />
            </Switch>
        );
    }
}


export default MainRouter;
