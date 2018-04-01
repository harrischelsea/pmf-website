import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Ploce.css';
import { Segment, Header, List } from 'semantic-ui-react';

class Ploce extends Component {
    render() {
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAJ", "JUN",
            "JUL", "AUG", "SEP", "OKT", "NOV", "DEC"
        ];
        return (
            <div>
                <Segment className='ploca'>
                    <Header className='ploca-heading' size='small'>{this.props.name}</Header>
                    <List>
                        {this.props.news.map( el =>
                        <List.Item as={NavLink} to={'/vijest/' + el.id}>
                            <div className='date'>
                                <div className='day'>{new Date(el.createdAt).getDate()}</div>
                                <div className='month'>{monthNames[new Date(el.createdAt).getMonth()]}</div>
                            </div>
                            <div className='news-title'>
                                {el.naslov}
                            </div>
                        </List.Item>
                        )}
                    </List>
                    <Header className='see-all' size='tiny'>Pogledaj sve...</Header>
                </Segment>
            </div>
        );
    }
}


export default Ploce;
