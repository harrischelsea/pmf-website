import axios from 'axios';

export const GET_ALL_OP_NEWS_STARTED = "GET_ALL_OP_NEWS_STARTED";
export const GET_ALL_OP_NEWS_FAILED = "GET_ALL_OP_NEWS_FAILED";
export const GET_ALL_OP_NEWS_SUCCESS = "GET_ALL_OP_NEWS_SUCCESS";

export const getAllOPstarted = (loading) => {
    return {
        type: GET_ALL_OP_NEWS_STARTED,
        payload: loading
    }
};

export const getAllOPfailed = (error) => {
    return {
        type: GET_ALL_OP_NEWS_FAILED,
        payload: error
    }
};

export const getAllOPsuccess = (op) => {
    return {
        type: GET_ALL_OP_NEWS_SUCCESS,
        payload: op
    }
};

export  const getAllOP = () => dispatch => {
    dispatch(getAllOPstarted(true));
    axios.get('/api/get-all-op')
        .then(res => {
            dispatch(getAllOPsuccess(res.data));
        })
        .catch( () => getAllOPfailed('Err!'));
};