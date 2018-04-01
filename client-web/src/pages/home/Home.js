import React, { Component } from 'react';

import { Container, Grid } from 'semantic-ui-react';
import OglasnePloce from '../../components/oglasnePloce/OglasnePloce';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                <OglasnePloce />
                </Container>
            </div>
        );
    }
}


export default Home;
