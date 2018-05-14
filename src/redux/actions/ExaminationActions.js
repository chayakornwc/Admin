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
export const loadNullexam = ()=>{
    return (dispatch)=>{
        dispatch({type:'LOAD_NULLEXAM_PENDING'})
        return axios.get(`${BASE_URL}/nullexamination`,{
            headers:{authorization:localStorage.getItem('token')}
        }).then(results =>{
            dispatch({type:'LOAD_NULLEXAM_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_NULLEXAM_REJECTED',payload: err.message})
        })
    }
}
export const loadExaminationBycourse = (id)=>{
    return (dispatch)=>{
        dispatch({type:'LOAD_EXAMINATIONBYCOURSE_PENDING'})
        return axios({
            method:'get',
            url:`${BASE_URL}/examination/${id}`,
            headers:{authorization:localStorage.getItem('token')}
        }).then(results=>{
            dispatch({type:'LOAD_EXAMINATIONBYCOURSE_SUCCESS', payload:results.data})
        }).catch(err=>{
            dispatch({type:'LOAD_EXAMINATIONBYCOURSE_REJECTED', payload: err.message})
        })
    }
}
export const saveExamination = ()=>{
    let _id ='';
    let _method ='post';
        if(values.exam_id){
            _id = values.exam_id
            _method ='put'
        }
    return (dispatch)=>{
        dispatch({type:'SAVE_EXAMINATION_PENDING'})
        return axios({url:`${BAST_URL}/registerexamination/${id}`,
        method:_method,
        headers:{authorization:localStorage.getItem('token')}
        }).then(results =>{
            dispatch({type:'SAVE_EXAMINATION_SUCCESS', payload:results.data})
        }).catch(err=>{
            dispatch({type:'SAVE_EXAMINATION_REJECTED',payload: err.message})
        })
    }
}
export const registerexamination = (values)=>{
    console.log(values)
    return (dispatch)=>{
        dispatch({type:'SAVE_EXAMINATION_PENDING'})
        return axios({url:`${BASE_URL}/registerexamination/`,
        method:'post',
        data:values,
        headers:{authorization:localStorage.getItem('token')}
        }).then(results =>{
            dispatch({type:'SAVE_EXAMINATION_SUCCESS', payload:results.data})
        }).catch(err=>{
            dispatch({type:'SAVE_EXAMINATION_REJECTED',payload: err.message})
        })
    }
}
export const updateExamination = (values)=>{
    var id = values.course_id;
    return (dispatch)=>{
        dispatch({type:'SAVE_EXAMINATION_PENDING'})
        return axios({url:`${BASE_URL}/registerexamination/update/${id}`,
        method:'post',
        data:values,
        headers:{authorization:localStorage.getItem('token')}
        }).then(results =>{
            dispatch({type:'SAVE_EXAMINATION_SUCCESS', payload:results.data})
        }).catch(err=>{
            dispatch({type:'SAVE_EXAMINATION_REJECTED',payload: err.message})
        })
    }
}
    
   
    
// only one action dispatch courseReducers

