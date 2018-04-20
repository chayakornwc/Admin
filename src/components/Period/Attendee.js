import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ModalBody, ModalFooter, ModalHeader, Modal, Form, FormGroup, Col, Label } from 'reactstrap';

import renderSelect from '../../views/Theme/Coursemanage/Utils/renderSelect';
import renderSelectRoom from '../../views/Theme/Coursemanage/Utils/renderSelectRoom';
import renderTimepicker from '../../views/Theme/Coursemanage/Utils/renderTimepicker';
import renderDatepicker from '../Utils/renderDatepicker';
import renderFieldGroup from '../Utils/renderFieldsGroup';

import { Field, reduxForm } from 'redux-form';
import renderField from '../Utils/renderFields';
const moment = require('moment');
moment.locale('th');
moment().format('LL');
class AttendeeForm extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        console.log(this.props.data);
        this.handleInitialize();
    }
    handleInitialize() {
        let initData = {
            "username":parseInt(this.props.data.username),
            "prefix":this.props.data.prefix,
            "first_name":this.props.data.first_name,
            "last_name":this.props.data.last_name,
            "gender":this.props.data.gender,
            "major":this.props.data.major,
            "affiliation":this.props.data.affiliation,
            "company":this.props.data.company,
            "order_id":parseInt(this.props.data.order_id),
            "per_id":parseInt(this.props.data.per_id),
            "order_id":parseInt(this.props.data.order_id),
            "per_id":parseInt(this.props.data.per_id),
            
        };
        this.props.initialize(initData);
        
    }
        toggle = () => {
            this.props.onToggle();
        }
        onSubmit = (values) => {
            console.log(values)
            this.props.onSubmit(values);
            
        }
   
    render() {
        // handleSubmit  properties of redux form
        const { data, periodSave, onSubmit, handleSubmit , modalTitle, onToggle, course, operation_rooms} = this.props
        return (
            <div>
                <ModalHeader toggle={onToggle}>{modalTitle}</ModalHeader>
                 <ModalBody>
                    {/* ตรวจสอบว่ามี err หรือไม่ */}
                    {periodSave.isRejected && <div className="alert alert-danger">{periodSave.data}</div>}

                    {/* รูปแบบการแสดงผลจัดตาม Bootstrap 4 */}
                    <Form className="form-horizontal">
                                    <FormGroup row>   
                                        <Field name="per_price" component={renderField} icon="users"  type="text" placeholder="ค่าใช้จ่ายต่อหัว" />
                                        <Col md="12">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field name="inputAttn" component={renderField} label="data" type="text" id="inputAttn-group1" name="input1-group1" placeholder="Username"/>
                      </InputGroup>
                    </Col>
                                    </FormGroup>
                        </Form>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit(this.onSubmit)}>บันทึก</Button>{' '}
                    <Button color="secondary" onClick={onToggle}>ยกเลิก</Button>
                </ModalFooter>
            </div>
        );
    }

}








const form = reduxForm({
    form: 'AttendeeForm'
})
export default form(AttendeeForm)

