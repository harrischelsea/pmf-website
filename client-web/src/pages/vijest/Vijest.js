import React, { Component } from 'react';

import './Vijest.css';
import Najnovije from '../../components/najnovije/Najnovije';
import { Segment, Header, Container, Grid, Image, Icon, List } from 'semantic-ui-react';
import {connect} from "react-redux";
import { getCurrentNews } from "../../actions/CurrentNewsActions";
import { getAllOP } from "../../actions/OPactions";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class Vijest extends Component {

    componentDidMount() {
        this.props.getAllOP();
        this.props.getCurrentNews(this.props.match.params.id, this.props.match.params.slug);
    }

    render() {
        if (this.props.loading) { return <div>LOADING...</div>}
        const { currentNews } = this.props.currentNews;
        let catNews = this.props.op.op.filter(el =>  el.id != this.props.match.params.id);
        return (
            <div>
                <Container>
                    <Segment className='clanak'>
                    <Grid>
                        <Grid.Column mobile={16} tablet={10} computer={10}>
                            <Header className='vijest-category' size='small'>
                                {currentNews.naziv}
                                <Icon
                                    style={{float: 'right', color: 'black', fontSize: '14px'}}
                                    className='list layout'/>
                            </Header>
                            <Header className='vijest-heading' size='small'>{currentNews.naslov}</Header>

                            <div className='info'>
                                <Icon className='user' />
                                <span className='info-admin'>
                                {currentNews.admin}
                                </span>
                                <span className='info-time'>
                                {new Date(currentNews.createdAt).getHours()}:
                                {new Date(currentNews.createdAt).getMinutes()}h
                                </span>
                                <span className='info-date'>
                                {new Date(currentNews.createdAt).getDate()}/
                                {new Date(currentNews.createdAt).getMonth()}/
                                {new Date(currentNews.createdAt).getFullYear()}
                                </span>
                            </div>

                            <Image className='vijest-img' src={'/' + currentNews.slika } fluid />

                            <p className='vijest-text'>{currentNews.tekst}</p>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={6} computer={6}>
                            <Header className='ploca-heading' size='small'>NAJNOVIJE</Header>
                            <List>
                                {catNews.map(el =>
                                    <Link to={'/vijest/' + el.id + '/' + el.slug}>
                                    <List.Item className='lista-najnovije'>
                                        <div className='list-category'>
                                            {el.naziv}
                                            <span className='list-date'>
                                                <Icon className='calendar outline'/>
                                                {new Date(currentNews.createdAt).getDate()}/
                                                {new Date(currentNews.createdAt).getMonth()}/
                                                {new Date(currentNews.createdAt).getFullYear()}
                                            </span>
                                        </div>
                                        <div className='list-title'>{el.naslov}</div>
                                    </List.Item>
                                    </Link>
                                )}
                            </List>
                        </Grid.Column>

                    </Grid>
                    </Segment>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ currentNews, op }) => {
    return { currentNews, op };
};
export default withRouter(connect(mapStateToProps, {
    getCurrentNews, getAllOP
})(Vijest));