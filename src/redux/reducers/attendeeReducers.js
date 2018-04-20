const initialState = {
    attenders:{data:null, isLoading:true, isRejected: false},
    attender:{data:null, isLoading:true, isRejected:false},
    attenderSave:{data:null, isLoading:true, isRejected:false},
    attenderDelete:{data:null, isLoading:true, isRejected:false}
}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_ATTENDERS_PENDING':
        return {...state, attenders:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_ATTENDERS_SUCCESS':
        return{...state, attenders:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_ATTENDERS_REJECTED':
        return{...state, attenders:{data:action.payload, isLoading:false, isRejected:true}}

         // การดึงข้อมูลตามไอดีที่ส่งไป 
        case'LOAD_ATTENDER_PENDING':
        return {...state, attender:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_ATTENDER_SUCCESS':
        return{...state, attender:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_ATTENDER_REJECTED':
        return{...state, attender:{data:action.payload, isLoading:false, isRejected:true}}

       //การลบข้อมูล
        case'DELETE_ATTENDER_SUCCESS':
        return{...state, attenderDelete:{data:null, isLoading:false, isRejected:false}}
        case'DELETE_ATTENDER_REJECTED':
        return{...state, attenderDelete:{data:action.payload, isLoading:false, isRejected:true}}

        //การบันทึกข้อมูล  
        case'SAVE_ATTENDER_SUCCESS':
        return{...state, attenderSave:{data:null, isLoading:false, isRejected:false}}
        case'SAVE_ATTENDER_REJECTED':
        return{...state, attenderSave:{data:action.payload, isLoading:false, isRejected:true}}

        default: 
        return state
    }
}