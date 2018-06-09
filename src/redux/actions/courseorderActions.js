import axios from 'axios';
import config from '../../configure';

//config
const BASE_URL = config.BASE_URL

export const getOrders = (id)=>{
    return(dispatch) => {
        dispatch({type:'LOAD_ORDERS_PENDING'})
        return  axios.get(`${BASE_URL}/courseorder/${id}`).then( results =>{
            dispatch({type:'LOAD_ORDERS_PENDING',  payload:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_ORDERS_PENDING', payload:err.message})
        })
    }
}