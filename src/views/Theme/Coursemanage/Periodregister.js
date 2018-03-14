import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import { loadCourse, } from '../../../redux/actions/courseActions';
import renderField from '../../../components/Utils/renderFields';
import renderDatepicker from '../../../components/Utils/renderDatepicker';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';

const moment = require('moment')
moment.locale('th');
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
       const {periodSave, courses} = this.props ;

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
                            {periodSave.isRejected && <Alert isOpen={this.state.visible} color="danger" toggle={this.onDismiss}>{periodSave.data}</Alert>}
                        <Form className="form-horizontal">
                       
                        <FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Field name="per_start" component={renderDatepicker}  placeholder="วันที่เริ่มอบรม" />
                            <Field name="per_end" component={renderDatepicker}  placeholder="สิ้นสุดการอบรม" />
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
const  mapStateToProps = (state)=>({
 courses: state.courseReducer.courses, 
 periodSave: state.periodReducers.periodSave
})
function validate(values){

}
const form = reduxForm({
   form: 'Periodregister',
   validate
})


Periodregister = connect(mapStateToProps)(Periodregister)

export default form(Periodregister)
