import React, { Component } from 'react'
import {connect} from 'react-redux'

import { loadRooms, getRoom, saveRoom, DeleteRoom, resetSaveStatus } from '../../../redux/actions/operationRoomActions';
import {OPRTable} from './Utils/Table';
import { Modal } from 'reactstrap';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
const alertify = require('alertify.js');

class Operationroom extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
            modalTitle:''
        }
        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle(){
        this.setState({
          modal:!this.state.modal
        })
      }
    componentDidMount(){
      this.props.dispatch(loadRooms());
    }
    handleDelete=(id)=>{
      confirmModalDialog({
          show:true,
          title:'ยืนยันการลบ',
          confirmLabel:'ยืนยัน ลบทันที',
          message:'คุณต้องการลบข้อมูลนี้ใช่หรือไม่',
          onConfirm: () => this.props.dispatch(DeleteRoom(id)).then(() => {
              this.props.dispatch(loadRooms())
                  if(!this.props.operation_roomDelete.isRejected){
                      { alertify.alert('ลบข้อมูลห้องปฏิบัติการเรียบร้อยแล้ว')}
                  }
            })
          })
  }
  handleEdit=(id)=>{
    this.props.dispatch(resetStatus())
    this.setState({modalTitle:'แก้ไข'})
    this.props.dispatch(getPeriod(id)).then(()=>{
    this.modalToggle();
        
    })
}
  render() {
      const {operation_rooms, operation_roomDelete, operation_roomSave} = this.props
     
      if(operation_rooms.isRejected){
        return <h1>{operation_rooms.data}</h1>
      }
    return (
      <div className="animated fadeIn">
        <OPRTable buttonDelete={this.handleDelete} buttonEdit={this.handleEdit} data={operation_rooms.data}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return{
       operation_rooms:state.operationRoomReducers.operation_rooms,   
      operation_roomDelete:state.operationRoomReducers.operation_roomDelete,
      operation_roomSave:state.operationRoomReducers.operation_roomSave
   
  }
}
export default connect(mapStateToProps)(Operationroom);