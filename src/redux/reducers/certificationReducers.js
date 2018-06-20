const initialState = {
    certifications:{data:null, isLoading:true, isRejected: false},
    certificationperiod:{data:null, isLoading:true, isRejected:false},
    certificationsbyoptions:{data:null, isLoading:true, isRejected:false}
}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_CERTIFICATION_PENDING':
        return{...state, certifications:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_CERTIFICATION_SUCCESS':
        return{...state, certifications:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_CERTIFICATION_REJECTED':
        return{...state, certifications:{data:action.payload, isLoading:false, isRejected:true}}

        case'LOAD_CERTIFICATIONBYPERIOD_PENDING':
        return{...state, certificationperiod:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_CERTIFICATIONBYPERIOD_SUCCESS':
        return{...state, certificationperiod:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_CERTIFICATIONBYPERIOD_REJECTED':
        return{...state, certificationperiod:{data:action.payload, isLoading:false, isRejected:false}}

        case'LOAD_CERTIFICATIONBYOPTION_PENDING':
        return{...state, certificationsbyoptions:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_CERTIFICATIONBYOPTION_SUCCESS':
        return{...state, certificationsbyoptions:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_CERTIFICATIONBYOPTION_REJECTED':
        return{...state, certificationsbyoptions:{data:action.payload, isLoading:false, isRejected:true}}
        
        default: 
        return state
    }
}