import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const loadCourse = (term='') => { //  initial course term  keeping empty string(*)
    return(dispatch)=>{
        dispatch({type:'LOAD_COURSES_PENDING'})
        return axios.get(`${BASE_URL}/examinationbycourse?term=${term}`,{
            headers:{authorization:localStorage.getItem('token')}
        }).then(results =>{
            dispatch({type:'LOAD_COURSES_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_COURSES_REJECTED',payload: err.message})
        })
    }
}
// only one action dispatch courseReducers

