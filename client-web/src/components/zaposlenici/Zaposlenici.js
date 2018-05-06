import React, { Component } from 'react';

import './Zaposlenici.css';
import { Segment, Header, List } from 'semantic-ui-react';

class Zaposlenici extends Component {

    render() {
        return (
            <div>
                <Segment className='segment-info'>
                    <Header className='info-title' size='small'>
                        ZAPOSLENICI
                    </Header>
                        <h3 className='sefica'>ŠEFICA STUDENTSKE SLUŽBE</h3>
                    <List className='info'>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>mr. sc. Džejla Idrizović</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='call' />
                            <List.Content>
                                + 387 33 27 99 78
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>
                                dzejlai@pmf.unsa.ba
                            </List.Content>
                        </List.Item>
                    </List>

                    <h3 className='sefica'>SARADNICI</h3>
                    <List className='info'>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Mersiha Trtak-Fehrić, saradnik</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Esvelda Dedić, referent</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Slobodan Gašević, referent</List.Content>
                        </List.Item>
                    </List>
                </Segment>
            </div>
        );
    }
}

export default Zaposlenici;