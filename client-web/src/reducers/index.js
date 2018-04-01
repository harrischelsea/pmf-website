import { combineReducers } from 'redux';

import OPreducer from '../reducers/OPreducer';
import CurrentNews from '../reducers/CurrentNewsReducer';

export default combineReducers({
    op: OPreducer,
    currentNews: CurrentNews,
});