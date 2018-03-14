import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import { loadCourse,getCourse } from '../../../redux/actions/courseActions';
import renderField from '../../../components/Utils/renderFields';
import renderDatepicker from '../../../components/Utils/renderDatepicker';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';

const moment = require('moment')
moment.locale('th');

const selectStyle ={
    marginLeft:'61px',
    marginBottom:'1rem',
    borderRadius:'0.2rem'
}

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
    componentDidMount(){
        this.props.dispatch(loadCourse());
        
    }
    render() {
       const {periodSave, courses} = this.props ;
        console.log(courses.data)
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
                        <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="appendedInputButton">วันที่อบรม</Label>
                        </Col>
                        <Col md="4">
                                <Field name="per_start" component={renderDatepicker}  placeholder="วันที่เริ่มอบรม" /> 
                         </Col>
                         <i className="fa fa-angle-right fa-lg mt-2"></i>{'  '}
                         <Col md="4">   
                            <Field name="per_end" component={renderDatepicker}  placeholder="สิ้นสุดการอบรม" />
                       </Col>
                        </FormGroup>
                        <FormGroup>
                                        <Field  style={selectStyle} name="prefix" className="select" component="select"  label="รายละเอียด" > 
                                      
                                        {courses.data && courses.data.map(value =>(
                                                <option value={value.course_id}>{value.course_name}</option>
                                        ))}                   
                                    </Field>
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
