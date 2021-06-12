import {combineReducers} from 'redux';
import {userReducer} from './fetchReducer';

export default combineReducers({
    user:userReducer
}) 