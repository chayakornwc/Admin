import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import courseReducer from './courseReducer';
import authReducers from './authReducers';
import periodReducers from './periodReducers';
const rootReducers = combineReducers({
    form: formReducer,
    courseReducer,
    authReducers,
    periodReducers,
});
export default rootReducers;