import axios from 'axios';
//lib

import config from '../../configure';
//config

export const loadCourse = (term='') =>{ //  initial course term  keeping empty string(*)

    dispatch({type:'LOAD_COURSES_PENDING'})

    return axios.get(`${BASE_URL}/courses?term=${term}`,{
        header:{}
    }).then(results =>{
        dispatch({type:'LOAD_COURSES_SUCCESS', data:payload.results.data})
    }).catch(err =>{
        dispatch({type:'LOAD_COURSES_REJECTED',data:payload.err.message})
    })

}

export const getCourse = (id)=>{
    return(dispatch)=>{
        dispatch({
            type:'LAOD_COURSE_PENDING'
        })
        return axios.get(`${BASE_URL}/courses?term?=${id}`,{
            
        }).then(results=>{
            dispatch({
                type:'LOAD_COURSE_SUCCESS', payload:results.data
                })
        }).catch(err=>{
            dispatch({
                type:'LOAD_COURSE_REJECTED',payload:err.message
            })
        })
    }

}

export const saveCourse = (values)=>{
    let _id ='';
    let _method ='post';

        if(values.id){
            _id = values.id
            _method ='put'
        }

        return(dispatch)=>{
            return axios({
                method:_method,
                url:`${BASE_URL}/courses/${_id}`,
                data:values,
                header:{} //javascript web token on header authencation who am i
                           
            }).then(results=>{
                //err check
                    if(results.data.status){
                        dispatch({
                            type:'SAVE_COURSE_REJECTED', payload:results.data.message
                        })
                    }else{
                        dispatch({
                            type:'SAVE_COURSE_SUCCESS'
                        })
                    }
            }).catch(err =>{
                dispatch({
                    type:'SAVE_COURSE_REJECTED', payload: err.message
                })
            })
        }
}
export const deleteCourse = (id)=>{
    return(dispatch)=>{
        return axios.delete(`${BASE_URL}/courses/${id}`,{
            header:{authorization:'emptystring'}
        }).then(results =>{
            dispatch({
                type:'DELETE_COURSE_SUCCESS'
            })
        }).catch(err =>{
            dispatch({
                type:'DELETE_COURSE_REJECTED', payload: err.message
            })
        })
    }
}
export const resetStatus = ()=>{
    return (dispatch)=>{
        dispatch({type:'SAVE_COURSE_SUCCESS'})
    }
}