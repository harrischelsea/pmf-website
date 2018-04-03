import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import './Odsjeci.css';
import { Icon, Header } from 'semantic-ui-react';

class Odsjeci extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <Segment className='odsjeci'>
                    <Header className='odsjeci-naslov' size='small'>
                        ODSJECI
                    </Header>
                    <ul className='odsjeci-menu'>
                        <li><a href='#'>BIOLOGIJA</a></li>
                        <li><a href='#'>FIZIKA</a></li>
                        <li><a href='#'>GEOGRAFIJA</a></li>
                        <li><a href='#'>HEMIJA</a></li>
                        <li><a href='#'>MATEMATIKA</a></li>
                    </ul>
                    <ul className='odsjeci-info'>
                        <li><a href='#'><Icon className='table'/>Raspored</a></li>
                        <li><a href='#'><Icon className='tasks'/>Literatura</a></li>
                        <li><a href='#'><Icon className='file text outline'/>Ocjenjivanje</a></li>
                    </ul>
                </Segment>
            </div>
        );
    }
}

export default Odsjeci;