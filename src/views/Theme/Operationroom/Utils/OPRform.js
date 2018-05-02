import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, ModalBody, ModalFooter, ModalHeader, Modal, Form, FormGroup, Col, Label } from 'reactstrap';

import { Field, reduxForm } from 'redux-form';

import renderField from '../../../../components/Utils/renderFields';
class OPRform extends Component {
  constructor(props){
    super(props);
  }

  handleInitialize = ()=> {
    let initData = {
      "room_id":parseInt(this.props.data.room_id),
      "room_name":this.props.data.room_name
    };
    this.props.initialize(initData);
  }
  toggle = ()=>{
    this.props.onToggle();
  }
  onSubmit = (values)=>{
    this.props.onSubmit(values);
  }
  componentDidMount(){
    this.handleInitialize();
  }
  render() {
    const {data ,operation_roomSave, handleSubmit, onToggle, modalTitle} = this.props
    return (
      <div>
            <ModalHeader toggle={onToggle}>{modalTitle}</ModalHeader>
            <ModalBody>
                    {/* ตรวจสอบว่ามี err หรือไม่ */}
                    {operation_roomSave.isRejected && <div className="alert alert-danger">{operation_roomSave.data}</div>}

                    {/* รูปแบบการแสดงผลจัดตาม Bootstrap 4 */}
                    <Form className="form-horizontal">
                      <FormGroup >
                        <Field name="room_name" component={renderField}  type="text" label="ห้องปฏิบัติการ" />
                      </FormGroup>
                    </Form>  
            </ModalBody>        
            <ModalFooter>
                    <Button color="primary" onClick={handleSubmit(this.onSubmit)}>บันทึก</Button>{' '}
                    <Button color="secondary" onClick={onToggle}>ยกเลิก</Button>
                </ModalFooter>
      </div>
    )
  }
}

const form = reduxForm({
  form: 'OPRform',
})
export default form(OPRform)

