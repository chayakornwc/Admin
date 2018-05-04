import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadCourse} from '../../../redux/actions/ExaminationActions';

import ExamTable from './Utils/Table';

class ExamWarehouse extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.dispatch(loadCourse());
    }
  render() {
    const  {courses} = this.props;
    console.log(courses)
        if(courses.isRejected){
            return <h1>{courses.data}</h1>
        }
    return (
      <div className="animated fadeIn">
        
        
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
        courses:state.courseReducer.courses
        
    }
}
export default connect(mapStateToProps)(ExamWarehouse);
