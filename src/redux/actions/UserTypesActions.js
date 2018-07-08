import axios from 'axios'
import config from '../../configure'


const BASE_URL = config.BASE_URL


export const loadTypes = () => {
    return (dispatch) => {
       
        dispatch({ type: 'LOAD_USERTYPES_PENDING' })
        return axios({
            method:'get',   
            url:`${BASE_URL}/userTypes`,
            headers:{authorization: localStorage.getItem('token')}
        }).then(results => {
            dispatch({ type: 'LOAD_USERTYPES_SUCCESS', payload: results.data })
        }).catch(err => {
            //กรณี error
            dispatch({ type: 'LOAD_USERTYPES_REJECTED', payload: err.message })
        })
    }
}
