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
        return (
            <div style={{marginTop: '20px'}}>
                <Grid>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce name='Oglasna ploča' news={op} />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce name='Studentska služba' news={op} />
                    </Grid.Column>
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

