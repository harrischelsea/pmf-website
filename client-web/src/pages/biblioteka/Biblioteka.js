import React, { Component } from 'react';

import '../../components/zaposlenici/Zaposlenici.css';
import { Container, Grid, List, Segment, Header, Message } from 'semantic-ui-react';

class Biblioteka extends Component {
    render() {
        return (
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <Container>
                    <Grid>
                        <Grid.Column mobile={16} tablet={8} computer={12}>
                            <Segment>
                                <h3>BIBLIOTEKA</h3>
                                    <Message>
                                        <Message.Header>Biblioteka Prirodno-matematičkog fakulteta Sarajevo podijeljena je u odjele koji prate rad odsjeka.</Message.Header>
                                        <Message.List>
                                            <Message.Item>biologija</Message.Item>
                                            <Message.Item>fizika</Message.Item>
                                            <Message.Item>geografija</Message.Item>
                                            <Message.Item>hemija</Message.Item>
                                            <Message.Item>matematika</Message.Item>
                                        </Message.List>
                                    </Message>
                                    <Message>
                                        <h5>Čitaonice i prijemni odjeli su otvoreni za korisnike po rasporedu na oglasnoj ploči Biblioteke.</h5>
                                        <h5>Za korisnike koji nisu osoblje ili studenti Prirodno-matematičkog fakulteta Sarajevo postoje posebni uvjeti korištenja knjižne građe.</h5>
                                        <h5>Za pojedine publikacije (arhivske primjerke, staru i rijetku knjigu, oštećene publikacije i sl.) postoje posebni uvjeti korištenja za sve korisnike.</h5>
                                    </Message>
                            </Segment>
                            <Message info>
                                <Message.Header>Katalog Biblioteke PMF-a Sarajevo kao dio kataloga Virtualne biblioteke Bosne i Hercegovine - COBISS/OPAC možete pretražiti na: </Message.Header>
                                <p>http://www.cobiss.ba/</p>
                            </Message>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            <Segment className='segment-info'>
                                <Header className='info-title' size='small'>
                                    OSOBLJE I KONTAKTI
                                </Header>

                                <List className='info'>
                                    <List.Item>
                                        <List.Icon name='user' />
                                        <List.Content>Edita Spahić, dipl. bibliotekar, rukovodilac Biblioteke Prirodno-matematičkog fakulteta Sarajevo</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='call' />
                                        <List.Content>
                                            Tel.:   033 723-753
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='call' />
                                        <List.Content>
                                            TFaks: 033 649-359
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            edita_spahic@yahoo.com
                                        </List.Content>
                                    </List.Item>

                                    <hr/>

                                    <List.Item>
                                        <List.Icon name='user' />
                                        <List.Content>Biljana Stojanović, dipl. bibliotekar</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='call' />
                                        <List.Content>
                                            Tel.:   033 723-751
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            biljana.stojanovic01@yahoo.com
                                        </List.Content>
                                    </List.Item>

                                    <hr/>

                                    <List.Item>
                                        <List.Icon name='user' />
                                        <List.Content>Erduana Šogolj</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='call' />
                                        <List.Content>
                                            Tel.:   033 279-863
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            erduana.sogolj@hotmail.com
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Biblioteka;