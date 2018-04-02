import React, { Component } from 'react';

import './Clanak.css';
import { Segment, Header, Icon, Image } from 'semantic-ui-react';

class Clanak extends Component {
    render() {
        return (
            <div>
                <Segment className='segment-clanak'>
                    <Header className='clanak-istaknuto' size='small'>
                        <Icon className='pin' style={{fontSize: '14px'}} />
                        ISTAKNUTO
                    </Header>

                    <Image className='istaknnuto-img' fluid src='default.jpg' />

                    <Header className='clanak-naslov' size='medium'>
                        NASLOV
                    </Header>

                    <p className='clanak-tekst'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <Header className='clanak-datum' size='small'>
                        <Icon className='time outline'/>
                        datum
                    </Header>
                </Segment>
            </div>
        );
    }
}

export default Clanak;