import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import Odsjeci from '../odjseci/Odjseci';
import Clanak from '../clanak/Clanak';
import {getAllHighlights} from "../../actions/OPactions";

class Istaknuto extends Component {

    componentDidMount() {
        this.props.getAllHighlights();
    }

    render() {
        const { istaknuto } = this.props.op.istaknuto;
        return (
            <div>
                <Grid style={{minHeight: '300px'}}>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <Odsjeci />
                    </Grid.Column>
                    { this.props.op.istaknuto.map( el =>
                    <Grid.Column as={NavLink} to={'/vijest/' + el.id + '/' + el.slug} mobile={16} tablet={8} computer={4}>
                        <Clanak title={el.naslov} image={el.slika} text={el.tekst} date={el.createdAt}/>
                    </Grid.Column>
                    )}

                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ op }) => {
    return { op };
};
export default connect(mapStateToProps, {
    getAllHighlights
})(Istaknuto);