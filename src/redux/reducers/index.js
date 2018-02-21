import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import courseReducer from './courseReducer';
import authReducers from './authReducers';
const rootReducers = combineReducers({
    form: formReducer,
    courseReducer,
    authReducers,
});
export default rootReducers;