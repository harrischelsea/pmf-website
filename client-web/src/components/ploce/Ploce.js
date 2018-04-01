import React, { Component } from 'react';

import './Ploce.css';
import { Segment, Header, List } from 'semantic-ui-react';

class Ploce extends Component {
    render() {
        return (
            <div>
                <Segment className='ploca'>
                    <Header className='ploca-heading' size='small'>Oglasna ploča</Header>
                    <List>
                        <List.Item>
                            <div className='date'>
                                <div className='day'>20</div>
                                <div className='month'>NOV</div>
                            </div>
                            <div className='news-title'>
                                Prijava završnih i popravnih ispita za zimski semestar 2017-2018 g.
                            </div>
                        </List.Item>
                    </List>
                    <Header className='see-all' size='tiny'>Pogledaj sve...</Header>
                </Segment>
            </div>
        );
    }
}


export default Ploce;
