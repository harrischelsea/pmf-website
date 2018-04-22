import React, { Component } from 'react';

import './Info.css';
import { Segment, Header, List } from 'semantic-ui-react';

class Info extends Component {

    render() {
        return (
            <div>
                <Segment className='segment-radnovrijeme'>
                    Radno vrijeme sa studentima/strankama je svaki radni dan (pon-pet) od 11:00-13:00 sati.
                </Segment>
                <Segment className='segment-info'>
                    <Header className='info-title' size='small'>
                        STUDENTSKA SLUŽBA
                    </Header>

                    <List className='info'>
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>Ulica Zmaja od Bosne 33-35</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>71000 Sarajevo</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='call' />
                            <List.Content>
                                + 387 33 27 99 85
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='call' />
                            <List.Content>
                                + 387 33 72 37 67
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>
                                stsluzba@pmf.unsa.ba
                            </List.Content>
                        </List.Item>
                    </List>

                </Segment>

                <Segment className='segment-info'>
                    <Header className='info-title' size='small'>
                        ŽIRO RAČUN UNIVERZITETA
                    </Header>
                    <div className='ziroracun'>3383202250621169</div>
                    <Header className='info-title' size='small'>
                        ŽIRO RAČUN PMF-a
                    </Header>
                    <div className='ziroracun'>1610000036020088</div>
                </Segment>
            </div>
        );
    }
}

export default Info;