import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Badge
} from 'reactstrap';
import {Router, HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {loadCertification} from '../../../redux/actions/certificationActions.js';
import { loadPeriods } from '../../../redux/actions/periodActions';
import PropTypes from 'prop-types';
const moment = require('moment');
moment.locale('th');
 class Certificate extends Component {

     constructor(props){
        super(props)
     }
     static contextTypes = {
      router: PropTypes.object
         }
     componentDidMount(){
         return (
           this.props.dispatch(loadPeriods('','','',[3])).then(()=>{
               this.props.dispatch(loadCertification()).then(()=>{
                })
           })
          
         )
     }
     renderToRedirect(id){
          this.context.router.history.push(`/cert/generate/${id}`);
     }
     countCert(data, period_id){
        var counter = 0;
          if(data){
            for(var i=0; i<data.length; i++ ){
              if (data[i].per_id == period_id){
                counter++;
              }
            }
          }
        return counter;
     }
  render() {
    const {certifications,periods} = this.props 
    return (
      <div className="animated fadeIn">
          <Row>
          <Col >
            <Card>
              <CardHeader>
                <i className="fa fa-certification"></i><strong>รายชื่อหลักสูตรที่อบรมเสร็จสิ้นแล้ว</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  {periods.data && periods.data.map((e,i)=>{
                    return(
                      <ListGroupItem tag="button" onClick={()=>{this.renderToRedirect(e.per_id)}} key={i} action>
                        <ListGroupItemHeading>{e.course_name} <Badge color={statusColor(e.per_status)}>{statusName(e.per_status)}</Badge></ListGroupItemHeading>
                        <ListGroupItemText>
                        <Badge color="danger">{certifications.data && this.countCert(certifications.data, e.per_id)}คนที่ผ่านการสอบ</Badge>  อบรม ณ วันที่ {moment(e.per_start).add(543, 'years').format('ll')}{' - '}{moment(e.per_end).add(543, 'years').format('ll')} เวลา {e.per_time_start}{' - '}{e.per_time_end} วิทยากร {e.lecture}
                        </ListGroupItemText>
                      </ListGroupItem>
                    )
                  })}
                
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

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
function mapStateToProps(state){
  return {
    certifications:state.certificationReducers.certifications,
    periods:state.periodReducers.periods
  }
}
export default connect(mapStateToProps)(Certificate);
