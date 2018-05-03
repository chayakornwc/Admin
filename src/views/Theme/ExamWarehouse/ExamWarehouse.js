import React, { Component } from 'react'
import {connect} from 'react-redux';
class  extends Component {
    
    constructor(props){
        super(props);
    }
    
  render() {
    return (
      <div className="animated fadeIn">
        
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
        courses:state.courseReducer.courses,
        operation_rooms: state.operationRoomReducers.operation_rooms
    }
}
export default connect(mapStateToProps)(ExamWarehouse);
