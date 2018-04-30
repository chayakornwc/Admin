
import axios from 'axios';
//lib
import config from '../../configure';


const BASE_URL = config.BASE_URL
export const loadRooms = (term='')=>{
    return(dispatch)=>{
        dispatch({type:'LOAD_OPERATIONROOMS_PENDING'})
        return axios({
                url:`${BASE_URL}/operation_room?term=${term}`,
                method:'get',
                headers: { authorization: localStorage.getItem('token') }
        }).then(results =>{
            dispatch({type:'LOAD_OPERATIONROOMS_SUCCESS', payload:results.data})
           
        }).catch(err=>{
            dispatch({type:'LOAD_OPERATIONROOMS_REJECTED', payload:err.message})
        })
    }
}
export const getRoom = (id)=>{
    return(dispatch)=>{
        dispatch ({type:'LOAD_OPERATIONROOM_PENDING'})
        return axios({
            url:`${BASE_URL}/operation_room/${id}`,
            method:'get',
            headers: { authorization: localStorage.getItem('token') }
        }).then(results =>{
            dispatch({type:'LOAD_OPERATIONROOM_SUCCESS',payload:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_OPERATIONROOM_REJECTED', payload:err.message})
        })
    }
}
export const SaveRoom = (values)=>{
    let _id = '';
    let  _method='post';

    if(values.room_id){
        _id = values.room_id
        _method ='put'
    }
    return(dispatch)=>{
        dispatch({type:'SAVE_OPERATIONROOM_PENDING'})
        return axios({
            url:`${BASE_URL}/operation_room/${id}`,
            method:_method,
            headers:{ authorization:localStorage.getItem('token') }
        }).then(results=>{
                if(results.data.status){
                    dispatch({type:'SAVE_OPERATIONROOM_REJECTED', payload:results.data.message})
                }else{
                    dispatch({type:'SAVE_OPERATIONROOM_SUCCESS', payload:results.data})
                }
        }).catch(err=>{
            dispatch({type:'LOAD_OPERATIONROOM_REJECTED', payload:err.message})
        })
    }

}
export const DeleteRoom = (id)=>{
        return(dispatch)=>{
            dispatch({type:'DELETE_OPERATIONROOM_PENDING'})
            return axios({
                url:`${BASE_URL}/operation_room/${id}`,
                method:'delete',
                headers:{ authorization:localStorage.getItem('token')}
            }).then(results =>{
                dispatch({type:'DELETE_OPERATIONROOM_SUCCESS'})
            }).catch(err=>{
                dispatch({
                    type:'DELETE_OPERATIONROOM_REJECTED', payload:err.message
                })
            })
        }
}
export const resetSaveStatus = ()=>{
    return(dispatch)=>{
        dispatch({type:'SAVE_OPERATIONROOM_SUCCESS'})
    }
}