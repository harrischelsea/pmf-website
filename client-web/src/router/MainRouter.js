import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Vijest from '../pages/vijest/Vijest';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/vijest/:id/:slug" component={Vijest} />
            </Switch>
        );
    }
}


export default MainRouter;
