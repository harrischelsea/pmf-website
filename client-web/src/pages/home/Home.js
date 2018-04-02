import React, { Component } from 'react';

import { Container, Grid } from 'semantic-ui-react';
import OglasnePloce from '../../components/oglasnePloce/OglasnePloce';
import Istaknuto from '../../components/istaknuto/Istaknuto';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                <Istaknuto />
                <OglasnePloce />
                </Container>
            </div>
        );
    }
}


export default Home;
