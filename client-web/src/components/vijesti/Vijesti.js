import React, { Component } from 'react';

import './Vijesti.css';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Segment, Image, Pagination, Icon } from 'semantic-ui-react';

class Vijesti extends Component {

    render() {
        return (
            <div>
                <Segment className='ss-naslov'>
                    STUDENTSKA SLUŽBA | Vijesti
                </Segment>
                {this.props.vijesti
                    ?
                    this.props.vijesti.map(el =>
                            <Link
                                key={el.id}
                                to={'/vijest/' + el.id + '/' + el.slug} >
                            <Segment className='segment-vijest' key={el.id}>
                                <Image src='default.jpg' spaced='left' size='small' />
                                <div className='vijest-naslov'>{el.naslov}</div>
                                <Moment element='div' className='datum' tz='Europe/Sarajevo' format="DD/MM/YYYY | HH:mm">
                                    {el.createdAt}
                                </Moment>
                            </Segment>
                            </Link>
                    )
                    :
                    ''
                }

                <Pagination
                    defaultActivePage={1}
                    totalPages={5}
                />
            </div>
        );
    }
}

export default Vijesti;