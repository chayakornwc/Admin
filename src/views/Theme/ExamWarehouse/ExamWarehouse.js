import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadCourse,loadExaminationBycourse} from '../../../redux/actions/ExaminationActions';
import {Modal} from 'reactstrap';
import ExamTable from './Utils/Table';
import ExaminationForm from './Utils/ExaminationForm'
import Loader from '../../../components/Utils/Loader';
class ExamWarehouse extends Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
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
       console.log(values)
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
        <Modal className="modal-warning modal-lg" toggle={this.modalToggle} isOpen={this.state.modal}>
            <ExaminationForm buttonSubmit={this.handleSubmit} onToggle={this.modalToggle} Loading={examination.isLoading} modalTitle={this.state.modalTitle} data={examination && examination.data} />
        </Modal>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
        courses:state.courseReducer.courses,
        examination:state.ExaminationReducers.examination
    }
}
export default connect(mapStateToProps)(ExamWarehouse);
