import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import { loadCourse,getCourse } from '../../../redux/actions/courseActions';
import renderField from '../../../components/Utils/renderFields';
import renderDatepicker from '../../../components/Utils/renderDatepicker';
import { Field, reduxForm } from 'redux-form';
import renderSelect from './Utils/renderSelect';
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
        this.state = { collapse: true, visible:true};
        this.post = null
    }
    handleSubmit(value){
        console.log(value)
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
        const {periodSave, courses} = this.props;

       
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
                        <Field name="course_id" data={courses.data} component={renderSelect}  label="หลักสูตร" />
                            <FormGroup>
                            
                            <Field name="per_price" component={renderField}  type="number" label="ค่าใช้จ่ายต่อหัว" />
                            </FormGroup>
                            <FormGroup>
                            
                            <Field name="per_quota" component={renderField}  type="number" label="จำนวนที่นั่ง" />
                            </FormGroup>
                            <FormGroup>
                            
                            <Field name="room_id" component={renderField}  type="number" label="ห้องปฏิบัติการ" />
                            </FormGroup>
                            <div className="form-actions"> 
                           <Button  color="secondary">Back</Button>{ ' '}
                            <Button color="primary" onclick={this.handleSubmit}>Save changes</Button>     
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
