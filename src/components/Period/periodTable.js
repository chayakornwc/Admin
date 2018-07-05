import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Badge,Row,Col,Card,CardHeader,CardBody,Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
const moment = require('moment');
moment.locale('th');


class PeriodTable extends Component {
   
    constructor(props){
        super(props);
      this.handleToredirect = this.handleToredirect.bind(this)
    }

   
   handleToredirect(id){
    this.props.Redirect(id)
   }

 render() {
        const {data, buttonDelete, buttonEdit, renderTable, attendee,Redirect} = this.props;
        return (
            <div>      
                <Row>
                <Col>
                    <Card>
                    <CardHeader>
                        <i className="icon-note"></i> จัดการ การอบรม <Link to="period/register"><Button className="float-right" color="secondary"><i className="fa fa-calendar-plus-o"></i>{'\u00A0 เปิดการอบรม'}</Button></Link>
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
                        </tr>
                        </thead>
                        <tbody>
                          {data && data.map(function(value, key){
                              return(
                                  <tr className="tr-action" onClick={()=>{Redirect(value.per_id)}} key={value.per_id}>
                                      <td>{(key+1)}</td>
                                      <td>{value.course_name}{' '}{value.course_nameEng}</td>
                                      <td>{moment(value.per_start).add(543, 'years').format('ll')}{' - '}{moment(value.per_end).add(543, 'years').format('ll')}</td>
                                      <td>{value.per_time_start}{' - '}{value.per_time_end}</td>
                                      <td>{value.period_quantity}</td>
                                      <td>{value.per_quota}</td>
                                      <td>{value.room_name}</td>
                                      <td><Badge color={statusColor(value.per_status)}>{statusName(value.per_status)}</Badge></td>
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