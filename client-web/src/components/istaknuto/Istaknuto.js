import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import Odsjeci from '../odjseci/Odjseci';
import Clanak from '../clanak/Clanak';

class Istaknuto extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Odsjeci />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Clanak/>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Clanak/>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Clanak/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Istaknuto;