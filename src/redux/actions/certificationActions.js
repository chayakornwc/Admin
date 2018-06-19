import axios from 'axios';
//lib
import config from '../../configure';

//config
const BASE_URL = config.BASE_URL

// loadPeriod for loops
export const loadCertification = (term='')=>{
    return(dispatch) =>{
        dispatch({type:'LOAD_CERTIFICATION_PENDING'})
        return axios.get(`${BASE_URL}/certification?term=${term}`,{
            headers:{authorization:localStorage.getItem('token')}
            }).then(results =>{
                dispatch({type:'LOAD_CERTIFICATION_SUCCESS', payload:results.data})  
            }).catch(err=>{
                dispatch({type:'LOAD_CERTIFICATION_REJECTED',payload: err.message})
            })  
    }
}

export const loadCertificationByperiodId = (id)=>{
    return(dispatch)=>{
        dispatch({type:'LOAD_CERTIFICATIONBYPERIOD_PENDING'})
        return(
            axios({
                method:'get',
                url:`${BASE_URL}/certification/period/${id}`,
                headers:{authorization:localStorage.getItem('token')},
            }).then(results =>{
                dispatch({
                    type:'LOAD_CERTIFICATIONBYPERIOD_SUCCESS',
                    payload:results.data
                })
            }).catch(err=>{
                dispatch({
                    type:'LOAD_CERTIFICATIONBYPERIOD_REJECTED',
                    payload:err.message
                })
            })
        )
    }
}