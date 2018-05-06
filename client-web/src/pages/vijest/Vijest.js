import React, { Component } from 'react';

import './Vijest.css';
import Najnovije from '../../components/najnovije/Najnovije';
import { Segment, Header, Container, Grid, Image, Icon, List } from 'semantic-ui-react';
import {connect} from "react-redux";
import { getCurrentNews } from "../../actions/CurrentNewsActions";
import { getAllOP, getAllSS } from "../../actions/OPactions";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class Vijest extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            slug: this.props.match.params.slug,
        }
    }

    handleActiveNews = (id, slug) => {
        this.props.getCurrentNews(id, slug);
    };

    componentDidMount() {
        //this.start.scrollIntoView();
        window.scrollTo(0, 0);
        this.props.getAllOP();
        this.props.getAllSS();
        this.props.getCurrentNews(this.state.id, this.state.slug);
    }

    setID = () => {
      this.setState({id: this.props.match.params.id});
    };

    render() {
        if (this.props.loading) { return <div>LOADING...</div>}
        const { currentNews } = this.props.currentNews;
        const { op, ss } = this.props.op;
        let catNews = op.concat(ss);
        catNews = catNews.filter(el =>  el.id != this.props.match.params.id);
        return (
            <div ref={(div) => this.start = div}>
                <Container>
                    <Segment className='clanak'>
                    <Grid>
                        <Grid.Column mobile={16} tablet={10} computer={10}>
                            <Header className='vijest-category' size='small'>
                                {currentNews.naziv}
                                <Icon
                                    style={{float: 'right', color: 'black', fontSize: '14px'}}
                                    className='circle'/>
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

                            <p className='vijest-text'
                               dangerouslySetInnerHTML={{__html: String(currentNews.tekst) }} />


                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={6} computer={6}>
                            <Header className='ploca-heading' size='small'>NAJNOVIJE</Header>
                            <List>
                                {catNews.map(el =>
                                    <Link
                                        key={el.id}
                                        onClick={() => this.handleActiveNews(el.id, el.slug)}
                                        to={'/vijest/' + el.id + '/' + el.slug} >
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
    getCurrentNews, getAllOP, getAllSS,
})(Vijest));