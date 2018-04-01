import { combineReducers } from 'redux';

import OPreducer from '../reducers/OPreducer';

export default combineReducers({
    op: OPreducer,
});