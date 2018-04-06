import axios from 'axios';

export const GET_ALL_OP_NEWS_STARTED = "GET_ALL_OP_NEWS_STARTED";
export const GET_ALL_OP_NEWS_FAILED = "GET_ALL_OP_NEWS_FAILED";
export const GET_ALL_OP_NEWS_SUCCESS = "GET_ALL_OP_NEWS_SUCCESS";
export const GET_ALL_HIGHLIGHTS_STARTED = "GET_ALL_HIGHLIGHTS_STARTED";
export const GET_ALL_HIGHLIGHTS_FAILED = "GET_ALL_HIGHLIGHTS_FAILED";
export const GET_ALL_HIGHLIGHTS_SUCCESS = "GET_ALL_HIGHLIGHTS_SUCCESS";
export const GET_ALL_SS_STARTED = "GET_ALL_SS_STARTED";
export const GET_ALL_SS_FAILED = "GET_ALL_SS_FAILED";
export const GET_ALL_SS_SUCCESS = "GET_ALL_HSS_SUCCESS";

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

export const getAllHighlightsStarted = (loading) => {
    return {
        type: GET_ALL_HIGHLIGHTS_STARTED,
        payload: loading
    }
};

export const getAllHighlightsFailed = (error) => {
    return {
        type: GET_ALL_HIGHLIGHTS_FAILED,
        payload: error
    }
};

export const getAllHighlightsSuccess = (istaknuto) => {
    return {
        type: GET_ALL_HIGHLIGHTS_SUCCESS,
        payload: istaknuto
    }
};

export  const getAllHighlights = () => dispatch => {
    dispatch(getAllHighlightsStarted(true));
    axios.get('/api/get-all-highlights')
        .then(res => {
            dispatch(getAllHighlightsSuccess(res.data));
        })
        .catch( () => getAllHighlightsFailed('Err!'));
};

export const getAllSSstarted = (loading) => {
    return {
        type: GET_ALL_SS_STARTED,
        payload: loading
    }
};

export const getAllSSfailed = (error) => {
    return {
        type: GET_ALL_SS_FAILED,
        payload: error
    }
};

export const getAllSSsuccess = (ss) => {
    return {
        type: GET_ALL_SS_SUCCESS,
        payload: ss
    }
};

export  const getAllSS = () => dispatch => {
    dispatch(getAllSSstarted(true));
    axios.get('/api/get-all-ss')
        .then(res => {
            dispatch(getAllSSsuccess(res.data));
        })
        .catch( () => getAllSSfailed('Err!'));
};