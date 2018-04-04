import React, { Component } from 'react';

import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';
import MainRouter from './MainRouter';

class Router extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <MainRouter/>
                <Footer/>
            </div>
        );
    }
}


export default Router;
