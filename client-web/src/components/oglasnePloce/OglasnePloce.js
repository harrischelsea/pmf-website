import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Ploce from '../ploce/Ploce';
import {getAllOP, getAllSS} from "../../actions/OPactions";
import { withRouter } from 'react-router-dom';

class OglasnePloce extends Component {

    componentDidMount() {
        this.props.getAllOP();
        this.props.getAllSS();
    }

    render() {
        const { op, ss } = this.props.op;
        let oglasna = op;
        let sluzba = ss;
        return (
            <div>
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

const mapStateToProps = ({ op}) => {
    return { op };
};
export default withRouter(connect(mapStateToProps, {
    getAllOP, getAllSS
})(OglasnePloce));

