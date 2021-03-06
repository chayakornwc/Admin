import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CardFooter, Container, Button, Row, ModalBody, ModalFooter, ModalHeader, Modal, Form, FormGroup, Col, Label } from 'reactstrap';
import renderSelect from '../../views/Theme/Coursemanage/Utils/renderSelect';

import renderSelectObject from '../../views/Theme/Coursemanage/Utils/renderSelectObject';
import renderSelectRoom from '../../views/Theme/Coursemanage/Utils/renderSelectRoom';
import renderTimepicker from '../../views/Theme/Coursemanage/Utils/renderTimepicker';
import renderDatepicker from '../Utils/renderDatepicker';
import { Field, reduxForm } from 'redux-form';
import renderField from '../Utils/renderFields';
const moment = require('moment');
moment.locale('th');
moment().format('LL');
class PeriodForm extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.handleInitialize();
    }
    handleInitialize() {
        let initData = {
            "per_id":parseInt(this.props.data.per_id),
            "per_start": this.props.data.per_start ? moment(this.props.data.per_start, [moment.ISO_8601, 'DD MMMM YYYY']).add(543, 'years').format('LL') : null,
            "per_end":this.props.data.per_end ? moment(this.props.data.per_end, [moment.ISO_8601, 'DD MMMM YYYY']).add(543,'years').format('LL') : null,
            "per_time_start":this.props.data.per_time_start ? moment(this.props.data.per_time_start, 'LT').format('LT') : null,
            "per_time_end":this.props.data.per_time_end ?  moment(this.props.data.per_time_end, 'LT').format('LT') : null,
            "room_id":this.props.data.room_id,
            "course_id":this.props.data.course_id,
            "per_price":this.props.data.per_price,
            "per_quota":this.props.data.per_quota,
            "course_status": 0,
            "per_status":this.props.data.per_status,
            "lecture":this.props.data.lecture 
        };
        this.props.initialize(initData);
        
    }
        toggle = () => {
            this.props.onToggle();
        }
        onSubmit = (values) => {
            this.props.onSubmit(values);
            
        }
        onDelete = ()=>{
            this.props.handleDelete();
        }
        
   
    render() {
        // handleSubmit  properties of redux form
        const { data, periodSave,  handleSubmit , modalTitle, onToggle, course, operation_rooms} = this.props
        const _status = [{id:0, label:'เปิดการอบรม'},
        {id:1, label:'กำลังดำเนินการ'},
        {id:4, label:'เปิดสอบ'},
        {id:3, label:'การอบรมเสร็จสิ้น'},
        {id:2, label:'ระงับการอบรม'},
        ];
        return (
                <Container >
                    <Row style={{paddingTop:'1rem'}}>
                    </Row>
                    <Row>
                        <Col>
                        {periodSave && periodSave.isRejected && <div className="alert alert-danger">{periodSave.data}</div>}
                        <div className="container" style={{display:'flow-root'}}>
                            <Button color="danger" style={{float:'right'}} onClick={this.onDelete}><i className="fa fa-times"/>&nbsp; ยกเลิกการอบรม</Button>
                        </div>
                        <Form className="form-horizontal">
                            <Field name="per_status" data={_status} label="สถานะการอบรม"  component={renderSelectObject} />
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="appendedInputButton">วันที่อบรม</Label>
                                    </Col>
                                    <Col md="3">
                                        <Field name="per_start" styles={{'flexWrap':'unset'}} component={renderDatepicker} type="time"  placeholder="วันที่เริ่มอบรม" /> 
                                    </Col>
                                    <i className="fa fa-angle-right fa-lg mt-2"></i>
                                    <Col md="3">   
                                        <Field name="per_end" styles={{'flexWrap':'unset'}} component={renderDatepicker}  placeholder="สิ้นสุดการอบรม" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="appendedInputButton">ช่วงเวลาที่อบรม</Label>
                                    </Col>
                                    <Col md="auto">
                                        <Field name="per_time_start" component={renderTimepicker} placeholder=""/>
                                    </Col>
                                    {' '}
                                    <i className="fa fa-angle-right fa-lg mt-2"></i>{' '}
                                    <Col md="auto">
                                        <Field name="per_time_end" component={renderTimepicker}/>
                                    </Col>
                                </FormGroup>
                                    <Field name="course_id" data={course.data} label="หลักสูตร"   component={renderSelect} />
                                <FormGroup>
                                    <Field name="per_price" component={renderField}  type="number" label="ค่าใช้จ่ายต่อหัว" />
                                </FormGroup>
                                <FormGroup>
                                    <Field name="per_quota" component={renderField}  type="number" label="จำนวนที่นั่ง" />
                                </FormGroup>
                                <FormGroup>
                                    <Field name="room_id" data={operation_rooms.data}  component={renderSelectRoom} label="ห้องปฏิบัติการ" />
                                </FormGroup>
                                <FormGroup>
                                    <Field name="lecture"   component={renderField} label="วิทยากร" />
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                    <Row style={{paddingTop:'1rem', paddingBottom:'1rem',display:'flex'}}>
                        <Col>
                            <Button  color="primary" onClick={handleSubmit(this.onSubmit)}><i className="fa fa-save"/> &nbsp;บันทึก</Button>
                        </Col>
                    </Row>        
                </Container>
        )
    }

}

function validate(values){
    const errors ={};
    if(!values.per_start){
        errors.per_start = 'กรุณาเลือก'
    }
    if(!values.per_end){
        errors.per_end='กรุณาเลือก'
    }
    if(!values.per_time_start){
        errors.per_time_start ="กรุณาเลือก"
    }
    if(!values.per_time_end){
        errors.per_time_end ="กรุณาเลือก"
    }
    if(!values.course_id){
        errors.course_id ="กรุณาเลือก"
    }
    if(!values.per_price){
        errors.per_price = "ต้องกรอกฟิลด์นี้"
    }
    
    if(!values.room_id){
        errors.room_id ="กรุณาเลือก"
    }
    if(!values.lecture){
        errors.lecture = "ต้องกรอกฟิลด์นี้";
    }
    return errors;
}



PeriodForm.propTypes = {

};


const form = reduxForm({
    form: 'PeriodForm',
    validate
})
export default form(PeriodForm)

