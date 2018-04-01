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
        return (
            <div style={{marginTop: '20px'}}>
                <Grid>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Ploce />
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

