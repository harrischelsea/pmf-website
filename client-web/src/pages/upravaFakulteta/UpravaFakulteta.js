import React, { Component } from 'react';

import './UpravaFakulteta.css';
import { Container, Grid } from 'semantic-ui-react';
import Uprava from '../../components/upravaFakulteta/Uprava';
import KoordinacioniOdbor from '../../components/upravaFakulteta/KoordinacioniOdbor';

class UpravaFakulteta extends Component {

    render() {
        return (
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <Container>
                    <Grid>
                        <Grid.Column style={{padding: '10px'}} mobile={16} tablet={8} computer={12}>
                            <Uprava/>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            <KoordinacioniOdbor/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default UpravaFakulteta;