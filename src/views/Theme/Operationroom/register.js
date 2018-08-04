import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';

import {Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Button, Alert} from 'reactstrap';
import renderField from '../../../components/Utils/renderFields';
import {SaveRoom} from '../../../redux/actions/operationRoomActions';
const alertify = require('alertify.js');

 class OPRregister extends Component {
    constructor(props){
      super(props);
      this.state ={
        visible:false
      }
      this.onSubmit = this.onSubmit.bind(this);
    }
    handleInitialize() {
      let initData = {
          "room_name": '',
         
      };
      this.props.initialize(initData);
  }
  onSubmit(e){ 
    this.props.dispatch(SaveRoom(e)).then(()=>{
        if(!this.props.operation_roomSave.isRejected){
           this.handleInitialize();
           alertify.alert('เพิ่มห้องปฏิบัติการแล้ว').set('basic', true)
        }else{
           this.setState({ visible: true });
        }
          }).catch((err)=>{
            this.setState({ visible: true });
          })
   }

  render() {
    const {operation_roomSave, handleSubmit } =this.props
    return (
      <div>
         <div className="animated fadeIn">
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                                <i className="fa fa-edit"></i> เพิ่มข้อมูล
                
                            </CardHeader>
                            <CardBody>
                                {operation_roomSave.isRejected && <Alert isOpen={this.state.visible} color="danger" toggle={this.onDismiss}>{operation_roomSave.data}</Alert>}
                                <Form className="form-horizontal">
                                     <FormGroup>
                                        <Field name="room_name" component={renderField}  type="text" label="ชื่อห้องปฏิบัติการ" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Field name="room_code" component={renderField}  type="text" label="รหัสห้องปฏิบัติการ" />
                                    </FormGroup>
                                <div className="form-actions"> 
                                    <Button color="primary" onClick={handleSubmit(this.onSubmit)}>Save changes</Button>     
                                </div>
                            </Form>
                        </CardBody>
                </Card>
            </Col>
        </Row>  
</div>
      </div>
    )
  }
}
const  mapStateToProps = (state)=>({
      operation_roomSave:state.operationRoomReducers.operation_roomSave
 })
 function validate(values){
    const errors ={};
    if(!values.room_name){
        errors.room_name = 'ต้องการฟิลด์นี้'
    }
    if(values.room_name && !/^[A-Za-zก-๙0-9]+$/g.test(values.room_name)){
        errors.room_name = 'ไม่อนุญาติให้ป้อนอักษรพิเศษทุกประเภท'
    }
  
    if(!values.room_code ){
        errors.room_code='ต้องการฟิลด์นี้'
    }
    
    if(values.room_code && values.room_code.length > 5){
        errors.room_code='อนุญาติความยาวจำนวนไม่เกิน 5 ตัวอักษร'
    }
   
    return errors;
}


 const form = reduxForm({
  form: 'OPRregister',
  validate
  
})
OPRregister = connect(mapStateToProps)(OPRregister)

export default form(OPRregister)

