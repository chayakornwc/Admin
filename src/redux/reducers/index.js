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
import courseOrderReducers from './courseOrderReducers'
import analysisReducers from './analysisReducers'
import UserTypesReducers from './UserTypesReducers'
const rootReducers = combineReducers({
    form: formReducer,
    userReducers,
    courseReducer,
    authReducers,
    periodReducers,
    operationRoomReducers,
    attendeeReducers,
    ExaminationReducers,
    certificationReducers,
    courseOrderReducers,
    analysisReducers,
    UserTypesReducers
});
export default rootReducers;    