import React, { Component } from 'react';

import './Footer.css';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <div>
                <Segment className='footer'>
                    <Container>
                        <Grid>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <Header className='footer-menu-heading' size='small'>MENU</Header>
                                <List className='footer-menu'>
                                    <List.Item>Početna</List.Item>
                                    <List.Item>Info</List.Item>
                                    <List.Item>Uprava fakulteta</List.Item>
                                    <List.Item>Studentska služba</List.Item>
                                    <List.Item>Biblioteka</List.Item>
                                    <List.Item>ASPMF</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <Header className='footer-menu-heading' size='small'>ODSJECI</Header>
                                <List className='footer-menu'>
                                    <List.Item>BIOLOGIJA</List.Item>
                                    <List.Item>FIZIKA</List.Item>
                                    <List.Item>GEOGRAFIJA</List.Item>
                                    <List.Item>HEMIJA</List.Item>
                                    <List.Item>MATEMATIKA</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <Header className='footer-menu-heading' size='small'>KORISNI LINKOVI</Header>
                                <List className='footer-menu'>
                                    <List.Item>E-NASTAVA</List.Item>
                                    <List.Item>ISSS</List.Item>
                                    <List.Item>Vijeće fakulteta</List.Item>
                                    <List.Item>WEBMAIL</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <Header className='footer-menu-heading' size='small'>PMF SARAJEVO</Header>
                                <List className='footer-menu'>
                                    <List.Item>Javne nabavke</List.Item>
                                    <List.Item>Osiguranje kvaliteta</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        );
    }
}


export default Footer;
