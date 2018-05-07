import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {loadNullexam} from '../../../redux/actions/ExaminationActions';
import { connect } from 'react-redux';

import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
 class ExamRegister extends Component {
     constructor(props){
         super(props);
         this.state = {
             collapse:true
         }
         this.handleSubmit = this.handleSubmit.bind(this)
     }
     toggle(){

     }
     handleSubmit(){
         console.log('handleSubmit')
     }
     componentDidMount(){
         this.props.dispatch(loadNullexam());
     }
     
  render() {
    //  const {handleSubmit} = this.props
    return (
      <div className="animated fadeIn">
      <Row>
            <Col xs="12">
                    <Card>
                    <CardHeader>
                        <i className="fa fa-edit"></i> ลงทะเบียนข้อมูลหลักสูตร <small className="float-right color-red">การลงทะเบียนสำหรับหลักสูตรที่ยังไม่มีข้อสอบ</small>
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse} id="collapseExample">
                        <CardBody>
                          
                        <Form className="form-horizontal">
                       
                            
                            <div className="form-actions"> 
                            <Button  color="secondary">Back</Button>{ ' '}
                            <Button  onClick={this.handleSubmit(this.onSubmit)} color="primary">Save changes</Button>     
                            </div>
                        </Form>
                        </CardBody>
                        </Collapse>
                    </Card>
                </Col>
            </Row>  
      </div>
    )
  }
}
function validate(values){
    const errors ={};
  
    return errors;
}
const form = reduxForm({
    form: 'ExamRegister',
    validate
 })
 
 const  mapStateToProps = (state)=>({
    nullExams: state.ExaminationReducers.nullExams, 
   
   })

ExamRegister = connect(mapStateToProps)(ExamRegister)

export default form(ExamRegister)
