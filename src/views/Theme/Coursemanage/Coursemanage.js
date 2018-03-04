import React, {Component} from 'react';

import {connect} from 'react-redux'

import { loadCourse, getCourse, saveCourse,deleteCourse, resetStatus } from '../../../redux/actions/courseActions';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
import CourseTable from '../../../components/course/CourseTable';
import CourseForm from '../../../components/course/CourseForm';
import { Modal } from 'reactstrap';
const alertify = require('alertify.js')
class Coursemanage extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

  }
    state = {
      modal:false,
      modalTitle:''
      }
      
    componentDidMount(){
       this.props.dispatch(loadCourse())
      
    }
   
    handleEdit(){
      this.props.dispatch(resetStatus())
      this.setState({modalTitle:'แก้ไข'})
      this.props.dispatch(getCourse(id)).then(()=>{
      this.modalToggle()
      })
    }
    handleSubmit(){
      
    }
    modalToggle(){
      this.setState({
        modal:!this.state.modal
      })
    }
   
  render() {
   
    const {course, courses, courseDelete, courseSave, Target} = this.props

      if(courses.isRejected){
        return<div>{courses.data}</div>
      }
  
    
    return (
      <div className="animated fadeIn"> 
        <CourseTable data={courses.data} buttonEdit={this.handleEdit} buttonDelete={this.handleDelete} />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-primary" autoFocus={false}  style={ModalStyle}>
                   
                    {/* เรียกใช้งาน Component UserForm และส่ง props ไปด้วย 4 ตัว */}
                    <CourseForm  header="แก้ไขหลักสูตร"   data={course.data} courseSave={courseSave} onSubmit={this.handleSubmit} onToggle={this.modalToggle} />
          </Modal>
      </div>
    )
  }

  handleDelete=(id)=>{
    confirmModalDialog({
      show:true,
      title:'ยืนยันการลบ',
      confirmLabel:'ยืนยัน ลบทันที',
      message:'คุณต้องการลบใช่หรือไม่',
      onConfirm: () => this.props.dispatch(deleteCourse(id)).then(() => {
        this.props.dispatch(loadCourse())
        if(!this.props.courseDelete.isRejected){
            { alertify.alert('ลบข้อมูลหลักสูตรเรียบร้อยแล้ว').set('basic', true)}
        }
        })
      })
  }

}
  

  function mapStateToProps(state){
    return{
      courses:state.courseReducer.courses,
      course:state.courseReducer.course,
      courseDelete:state.courseReducer.courseDelete,
      courseSave:state.courseReducer.courseSave
    }
  }
  export default connect(mapStateToProps)(Coursemanage)   
