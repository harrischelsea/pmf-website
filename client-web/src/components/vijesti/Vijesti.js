import React, { Component } from 'react';

import './Vijesti.css';
import { Segment, Header, List } from 'semantic-ui-react';

class Vijesti extends Component {

    render() {
        return (
            <div>
                {this.props.vijesti
                    ?
                    this.props.vijesti.map(el =>
                        <div>
                            <Segment key={el.id}>
                                {el.id}
                            </Segment>
                        </div>
                    )
                    :
                    ''
                }
            </div>
        );
    }
}

export default Vijesti;