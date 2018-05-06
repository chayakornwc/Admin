

const initialState = {
    nullExams:{data:null, isLoading:true, isRejected: false},
    exam:{data:null, isLoading:true, isRejected:false},
    examSave:{data:null, isLoading:true, isRejected:false},
    ExamDelete:{data:null, isLoading:true, isRejected:false}
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

    
        default: 
        return state
    }
}