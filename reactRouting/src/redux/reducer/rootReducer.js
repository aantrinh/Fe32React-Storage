import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import userReducer from './userReducer.jsx'

const rootReducer = combineReducers({
    movieReducer,
    userReducer //state trong mapStateToProps <=> state.userReducer
});
export default rootReducer;