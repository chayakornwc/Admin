import axios from 'axios';
//lib
import config from '../../configure';
import actions from 'redux-form/lib/actions';
//config
const BASE_URL = config.BASE_URL

// loadPeriod for loops
export const loadPeriods =(term='')=>{
    return(dispatch) =>{
        dispatch({type:'LOAD_PERIODS_PENDING'})
        return axios.get(`${BASE_URL}/period?term=${term}`,{
            }).then( results =>{
                dispatch({type:'LOAD_PERIODS_SUCCESS', data:results.data})  
            }).catch(err=>{
                dispatch({type:'LOAD_PERIODS_REJECTED',data: err.message})
            })  
    }
}

 // get period by id
export const getPeriod = (id)=>{
    return(dispatch) =>{
        dispatch({type:'LOAD_PERIOD_PENDING'})
        return axios.get(`${BASE_URL}/period/${id}`,{

        }).then( results=>{
            dispatch({type:'LOAD_PERIOD_SUCCESS', data:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_PERIOD_REJECTED',data:err.message})
        })
    }
}   
// add and edit period 
export const savePeriod = (values)=>{
    let _id ='';    
    let _method ='post';
        if(values.per_id){
            _id = values.per_id;
            _method='put';
        }
    
        return(dispatch)=>{
            dispatch({type:'SAVE_PERIOD_PENDING'})
            return axios({
                method:_method,
                url:`${BASE_URL}/period/${_id}`,
                data:values,
                headers: { authorization: localStorage.getItem('token') }
            }).then(results =>{
                dispatch({type:'SAVE_PERIOD_SUCCESS', data:results.data})
            }).catch(err =>{
                dispatch({type:'SAVE_PERIOD_REJECTED', data:err.message})
            })
        }
}
//delete period
export const deletePeriod = (id)=>{
    dispatch({type:'DELETE_PERIOD_PENDING'})
    return axios.delete({
        url:`${BASE_URL}/period/${id}`,
        header:{authorization:localStorage.getItem('token') }
    }).then(results =>{
        dispatch({type:'DELETE_PERIOD_SUCCESS'})
    }).catch(err=>{
        dispatch({type:'DELETE_PERIOD_REJECTED', data:err.message})
    })
}
// reset error message
export const resetStatus = () =>{
    return(dispatch)=>{
        dispatch({type:'SAVE_PERIOD_SUCCESS'})
    }
    
}