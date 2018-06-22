const initialState = {
    courseOrders:{data:null, isLoading:true, isRejected: false},
}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_ORDERS_PENDING':
        return {...state, courseOrders:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_ORDERS_SUCCESS':
        return{...state, courseOrders:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_ORDERS_REJECTED':
        return{...state, courseOrders:{data:action.payload, isLoading:false, isRejected:true}}

        

        default: 
        return state
    }
}