import React, { Component } from 'react'
import {connect} from 'react-redux'

import { loadRooms, getRoom, saveRoom, DeleteRoom, resetSaveStatus } from '../../../redux/actions/operationRoomActions';
import {OPRTable} from './Utils/Table';
import { Modal } from 'reactstrap';

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
   
  render() {
      const {operation_rooms, operation_roomDelete, operation_roomSave} = this.props
     
      if(operation_rooms.isRejected){
        return <h1>{operation_rooms.data}</h1>
      }
    return (
      <div className="animated fadeIn">
        <OPRTable data={operation_rooms.data}/>
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