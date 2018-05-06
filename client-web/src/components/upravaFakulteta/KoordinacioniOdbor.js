import React, { Component } from 'react';

import { Segment, Image, List, Header } from 'semantic-ui-react';

class KoordinacioniOdbor extends Component {
    render() {
        return (
            <div>
                <Segment>
                    <Header className='info-title' size='small'>
                        KOORDINACIONI ODBOR
                    </Header>
                    <List className='info'>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Prof. Dr. Mustafa Memić – Dekan Fakulteta</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Prof. Dr. Senad Odžak – Prodekan za opće poslove i finansije</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content> Prof. Dr.  Ranko Mirić – Prodekan za nastavu i naučnoistraživački rad</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Prof. Dr. Lada Lukić Bilela – Prodekan za međunarodnu saradnju i osiguranje kvaliteta</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Doc. Dr. Adi Vesnić – Šef Odsjeka za biologiju</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Doc. Dr. Azra Gazibegović-Busuladžić – Šef Odsjeka za fiziku</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Prof. Dr. Nusret Drešković  - Šef odsjeka za geografiju</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Doc. Dr. Nevzeta Ljubijankić – Šef Odsjeka za hemiju</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Prof. Dr. Esmir Pilav– Šef Odsjeka za matematiku</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='user' />
                            <List.Content>Jasmina Hasanbegović, dipl. iur. – Sekretar Fakulteta</List.Content>
                        </List.Item>
                    </List>
                </Segment>

                <Segment>
                    <Header className='info-title' size='small'>
                        NAUČNO-NASTAVNO VIJEĆE
                    </Header>
                    <p style={{textAlign: 'justify'}}>Svi zapisnici Nastavno-naučnog vijeća zaključno sa krajem 2012/2013 šk. god. su arhivirani i naleze se u Fakultetskoj arhivi, svi zainteresirani, koji žele uvid u neki od zapisnika, mogu se obratiti pravnoj službi Fakulteta.</p>
                </Segment>

            </div>
        );
    }
}


export default KoordinacioniOdbor;
