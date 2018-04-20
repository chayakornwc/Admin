import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import courseReducer from './courseReducer';
import authReducers from './authReducers';
import periodReducers from './periodReducers';
import operationRoomReducers from './operationRoomReducers';
import attendeeReuducers from './attendeeReuducers';
const rootReducers = combineReducers({
    form: formReducer,
    courseReducer,
    authReducers,
    periodReducers,
    operationRoomReducers,
    attendeeReuducers
});
export default rootReducers;