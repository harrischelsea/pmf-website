import React, { Component } from 'react';

import './StudentskaSluzba.css';
import { Container, Grid } from 'semantic-ui-react';
import '../../components/info/Info';
import Info from "../../components/info/Info";
import {getAllSS} from "../../actions/OPactions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Vijesti from "../../components/vijesti/Vijesti";
import Zaposlenici from "../../components/zaposlenici/Zaposlenici";

class StudentskaSluzba extends Component {
    constructor(props){
        super(props);
        this.state = {
            info: {
                msg: 'Radno vrijeme sa studentima/strankama je svaki radni dan (pon-pet) od 11:00-13:00 sati.',
                naziv: 'STUDENTSKA SLŽBA',
                adresa: 'Zmaja od Bosne 33-35',
                postcode: '71000 Sarajevo',
                tel: ['+ 387 33 27 99 85', '+ 387 33 72 37 67'],
                mail: 'stsluzba@pmf.unsa.ba',
                ziro: [{
                    naslov: 'ŽIRO RAČUN UNIVERZITETA',
                    racun: '3383202250621169',
                },
                    {
                        naslov: 'ŽIRO RAČUN PMF-a',
                        racun: '1610000036020088',
                    }],
            },
            zaposlenici: {

            },
        }
    }

    componentDidMount() {
        this.props.getAllSS();
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <Container>
                <Grid>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Info info={this.state.info}/>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Vijesti vijesti={this.props.op.ss}/>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Zaposlenici/>
                    </Grid.Column>
                </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ op}) => {
    return { op };
};
export default withRouter(connect(mapStateToProps, {
    getAllSS
})(StudentskaSluzba));
