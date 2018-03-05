import React, {Component} from 'react';
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
import {connect} from 'react-redux'

import { loadCourse, getCourse, saveCourse,deleteCourse } from '../../../redux/actions/courseActions';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
const moment = require('moment');
moment.locale('th');

class Coursemanage extends Component {
  constructor(props){
    super(props);

  }
      
    componentDidMount(){
       this.props.dispatch(loadCourse())
      
    }
   
    handleEdit(){
      alert('eidt');
    }
    handleDelete(id){
      alert('delete');
    }
    
>>>>>>> 3f0cd9eaf826fd82eb126031e36e1e3a51bea086
  render() {
   
    const {course, courses, courseDelete, courseSave} = this.props

      if(courses.isRejected){
        return<div>{courses.data}</div>
      }
     const statusColor = (data)=>{
      switch(data){
        case 1:
        return 'success';
        break;
        default:
        return'danger';
        break;
     }
    }
    const statusName = (data) =>{
      switch(data){
        case 0 :
        return 'ระงับการใช้งาน';
        case 1:
        return 'เปิดใช้งาน';
        break;
        default:
        return 'รอการตรวจสอบ';
        break;
      }
    }
    
    return (
      <div className="animated fadeIn"> 
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
      </div>
    )
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
