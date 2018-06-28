import axios from 'axios';
import config from '../../configure';

//config
const BASE_URL = config.BASE_URL

export const analysisAttends = (id)=>{
    return(dispatch) => {
        dispatch({type:'LOAD_ANALYSISATTENDS_PENDING'})
        return  axios({
            url:`${BASE_URL}/analysis/attends/${id}`,
            method:'get',
            headers:{authorization:localStorage.getItem('token')}
        }).then( results =>{
            dispatch({type:'LOAD_ANALYSISATTENDS_SUCCESS',  payload:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_ANALYSISATTENDS_REJECTED', payload:err.message})
        })
    }
}
//GET SURVEY BY PERIOD ID
export const getPeriodSurvey = (id)=>{
    return(dispatch) =>{
        dispatch({
            type:'LOAD_PERIODSURVEY_PENDING'
        })
        return axios({
            url:`${BASE_URL}/periodsurvey/${id}`,
            method:'get',
            headers:{authorization:localStorage.getItem('token')}
        }).then(results=>{
            dispatch({
                type:'LOAD_PERIODSURVEY_SUCCESS',
                payload:results.data
            }).catch(err=>{
                dispatch({
                    type:'LOAD_PERIODSURVEY_REJECTED',
                    payload:err.message
                })
            })
        })
    }
}