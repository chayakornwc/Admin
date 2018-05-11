

const initialState = {
    nullExams:{data:null, isLoading:true, isRejected: false},
    exam:{data:null, isLoading:true, isRejected:false},
    examSave:{data:null, isLoading:true, isRejected:false},
    ExamDelete:{data:null, isLoading:true, isRejected:false},
    examination:{data:null, isLoading:true, isRejected:false}
}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_NULLEXAM_PENDING':
        return {...state, nullExams:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_NULLEXAM_SUCCESS':
        return{...state, nullExams:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_NULLEXAM_SUCCESS':
        return{...state, nullExams:{data:action.payload, isLoading:false, isRejected:true}}

        case'SAVE_EXAMINATION_PENDING':
        return{...state, examSave:{data:null, isLoading:true, isRejected:false}}
        case'SAVE_EXAMINATION_SUCCESS':
        return{...state, examSave:{data:action.payload, isLoading:false, isRejected:false}}
        case'SAVE_EXAMINATION_REJECTED':
        return{...state,examSave:{data:action.payload, isLoading:false, isRejected:true}}
        
        case'LOAD_EXAMINATIONBYCOURSE_PENDING':
        return{...state, examination:{data:null, isLoading:true, isRejected:false} }
        case 'LOAD_EXAMINATIONBYCOURSE_SUCCESS':
        return{...state, examination:{data:action.payload, isLoading:false, isRejected:false}}
        case 'LOAD_EXAMINATIONBYCOURSE_REJECTED':
        return{...state, examination:{data:action.payload, isLoading:false, isRejected:false}}
        default: 
        return state
    }
}