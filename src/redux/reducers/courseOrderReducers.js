const initialState = {
    courseOrders:{data:null, isLoading:true, isRejected: false},
    usercourseOrders:{data:null, isLoading:true, isRejected:false}
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
        case`LOAD_USERORDERS_PENDING`:
        return{...state, usercourseOrders:{data:null, isLoading:true, isRejected:false}}
        case`LOAD_USERORDERS_SUCCESS`:
        return{...state, usercourseOrders:{data:action.payload, isLoading:false, isRejected:false}}
        case`LOAD_USERORDERS_REJECTED`:
        return{...state, usercourseOrders:{data:action.payload, isLoading:false, isRejected:false}}
        

        default: 
        return state
    }
}