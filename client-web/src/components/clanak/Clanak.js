import React, { Component } from 'react';

import './Clanak.css';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/hr';
import { Segment, Header, Icon, Image } from 'semantic-ui-react';

class Clanak extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <Segment className='segment-clanak'>
                    <Header className='clanak-istaknuto' size='small'>
                        <Icon className='pin' style={{fontSize: '14px'}} />
                        ISTAKNUTO
                    </Header>

                    <Image className='istaknnuto-img' fluid src={this.props.image} />

                    <Header className='clanak-naslov' size='medium'>
                        {this.props.title}
                    </Header>

                    <p className='clanak-tekst'>
                        {this.props.text.substring(0, 320) + '...'}
                    </p>

                    <Header className='clanak-datum' size='small'>
                        <span><Icon className='time outline' /></span>
                        <Moment element='span' locale='hr' tz='Europe/Sarajevo' fromNow>
                            {this.props.date}
                        </Moment>
                    </Header>
                </Segment>
            </div>
        );
    }
}

export default Clanak;