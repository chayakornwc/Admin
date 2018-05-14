import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadCourse,loadExaminationBycourse, updateExamination} from '../../../redux/actions/ExaminationActions';
import {Modal} from 'reactstrap';
import ExamTable from './Utils/Table';
import ExaminationForm from './Utils/ExaminationForm'
import Loader from '../../../components/Utils/Loader';
const alertify = require('alertify.js');
class ExamWarehouse extends Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({modalTitle:'แก้ไขชุดข้อสอบ'})
        this.modalToggle();  
        this.props.dispatch(loadExaminationBycourse(id)).then(()=>{
        })  
    }
   
    handleSubmit = (values)=>{
        // console.log(values);
        return this.props.dispatch(updateExamination(values)).then(()=>{
            if(!this.props.examSave.isRejected){
                alertify.success(this.props.examSave.data.message);
                this.modalToggle();  
            }
        })
    }
  render() {
    const  {courses, examination} = this.props;
    
        if(courses.isRejected){
            return <h1>{courses.data}</h1>
        }
      
    return (
    <div>
         {courses.isLoading && <Loader/>}
      <div className="animated fadeIn">
        <ExamTable buttonEdit={this.handleEdit} data={courses.data} />
        <Modal className="modal-info modal-lg" toggle={this.modalToggle} isOpen={this.state.modal}>
           {examination.data && <ExaminationForm buttonSubmit={this.handleSubmit} onToggle={this.modalToggle} Loading={examination.isLoading} modalTitle={this.state.modalTitle} data={examination.data} /> } 
        </Modal>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
        courses:state.courseReducer.courses,
        examination:state.ExaminationReducers.examination,
        examSave:state.ExaminationReducers.examSave
    }
}
export default connect(mapStateToProps)(ExamWarehouse);
