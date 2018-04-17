import axios from 'Axios';
import config from '../../configure';
import actions from 'redux-form/lib/actions';
//config
const BASE_URL = config.BASE_URL

export const getAttendee = (id)=>{
    return(dispatch) => {
        dispatch({type:'LOAD_ATTENDEE_PENDING'})
        return  axios.get(`${BASE_URL}/attendee/${id}`).then( results =>{
            dispatch({type:'LOAD_ATTENDEE_SUCCESS', payload:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_ATTENDEE_REJECTED', payload:err.message})
        })
    }
}