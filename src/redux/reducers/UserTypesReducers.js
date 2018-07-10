

const initialState = {
    UserTypes: { data: null, isLoading: true, isRejected: false },
    saveUserTypes:{data:null, isLoading:true, isRejected:false },
    deleteUserTypes:{data:null, isLoading:true, isRejected:false}
}

export default (state = initialState, action) => {
    switch (action.type) {
        //เก็บ state การดึงข้อมูลผู้ใช้ทั้งหมด
        case 'LOAD_USERTYPES_PENDING':
            return {...state, UserTypes: { data: null, isLoading: true, isRejected: false }}
        case 'LOAD_USERTYPES_SUCCESS':
            return {...state, UserTypes: { data: action.payload, isLoading: false, isRejected: false }}
        case 'LOAD_USERTYPES_REJECTED':
            return {...state, UserTypes: { data: action.payload, isLoading: false, isRejected: true }}

        case 'SAVE_USERTYPES_PENDING':
            return {...state, saveUserTypes:{data:null, isLoading:true, isRejected:false}}
        case 'SAVE_USERTYPES_SUCCESS':
            return {...state, saveUserTypes:{data:action.payload, isLoading:false, isRejected:false}}
        case 'SAVE_USERTYPES_REJECTED':
            return {...state, saveUserTypes:{data:action.payload, isLoading:false, isRejected:true}}
        
        case 'DELETE_USERTYPES_PENDING':
            return  {...state, deleteUserTypes:{data:null, isLoading:true, isRejected:false}}
        case 'DELETE_USERTYPES_SUCCESS':
            return  {...state, deleteUserTypes:{data:action.payload, isLoading:false, isRejected:false}}
        case 'DELETE_USERTYPES_REJECTED':
            return  {...state, deleteUserTypes:{data:action.payload,  isLoading:false, isRejected:true}}
        default:
            return state
    }
}