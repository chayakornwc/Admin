const initialState = {
    attendsBoard:{data:null, isLoading:true, isRejected: false},
    
}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_ANALYSISATTENDS_PENDING':
        return {...state, attendsBoard:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_ANALYSISATTENDS_SUCCESS':
        return{...state, attendsBoard:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_ANALYSISATTENDS_REJECTED':
        return{...state, attendsBoard:{data:action.payload, isLoading:false, isRejected:true}}


        default: 
        return state
    }
}