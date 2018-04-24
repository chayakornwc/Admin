import axios from 'axios';
import config from '../../configure';

//config
const BASE_URL = config.BASE_URL

export const getAttendee = (id)=>{
    return(dispatch) => {
        dispatch({type:'LOAD_ATTENDERS_PENDING'})
        return  axios.get(`${BASE_URL}/attendee/${id}`).then( results =>{
            dispatch({type:'LOAD_ATTENDERS_SUCCESS',  payload:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_ATTENDERS_REJECTED', payload:err.message})
        })
    }
}
export const saveAttendee = (values)=> {
    let _id =values.per_id;
    let _method ="post";
    let _route ="attendee"
        if(values.order_id){
            _id = values.order_id;
            method ="put";
            _route ="attender"
        }

        return (dispatch) => {
            return axios({
                method:_method,
                url:`${BASE_URL}/${_route}/${_id}`,
                data:values,
                headers:{authorization:localStorage.getItem('token')}
            }).then(results =>{
                if (results.data.status){
                    dispatch({type:'SAVE_ATTENDER_REJECTED' ,payload:results.data.message})
                } else{
                    dispatch({type:'SAVE_ATTENDER_SUCCESS', payload:results})
                }
            }).catch(err =>{
                //system failure
                dispatch({type:'SAVE_ATTENDER_REJECTED', payload:err.message})
            })
        }

}

export const deleteAttendee = (id) => {
    return (dispatch) => {
        axios({
            method:'delete',
            url:`${BASE_URL}/attender/${id}`,
            header:{authorization:localStorage.getItem('token')}
        }).then(results =>{
                dispatch({
                    type:'DELETE_ATTENDER_SUCCESS'
                }).catch(error =>{
                    dispatch({
                        type:'DELETE_ATTENDER_REJECTED', payload:error.message
                    })
                })
        })
    }
}
export const resetStatus = () =>{
    return (dispatch) =>{
        dispatch({type:'SAVE_ATTENDER_SUCCESS'})
    }
}

 