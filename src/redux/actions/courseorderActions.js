import axios from 'axios';
import config from '../../configure';

//config
const BASE_URL = config.BASE_URL


//ไม่แน่ใจว่าได้ใช้ไหม
export const getOrders = (id)=>{
    return(dispatch) => {
        dispatch({type:'LOAD_ORDERS_PENDING'})
        return  axios.get(`${BASE_URL}/courseorder/${id}`).then( results =>{
            dispatch({type:'LOAD_ORDERS_SUCCESS',  payload:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_ORDERS_REJECTED', payload:err.message})
        })
    }
}



export const loadOrders = (start='', end='')=>{
    return(dispatch)=>{
        dispatch({
            type:'LOAD_ORDERS_PENDING'
        })
        return axios({url:`${BASE_URL}/orders?start=${start}&end=${end}`,
            method:'get',
            headers:{authorization:localStorage.getItem('token')}
        }).then(results =>{
            dispatch({
                type:'LOAD_ORDERS_SUCCESS', 
                payload:results.data
            })
            }).catch(err=>{
                dispatch({
                    type:'LOAD_ORDERS_REJECTED',payload:err.message
                })
        })
    }
}