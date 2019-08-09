import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import apiStatusReducer from './apiStatusReducer';

const rootReducers = combineReducers({
    courses, authors, apiStatusReducer
})

export default rootReducers;