import React, { Component } from 'react';

import './StudentskaSluzba.css';
import { Container, Grid } from 'semantic-ui-react';
import '../../components/info/Info';
import Info from "../../components/info/Info";
import {getAllSS} from "../../actions/OPactions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Vijesti from "../../components/vijesti/Vijesti";

class StudentskaSluzba extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getAllSS();
    }

    render() {
        return (
            <div>
                <Container>
                <Grid>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Info/>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Vijesti vijesti={this.props.op.ss}/>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        test1234
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
