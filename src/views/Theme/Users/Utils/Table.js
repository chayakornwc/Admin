import React, { Component } from 'react'
import {Row, Table, Card, Col, CardHeader, CardBody, Button} from 'reactstrap'
class UserTable extends Component {
    
  render() {
      const {data, buttonDelete, buttonEdit,buttonChangePassword}   = this.props
    return (
      <div>
          <Row>
                <Col>
                    <Card>
                    <CardHeader>
                        <i className="icon-note"></i> จัดการ ผู้ใช้งาน <a href="/#/users/register"><Button className="float-right" color="info"><i className="fa fa-user-plus"></i>{'\u00A0 เพิ่มผู้ใช้งาน'}</Button></a>
                    </CardHeader>
                    <CardBody>
                        <Table hover striped responsive> 
                        <thead>
                        <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อเต็ม</th>
                        <th>คณะ</th>
                        <th>สาขา</th>
                        <th className="ar"><i className="icon-settings "></i></th>
                        </tr>
                        </thead>
                        <tbody>
                          {data && data.map(function(e, i){
                              return(
                                  <tr key={i}>
                                      <td>{(i+1)}</td>
                                     <td>{e.prefix}{' '}{e.first_name}{' '}{e.last_name}</td>
                                     <td>{Affiliation(e.affiliation)}</td>
                                     <td>{e.major}</td>
                                     <td className="ar"><i onClick={()=>{buttonChangePassword(e.id)}} className="fa fa-key fa-wow"/>{' '}<i className="fa fa-pencil fa-wow " onClick={()=>{buttonEdit(e.id)}}></i>{' '}<i onClick={()=>{buttonDelete(e.id)}} className="fa-danger fa fa-times" /></td>
                                    
                                  </tr>
                              )
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
export default  UserTable

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
 