import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducers from './userReducers';
import courseReducer from './courseReducer';
import authReducers from './authReducers';
import periodReducers from './periodReducers';
import operationRoomReducers from './operationRoomReducers';
import attendeeReducers from './attendeeReducers';
import ExaminationReducers from './ExaminationReducers';
import certificationReducers from './certificationReducers';

const rootReducers = combineReducers({
    form: formReducer,
    userReducers,
    courseReducer,
    authReducers,
    periodReducers,
    operationRoomReducers,
    attendeeReducers,
    ExaminationReducers,
    certificationReducers
    
});
export default rootReducers;    