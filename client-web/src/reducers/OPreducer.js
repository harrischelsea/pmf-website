import {
    GET_ALL_OP_NEWS_STARTED,
    GET_ALL_OP_NEWS_FAILED,
    GET_ALL_OP_NEWS_SUCCESS,
    GET_ALL_HIGHLIGHTS_STARTED,
    GET_ALL_HIGHLIGHTS_FAILED,
    GET_ALL_HIGHLIGHTS_SUCCESS
} from '../actions/OPactions';

const INITIAL_STATE = {
    op: [],
    istaknuto: [],
    loading: false,
    error: '',
    successOP: false,
    successHL: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_OP_NEWS_STARTED:
            return {...state, loading: action.payload };
        case GET_ALL_OP_NEWS_FAILED:
            return {...state, error: action.payload, loading: false };
        case GET_ALL_OP_NEWS_SUCCESS:
            return {...state, op: action.payload, loading: false, successOP: true };
        case GET_ALL_HIGHLIGHTS_STARTED:
            return {...state, loading: action.payload };
        case GET_ALL_HIGHLIGHTS_FAILED:
            return {...state, error: action.payload, loading: false };
        case GET_ALL_HIGHLIGHTS_SUCCESS:
            return {...state, istaknuto: action.payload, loading: false, successHL: true };
        default:
            return state;
    }
}