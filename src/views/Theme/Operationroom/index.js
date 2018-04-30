import React, { Component } from 'react'


import {connect} from 'react-redux'
import { loadRooms, getRoom, saveRoom, DeleteRoom, resetSaveStatus } from '../../../redux/actions/operationRoomActions';
export default class Operationroom extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
            modalTitle:''
        }
    }

    modalToggle(){
        this.setState({
          modal:!this.state.modal
        })
      }
    componentDidMount(){

    }
  render() {

    return (
      <div className="animated fadeIn">
        
      </div>
    )
  }
}
