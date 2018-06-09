import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Badge,Row,Col,Card,CardHeader,CardBody,Table,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap';
const moment = require('moment');
moment.locale('th');

const statusName = (data) =>{
    switch(data){
      case 0 :
      return 'เปิดการอบรม'
      break;
      case 1:
      return 'กำลังดำเนินการ'
      break;
      case 2:
      return 'ระงับการอบรม'
      break;
      case 3:
      return 'การอบรมเสร็จสิ้น';
      break;
      case 4:
      return 'เปิดสอบ';
      break;
      default:
      return 'รอการตรวจสอบ';
      break;
    }
  }
  const statusColor = (data)=>{
    switch(data){
      case 0:
      return 'info'
      break;
      case 1 :
      return 'warning'
      break;
      case 3 :
      return 'success'
      break;
      case 2 :
      return 'danger'
      break;
      default:
      return'danger'
      break;
   }
  }
class PeriodTable extends Component {
    constructor(props){
        super(props);
    }
 render() {
        const {data, buttonDelete, buttonEdit, renderTable, attendee} = this.props;
        return (
            <div>      
                <Row>
                <Col>
                    <Card>
                    <CardHeader>
                        <i className="icon-note"></i> จัดการ การอบรม <a href="/#/course/period/register"><Button className="float-right" color="secondary"><i className="fa fa-calendar-plus-o"></i>{'\u00A0 เปิดการอบรม'}</Button></a>
                    </CardHeader>
                    <CardBody>
                        <Table hover striped responsive> 
                        <thead>
                        <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อหลักสูตร</th>
                        <th>วันที่อบรม</th>
                        <th>เวลา</th>
                        <th>เข้าร่วม</th>
                        <th>รับได้</th>
                        <th>ห้องประชุม</th>
                        <th>สถานะ</th>
                        <th className="text-center"><i className="icon-settings "></i></th>
                        </tr>
                        </thead>
                        <tbody>
                          {data && data.map(function(value, key){
                              return(
                                  <tr key={key}>
                                      <td>{(key+1)}</td>
                                      <td>{value.course_name}{' '}{value.course_nameEng}</td>
                                      <td>{moment(value.per_start).add(543, 'years').format('ll')}{' - '}{moment(value.per_end).add(543, 'years').format('ll')}</td>
                                      <td>{value.per_time_start}{' - '}{value.per_time_end}</td>
                                      <td>{value.period_quantity}</td>
                                      <td>{value.per_quota}</td>
                                      <td>{value.room_name}</td>
                                      <td><Badge color={statusColor(value.per_status)}>{statusName(value.per_status)}</Badge></td>
                                      <td className="text-center"><i onClick={()=>attendee(value.per_id)} className="fa fa-user-plus"></i>{' '}<i onClick={()=>buttonEdit(value.per_id)} className="fa fa-edit"></i>{' '}<i onClick={()=>buttonDelete(value.per_id)} className="fa fa-times"></i></td>
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
        );
    }
}

PeriodTable.propTypes = {

};

export default PeriodTable;