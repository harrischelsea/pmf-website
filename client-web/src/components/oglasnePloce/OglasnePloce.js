import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Ploce from '../ploce/Ploce';
import {getAllOP} from "../../actions/OPactions";

class OglasnePloce extends Component {

    componentDidMount() {
        this.props.getAllOP();
    }

    render() {
        const { op } = this.props.op;
        let oglasna = op.filter(el => el.kategorija_id == 1);
        let sluzba = op.filter(el => el.kategorija_id == 2);
        return (
            <div style={{marginTop: '20px'}}>
                <Grid style={{minHeight: '300px'}}>
                    <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce name='Oglasna ploča' news={oglasna} />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce name='Studentska služba' news={sluzba} />
                    </Grid.Column>


                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce name='Oglasna ploča' news={oglasna} />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce name='Studentska služba' news={sluzba} />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ op }) => {
    return { op };
};
export default connect(mapStateToProps, {
    getAllOP
})(OglasnePloce);

