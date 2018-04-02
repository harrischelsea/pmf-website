import React, { Component } from 'react';

import './Vijest.css';
import Najnovije from '../../components/najnovije/Najnovije';
import { Segment, Header, Container, Grid, Image, Icon, List } from 'semantic-ui-react';
import {connect} from "react-redux";
import { getCurrentNews } from "../../actions/CurrentNewsActions";
import { getAllOP } from "../../actions/OPactions";
import {NavLink} from "react-router-dom";

class Vijest extends Component {

    componentDidMount() {
        this.props.getAllOP();
        this.props.getCurrentNews(this.props.match.params.id, this.props.match.params.slug);
    }

    render() {
        const { currentNews } = this.props.currentNews;
        let catNews = this.props.op.op.filter(el => el.kategorija_id === currentNews.kat_id && el.id != this.props.match.params.id);
        return (
            <div>
                <Container>
                    <Segment className='clanak'>
                    <Grid>
                        <Grid.Column mobile={16} tablet={8} computer={10}>
                            <Header className='vijest-category' size='small'>{currentNews.naziv}</Header>
                            <Header className='vijest-heading' size='small'>{currentNews.naslov}</Header>

                            <div className='info'>
                                <Icon className='user' />
                                <span className='info-admin'>
                                {currentNews.admin}
                                </span>
                                <span className='info-date'>
                                {new Date(currentNews.createdAt).getDate()}/
                                {new Date(currentNews.createdAt).getMonth()}/
                                {new Date(currentNews.createdAt).getFullYear()}
                                </span>
                                <span className='info-time'>
                                {new Date(currentNews.createdAt).getHours()}:
                                {new Date(currentNews.createdAt).getMinutes()}h
                                </span>
                            </div>

                            <Image src={'/' + currentNews.slika } fluid />

                            <p className='vijest-text'>{currentNews.tekst}</p>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Header className='ploca-heading' size='small'>NAJNOVIJE | {currentNews.naziv}</Header>
                            <List>
                                {catNews.map(el =>
                                    <List.Item className='lista-najnovije' as={NavLink} to={'/vijest/' + el.id + '/' + el.slug}>
                                        {el.naslov}
                                    </List.Item>
                                )}
                            </List>
                            <Header className='see-all' size='tiny'>Pogledaj sve...</Header>
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
export default connect(mapStateToProps, {
    getCurrentNews, getAllOP
})(Vijest);