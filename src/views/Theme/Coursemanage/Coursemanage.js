import React, {Component} from 'react';
<<<<<<< HEAD
import {
   Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
<<<<<<< HEAD
import {loadCourse} from '../../../redux/actions/courseActions';

class Coursemanage extends Component {
 
  ComponentDidMount(){
    this.props.dispatch(loadCourse());
  }
  
=======
=======

>>>>>>> 6f32e7558e88a54df0e34a6125e1869cb776dad0
import {connect} from 'react-redux'

import { loadCourse, getCourse, saveCourse,deleteCourse, resetStatus } from '../../../redux/actions/courseActions';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
import CourseTable from '../../../components/course/CourseTable';
import CourseForm from '../../../components/course/CourseForm';
import { Modal, ModalHeader } from 'reactstrap';
const alertify = require('alertify.js')
class Coursemanage extends Component {
  state = {
    modal:false,
    modalTitle:''
    }
    
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modalToggle = this.modalToggle.bind(this);

  }
 
    componentDidMount(){
       this.props.dispatch(loadCourse())
      
    }
   
    handleEdit(id){
      this.props.dispatch(resetStatus())
      this.setState({modalTitle:'แก้ไข'})
      this.props.dispatch(getCourse(id)).then(()=>{
      this.modalToggle()
      })
    }
    handleSubmit(){
      this.props.dispatch(saveCourse(values)).then(() => {
        if (!this.props.courseSave.isRejected) {
            this.toggle()
            this.props.dispatch(loadCourse())
        }
    })
    }
<<<<<<< HEAD
    
>>>>>>> 3f0cd9eaf826fd82eb126031e36e1e3a51bea086
=======
    modalToggle(){
      this.setState({
        modal:!this.state.modal
      })
    }
   
>>>>>>> 6f32e7558e88a54df0e34a6125e1869cb776dad0
  render() {
   
    const {course, courses, courseDelete, courseSave} = this.props

      if(courses.isRejected){
        return<div>{courses.data}</div>
      }
      
    
    return (
      <div className="animated fadeIn"> 
<<<<<<< HEAD
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="icon-note"></i> จัดการ หลักสูตร <a href="/#/course/register"><i className="icon-plus float-right"></i></a>
              </CardHeader>
              <CardBody>
                <Table hover striped responsive >
               
                  <thead>
                  <tr>
                    <th>ชื่อหลักสูตร</th>
                    <th>วันที่ลงทะเบียน / ปรับปรุง</th>
                    <th>โดย</th>
                    <th>สถานะ</th>
                    <th className="text-center"><i className="icon-settings "></i></th>
                  </tr>
                  </thead>
                  <tbody>
<<<<<<< HEAD
                   { courses.data && course.data.map() } 
                  {/* <tr>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">ใช้งาน</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">ระงับการใช้งาน</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr> */}
=======
                  {courses.data && courses.data.map(e =>{
                    return(
                      <tr key={e.course_id}>
                        <td>{e.course_name+' ('}{e.course_nameEng+') '}</td>
                        <td>{moment(e.time_stamp).format('lll')}</td>
                        <td>ไม่ระบุ</td>
                        <td><Badge color={statusColor(e.course_status)}>{statusName(e.course_status)}</Badge></td>
                        <td className="text-center"><i onClick={this.handleEdit} className="fa fa-edit"></i>{' '}<i onClick={this.handleDelete} className="fa fa-times"></i></td>
                      </tr>
                    )
                  })}                
>>>>>>> 3f0cd9eaf826fd82eb126031e36e1e3a51bea086
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row> 
=======
        <CourseTable data={courses.data} buttonEdit={this.handleEdit} buttonDelete={this.handleDelete} />

        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className="modal-primary" autoFocus={false}  >
          <ModalHeader toggle={this.modalToggle}>แก้ไขหลักสูตร</ModalHeader>
                    {/* เรียกใช้งาน Component UserForm และส่ง props ไปด้วย 4 ตัว */}
                    <CourseForm  data={course.data}  courseSave={courseSave} onSubmit={this.handleSubmit} onToggle={this.modalToggle} />
          </Modal>
>>>>>>> 6f32e7558e88a54df0e34a6125e1869cb776dad0
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
