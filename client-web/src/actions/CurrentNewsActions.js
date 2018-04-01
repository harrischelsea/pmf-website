import axios from 'axios';

export const GET_CURRENT_NEWS_STARTED = "GET_CURRENT_NEWS_STARTED";
export const GET_CURRENT_NEWS_FAILED = "GET_CURRENT_NEWS_FAILED";
export const GET_CURRENT_NEWS_SUCCESS = "GET_CURRENT_NEWS_SUCCESS";

export const getCurrentNewsStarted = (loading) => {
    return {
        type: GET_CURRENT_NEWS_STARTED,
        payload: loading
    }
};

export const getCurrentNewsFailed = (error) => {
    return {
        type: GET_CURRENT_NEWS_FAILED,
        payload: error
    }
};

export const getCurrentNewsSuccess = (news) => {
    return {
        type: GET_CURRENT_NEWS_SUCCESS,
        payload: news
    }
};

export  const getCurrentNews = (id) => dispatch => {
    dispatch(getCurrentNewsStarted(true));
    axios.get('/api/get-current-news/' + id)
        .then(res => {
            dispatch(getCurrentNewsSuccess(res.data));
        })
        .catch( () => getCurrentNewsFailed('Err!'));
};