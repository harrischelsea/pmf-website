import {
    GET_CURRENT_NEWS_SUCCESS,
    GET_CURRENT_NEWS_FAILED,
    GET_CURRENT_NEWS_STARTED
} from '../actions/CurrentNewsActions';

const INITIAL_STATE = {
    currentNews: {},
    loading: false,
    error: '',
    successNews: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_NEWS_STARTED:
            return {...state, loading: action.payload };
        case GET_CURRENT_NEWS_FAILED:
            return {...state, error: action.payload, loading: false };
        case GET_CURRENT_NEWS_SUCCESS:
            return {...state, currentNews: action.payload, loading: false, successNews: true };
        default:
            return state;
    }
}