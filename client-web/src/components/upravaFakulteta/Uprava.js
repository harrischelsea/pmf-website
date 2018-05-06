import React, { Component } from 'react';

import './Uprava.css';
import { Segment, Image, Grid, Header } from 'semantic-ui-react';

class Uprava extends Component {
    render() {
        return (
            <div>
                <Segment>
                    <Grid>
                        <Header style={{width: '100%'}} className='info-title' size='small'>
                            UPRAVA FAKULTETA
                        </Header>
                    <Grid.Row>
                    <Grid.Column align='center'>
                    <Segment basic compact>
                    <Image centered src='default.jpg' size='medium' />
                    <ul className='uprava-lista'>
                        <li>DEKAN</li>
                        <li>Prof. dr. Mustafa Memić</li>
                        <li>Tel: 111</li>
                        <li>Fax: 111</li>
                        <li>Mail: 111</li>
                    </ul>
                    </Segment>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row align='center' centered columns={3}>
                        <Grid.Column  mobile={16} tablet={9} computer={5}>
                        <Segment basic align='center'>
                            <Image centered src='default.jpg' size='medium' />
                            <ul className='uprava-lista'>
                                <li>DEKAN</li>
                                <li>Prof. dr. Mustafa Memić</li>
                                <li>Tel: 111</li>
                                <li>Fax: 111</li>
                                <li>Mail: 111</li>
                            </ul>
                        </Segment>
                        </Grid.Column>
                        <Grid.Column  mobile={16} tablet={9} computer={5}>
                            <Segment basic align='center'>
                                <Image centered src='default.jpg' size='medium' />
                                <ul className='uprava-lista'>
                                    <li>DEKAN</li>
                                    <li>Prof. dr. Mustafa Memić</li>
                                    <li>Tel: 111</li>
                                    <li>Fax: 111</li>
                                    <li>Mail: 111</li>
                                </ul>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column  mobile={16} tablet={9} computer={5}>
                            <Segment basic align='center'>
                                <Image centered src='default.jpg' size='medium' />
                                <ul className='uprava-lista'>
                                    <li>DEKAN</li>
                                    <li>Prof. dr. Mustafa Memić</li>
                                    <li>Tel: 111</li>
                                    <li>Fax: 111</li>
                                    <li>Mail: 111</li>
                                </ul>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row align='center' centered columns={3}>
                        <Grid.Column  mobile={16} tablet={9} computer={5}>
                            <Segment basic align='center'>
                                <Image centered src='default.jpg' size='medium' />
                                <ul className='uprava-lista'>
                                    <li>DEKAN</li>
                                    <li>Prof. dr. Mustafa Memić</li>
                                    <li>Tel: 111</li>
                                    <li>Fax: 111</li>
                                    <li>Mail: 111</li>
                                </ul>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column  mobile={16} tablet={9} computer={5}>
                            <Segment basic align='center'>
                                <Image centered src='default.jpg' size='medium' />
                                <ul className='uprava-lista'>
                                    <li>DEKAN</li>
                                    <li>Prof. dr. Mustafa Memić</li>
                                    <li>Tel: 111</li>
                                    <li>Fax: 111</li>
                                    <li>Mail: 111</li>
                                </ul>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>
            </div>
        );
    }
}


export default Uprava;
