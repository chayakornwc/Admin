import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import { loadCourse, } from '../../../redux/actions/courseActions';
import renderField from '../../../components/Utils/renderFields';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import DateRangePickerWrapper from '../../../components/Utils/renderDatepicker'
class Periodregister extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.state = { collapse: true, visible:true };
    }
    handleSubmit(){

    }
    handleUpdate(){

    }
    toggle(){

    }
    onDismiss(){

    }

    render() {
       

        return (
            <div className="animated fadeIn">
                <Row>
                <Col xs="12">
                    <Card>
                    <CardHeader>
                        <i className="fa fa-edit"></i> เปิดการอบรม
                        <div className="card-actions">
                        <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                        <Button className="btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                        <a href="#" className="btn-close"><i className="icon-close"></i></a>
                        </div>
                    
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse} id="collapseExample">
                        <CardBody>
                            {/* {courseSave.isRejected && <Alert isOpen={this.state.visible} color="danger" toggle={this.onDismiss}>{courseSave.data}</Alert>} */}
                        <Form className="form-horizontal">
                       
                        <FormGroup>
                        <DateRangePickerWrapper />
                        </FormGroup>
                        <FormGroup>
                            <Field name="per_end" component={renderField}  type="text" label="ชื่อภาษาอังกฤษ" />
                        </FormGroup>
                        <FormGroup>
                            <Field name="course_detail" component={renderField} textarea type="text" label="รายละเอียด" />
                            </FormGroup> 
                            <FormGroup>
                            <div  className="field">
                                <label>สถานะ</label>
                                <div className="control" >
                                    <label className="radio">
                                        <Field name="course_status"  component="input" type="radio" selected value="0"/>{' '}ระงับการใช้งาน
                                    </label>
                                    <label className="radio"> 
                                        <Field name="course_status" component="input" type="radio" value="1"/>{' '}เปิดการใช้งาน 
                                    </label>
                                </div>
                            </div>
                            </FormGroup>
                            <div className="form-actions"> 
                           <Button  color="secondary">Back</Button>{ ' '}
                            <Button color="primary">Save changes</Button>     
                            </div>
                        </Form>
                        </CardBody>
                        </Collapse>
                        </Card>
                        </Col>
                        </Row>  
            </div>
        );
    }
}


Periodregister.propTypes = {

};

function validate(values) {
    const errors = {};
    if (!values.course_name) {
        errors.course_name = 'จำเป็นต้องกรอกฟิลด์นี้';
    }
    if(!values.course_nameEng){
        errors.course_nameEng = 'จำเป็นต้องกรอกฟิลด์นี้'
    }
    

    return errors;
}

const form = reduxForm({
    form:'Periodregister',
    validate
})

export default form(Periodregister);