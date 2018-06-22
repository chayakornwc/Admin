import React, { Component } from 'react'
import {Row,Col, Card,CardBody,Table,Progress}from 'reactstrap'
const moment = require('moment')
moment.locale('th')
 class ReportTable extends Component {
  render() {
      const {data} = this.props
    return (
      <div>
       <Row>
            <Col>   
                <Card> 
                    <CardBody>
                        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                                <thead className="thead-light">
                                <tr>
                                    <th className="text-center">ลำดับ</th>
                                    <th className="text-left">หลักสูตร</th>
                                    <th className="text-left">รหัสการเข้าร่วม</th>
                                    <th className="text-left">ชื่อ-นามสกุล</th>
                                    <th className="text-left">คณะ /สถาบัน</th>
                                    <th className="text-left">สาขาวิชา</th>
                                    <th className="text-center">เสร็จสิ้น</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((e,i)=>{
                                        return (
                                        <tr key={i}>
                                            <td className="text-center">{(i+1)}</td>
                                            <td className="text-left">{e.course_name}</td>
                                            <td className="text-left">{e.username}</td>
                                            <td className="text-left">{e.fullname}</td>
                                            <td className="text-left">{Affiliation(e.affiliation)}</td>
                                            <td className="text-left">{e.major}</td>
                                            <td className="text-center" title={moment(e.per_end).add(543, 'years').format('ll')}>{moment(e.per_end).fromNow()}</td>
                                        </tr>)
                                    })}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
      </div>
    )
  }
}
const Affiliation = (data) =>{
    switch(data){
        case 1000:return	'มหาวิทยาลัยราชภัฏลำปาง'
        break;                            
        case 1001:return	'สำนักงานอธิการบดี'
        break;                                 
        case 1002:return	'คณะครุศาสตร์'
        break;                                      
        case 1003:return	'คณะมนุษยศาสตร์และสังคมศาสตร์'
        break;                      
        case 1004:return	'คณะวิทยาศาสตร์'
        break;                                    
        case 1005:return	'คณะวิทยาการจัดการ'
        break;                                 
        case 1006:return	'คณะเทคโนโลยีการเกษตร'
        break;                              
        case 1007:return	'คณะเทคโนโลยีอุตสาหกรรม'
        break;                            
        case 1008:return	'กองบริการการศึกษา'
        break;                                 
        case 1009:return	'กองนโยบายและแผน'
        break;                                   
        case 1010:return	'กองพัฒนานักศึกษา'
        break;                                  
        case 1011:return	'สถาบันวิจัยและพัฒนา'
        break;                               
        case 1012:return	'สำนักศิลปะและวัฒนธรรม'
        break;                             
        case 1014:return	'ศูนย์คอมพิวเตอร์'
        break;                                  
        case 1015:return	'โครงการจัดตั้งสถาบันภาษา'
        break;                          
        case 1016:return	'ศูนย์วิทยาศาสตร์และวิทยาศาสตร์ประยุกต์'
        break;            
        case 1017:return	'ศูนย์เวชศึกษาป้องกัน'
        break;                              
        case 1018:return	'ศูนย์จีน'
        break;                                          
        case 1019:return	'ศูนย์วิทยบริการ'
        break;                                   
        case 1020:return	'ศูนย์การศึกษาพัฒนาครู'
        break;                             
        case 1021:return	'บัณฑิตศึกษา'
        break;                                       
        case 1024:return	'สำนักวิทยบริการและเทคโนโลยีสารสนเทศ'
        break;               
        case 1025:return	'หน่วยตรวจสอบภายใน'
        break;                                 
        case 1028:return	'งบกลางมหาวิทยาลัย'
        break;                                 
        case 1029:return	'ศูนย์ฝึกปฏิบัติวิชาชีพอาลัมพาง'
        break;                    
        case 1030:return	'สำนักงานสภามหาวิทยาลัย'
        break;                            
        case 1031:return	'สภาคณาจารย์และข้าราชการ'
        break;                           
        case 1032:return	'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏลำปาง'
        break;
        default : return 'ไม่ระบุ';
    }
  }
 
export default ReportTable;