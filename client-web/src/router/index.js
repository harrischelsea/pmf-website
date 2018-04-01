import React, { Component } from 'react';

import Menu from '../components/menu/Menu';
import MainRouter from './MainRouter';

class Router extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <MainRouter/>
            </div>
        );
    }
}


export default Router;
