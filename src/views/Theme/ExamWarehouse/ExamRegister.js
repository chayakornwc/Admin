import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {FieldArray, Field, reduxForm } from 'redux-form';
import {saveExamination,loadNullexam, registerexamination} from '../../../redux/actions/ExaminationActions';
import { connect } from 'react-redux';
import  renderSelectExams from './Utils/renderSelectExams';
import renderTextArea from './Utils/renderTextArea';
import renderMembers from './Utils/rendersMembers';

import {ListGroup, Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText, ListGroupItem, EXITED} from 'reactstrap';
var alertify = require('alertify.js');
 class ExamRegister extends Component {

     constructor(props){
         super(props);
         this.onSubmit = this.onSubmit.bind(this);
          this.handleInitialize = this.handleInitialize.bind(this);
       
     }
     toggle(){
        
     }
     handleInitialize() {
      let initData = {
          "members": [],
          "course_id":'',
      };
      this.props.initialize(initData);
  }
     onSubmit(e){
     return this.props.dispatch(registerexamination(e)).then(()=>{
        if(!this.props.examSave.isRejected){
          this.props.dispatch(loadNullexam());
          alertify.success(this.props.examSave.data.message);
          this.handleInitialize();
        }else{
          alertify.error(this.props.examSave.data);
      }
      })
    }
     
     componentDidMount(){
         this.props.dispatch(loadNullexam());
     }
  
  render() {
    const {nullExams, handleSubmit, submitting} = this.props

    return (
      <div className="animated fadeIn">
      <Row>
            <Col xs="12">
                    <Card>
                    <CardHeader>
                        <i className="fa fa-edit"></i> ลงทะเบียนข้อมูลหลักสูตร <small className="float-right color-red">การลงทะเบียนสำหรับหลักสูตรที่ยังไม่มีข้อสอบ</small>
                    </CardHeader>
     
                        <CardBody>
                        <form onSubmit={handleSubmit(this.onSubmit)} className="form-horizontal">
                            <Field name="course_id" component={renderSelectExams} data={nullExams.data} label="เลือกหลักสูตร" />
                            <FieldArray name="members" component={renderMembers} />
                            <div className="form-actions"> 
                            <Button disabled={submitting}  color="secondary">Back</Button>{ ' '}
                            <Button disabled={submitting} type="submit" color="primary"><span>Save changes</span></Button>     
                            </div>
                        </form>
                        </CardBody>
                      
                    </Card>
                </Col>
            </Row>  
      </div>
    )
  }
}
const validate = values => {
  const errors = {}
  if (!values.course_id) {
    errors.course_id = 'กรุณาเลือก'
  }
  if (!values.members || values.members.length <5) {
    errors.members = { _error: 'ต้องการข้อสอบอย่างน้อย 5ข้อ ในการลงทะเบียน' }
  } else {
    const membersArrayErrors = []
    values.members.forEach((member, memberIndex) => {
      const memberErrors = {}
      if (!member || !member.question) {
        memberErrors.question = 'ช่องนี้เว่นว่างไม่ได้'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.answer1) {
        memberErrors.answer1 = 'ช่องนี้เว่นว่างไม่ได้'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.answer2) {
        memberErrors.answer2 = 'ช่องนี้เว่นว่างไม่ได้'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.answer3) {
        memberErrors.answer3 = 'ช่องนี้เว่นว่างไม่ได้'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.answer4) {
        memberErrors.answer4 = 'ช่องนี้เว่นว่างไม่ได้'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.answer_real) {
        memberErrors.answer_real = 'กรุณาเลือก ช่องนี้เว้นว่างไม่ได้'
        membersArrayErrors[memberIndex] = memberErrors
      }
     
    })
    if (membersArrayErrors.length) {
      errors.members = membersArrayErrors
    }
  }
  return errors
}
const form = reduxForm({
    form: 'ExamRegister',
    validate
 })
 
 const  mapStateToProps = (state)=>({
    nullExams: state.ExaminationReducers.nullExams, 
    examSave:state.ExaminationReducers.examSave
   })

ExamRegister = connect(mapStateToProps)(ExamRegister)

export default form(ExamRegister)
