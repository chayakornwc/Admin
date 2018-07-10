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
export const DeleteUserType = (id) =>{
    return (dispatch)=>{
        dispatch({
            type:"DELETE_USERTYPES_PENDING"
        })
        return axios({
            method:'delete',
            url:`${BASE_URL}/userTypes/${id}`,
            headers:{authorization: localStorage.getItem('token')}
        }).then(results=>{
            dispatch({
                type:"DELETE_USERTYPES_SUCCESS", payload: results.data.message
              
            })
            console.log(results)
        }).catch(err=>{
            dispatch({
                type:'DELETE_USERTYPES_REJECTED', payload: err.message
            })
        })
    }
}
export const UpdatePermiss = (values)=>{
    var _method = 'post'
    var _id = '';
    var _value = {
        permission:values.value
    }
    if (values.usergroup){
        var _id = values.usergroup
        _method = 'put'
    }else{
        _value = values 
    }
   
   
    
    return (dispatch)=>{
        dispatch({
            type:"SAVE_USERTYPES_PENDING"
        })
        return axios({
            method:_method,
            url:`${BASE_URL}/userTypes/${_id}`,
            data:_value,
            headers:{authorization: localStorage.getItem('token')}
        }).then(results=>{
            dispatch({
                type:"SAVE_USERTYPES_SUCCESS", payload: results.data
            })
        }).catch(err=>{
            dispatch({
                type:'SAVE_USERTYPES_REJECTED', payload: err.message
            })
        })
    }
}
