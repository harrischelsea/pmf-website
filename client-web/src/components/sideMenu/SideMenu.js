import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './SideMenu.css';
import { Segment, Header, Menu } from 'semantic-ui-react';

class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: ''
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        let {activeItem} = this.state;
        return (
            <div>
                <Segment>
                <Menu vertical fluid className='side-menu'>
                    <Menu.Item as={NavLink} to='/uprava-fakulteta' name='Uprava fakulteta' active={activeItem === 'Uprava fakulteta'} onClick={this.handleItemClick} />
                    <Menu.Item as={NavLink} to='/uprava-fakulteta/koordinacioni-odbor' name='Koordinacioni odbor' active={activeItem === 'Koordinacioni odbor'} onClick={this.handleItemClick} />
                    <Menu.Item as={NavLink} to='/uprava-fakulteta/nastavno-naucno-vijece' name='Naučno-nastavno vijeće' active={activeItem === 'Naučno-nastavno vijeće'} onClick={this.handleItemClick} />
                </Menu>
                </Segment>
            </div>
        );
    }
}

export default SideMenu;