import React, { Component } from 'react';

import './Info.css';
import { Segment, Header, List } from 'semantic-ui-react';

class Info extends Component {

    render() {
        const { info } = this.props;
        return (
            <div>
                {info.msg
                    ?
                <Segment className='segment-radnovrijeme'>
                    {info.msg}
                </Segment>
                    : ''
                }
                <Segment className='segment-info'>
                    <Header className='info-title' size='small'>
                        {info.naziv}
                    </Header>

                    <List className='info'>
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>{info.adresa}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>{info.postcode}</List.Content>
                        </List.Item>
                        {info.tel.map( el =>
                        <List.Item>
                            <List.Icon name='call' />
                            <List.Content>
                                {el}
                            </List.Content>
                        </List.Item>
                        )}
                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>
                                {info.mail}
                            </List.Content>
                        </List.Item>
                    </List>

                </Segment>

                {info.ziro
                ?
                <Segment className='segment-info'>
                    {info.ziro.map( el =>
                        <div style={{marginBottom: '20px'}}>
                            <Header className='info-title' size='small'>
                                {el.naslov}
                            </Header>
                            <div className='ziroracun'>{el.racun}</div>
                            </div>
                        )}
                </Segment>
                : ''
                }
            </div>
        );
    }
}

export default Info;