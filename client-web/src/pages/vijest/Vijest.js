import React, { Component } from 'react';

import { Segment, Header, Container } from 'semantic-ui-react';
import {connect} from "react-redux";
import { getCurrentNews } from "../../actions/CurrentNewsActions";

class Vijest extends Component {

    componentDidMount() {
        this.props.getCurrentNews(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Container>
                    Vijest {this.props.match.params.id}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ currentNews }) => {
    return { currentNews };
};
export default connect(mapStateToProps, {
    getCurrentNews
})(Vijest);