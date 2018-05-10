import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadCourse} from '../../../redux/actions/ExaminationActions';
import {Modal} from 'reactstrap';
import ExamTable from './Utils/Table';
import ExaminationForm from './Utils/ExaminationForm'

class ExamWarehouse extends Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
            ModalTitle:'',
            modal:false
        }
    }
    componentDidMount(){
        this.props.dispatch(loadCourse());
    }
    modalToggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }
    handleEdit=(id)=>{
        this.props.dispatch(resetStatus())
        this.setState({modalTitle:'แก้ไข'})
        this.props.dispatch(getPeriod(id)).then(()=>{
        this.modalToggle();
            
        })  
    }
   
    handleSubmit = (values)=>{
       
    }
  render() {
    const  {courses} = this.props;
    
        if(courses.isRejected){
            return <h1>{courses.data}</h1>
        }
    return (
      <div className="animated fadeIn">
        <ExamTable buttonEdit={this.handleEdit} data={courses.data} />
        <Modal isOpen={this.state.modal}>
            <ExaminationForm  />
        </Modal>
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
