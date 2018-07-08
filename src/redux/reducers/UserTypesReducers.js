//กำหนดค่าเริ่มต้นให้ state เช่น เช็คว่าข้อมูลที่ดึงมา error หรือไม่เราก็จะเช็คจาก isRejected
//ซึ่งถ้าเราไม่กำหนด state  เริ่มต้นก็จะไม่มี object ชื่อ isRejected ให้เรียกใช้งาน
const initialState = {
    UserTypes: { data: null, isLoading: true, isRejected: false },
}

export default (state = initialState, action) => {
    switch (action.type) {
        //เก็บ state การดึงข้อมูลผู้ใช้ทั้งหมด
        case 'LOAD_USERTYPES_PENDING':
            return { ...state, UserTypes: { data: null, isLoading: true, isRejected: false } }
        case 'LOAD_USERTYPES_SUCCESS':
            return { ...state, UserTypes: { data: action.payload, isLoading: false, isRejected: false } }
        case 'LOAD_USERTYPES_REJECTED':
            return { ...state, UserTypes: { data: action.payload, isLoading: false, isRejected: true } }
        default:
            return state
    }
}