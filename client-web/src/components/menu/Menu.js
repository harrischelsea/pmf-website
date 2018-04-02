import React, { Component } from 'react';

import './Menu.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { Container, Grid, Segment, Image, List, Input, Menu } from 'semantic-ui-react';

class MenuPMF extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeItem: 'POČETNA',
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Segment className='menu'>
                    <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={8} computer={5}>
                                <Image
                                    src={logo}
                                    as='a'
                                    fluid
                                    href='/'
                                />
                            </Grid.Column>
                            <Grid.Column floated='right' mobile={16} tablet={8} computer={6}>
                                <Segment basic align='center'>
                                    <ul className='lista'>
                                        <li><a href='#'>E-NASTAVA</a></li>
                                        <li><a href='#'>VIJEĆE</a></li>
                                        <li><a href='#'>ISSS</a></li>
                                        <li><a href='#'>WEBMAIL</a></li>
                                    </ul>
                                    <Input icon='search' placeholder='Search...' fluid />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row centered>

                            <Menu inverted pointing secondary className="navbar-main-menu" stackable fluid compact style={{borderTop:"none"}}>
                                <Container align="center">
                                    <Menu.Item as={NavLink} to='/' name='POČETNA' active={activeItem === 'POČETNA'} content='POČETNA' onClick={this.handleItemClick} />
                                    <Menu.Item name='INFO' active={activeItem === 'INFO'} onClick={this.handleItemClick} />
                                    <Menu.Item name='UPRAVA FAKULTETA' active={activeItem === 'UPRAVA FAKULTETA'} onClick={this.handleItemClick} />
                                    <Menu.Item name='STUDENTSKA SLUŽBA' active={activeItem === 'STUDENTSKA SLUŽBA'} content='STUDENTSKA SLUŽBA' onClick={this.handleItemClick} />
                                    <Menu.Item name='BIBLIOTEKA' active={activeItem === 'BIBLIOTEKA'} onClick={this.handleItemClick} />
                                    <Menu.Item name='ASPMF' active={activeItem === 'ASPMF'} onClick={this.handleItemClick} />
                                </Container>
                            </Menu>
                        </Grid.Row>
                    </Grid>
                    </Container>
                </Segment>

            </div>
        );
    }
}


export default MenuPMF;
