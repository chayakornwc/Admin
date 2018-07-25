import React, { Component } from 'react'

import {FieldArray, Field, reduxForm } from 'redux-form';
import {saveExamination,loadNullexam, registerexamination} from '../../../../redux/actions/ExaminationActions';
import renderMembers from './rendersMembers';
import {ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import Loader from '../../../../components/Utils/Loader';
 class ExaminationForm extends Component {
     constructor(props){
         super(props);
     }
     handleInitailiza(){

        let initData = {
            'members':[],
            course_id: this.props.data.course_id
        }
        const members =   this.props.data.members ;
        
        
         if(members){
            members.forEach((e,i) => {
                e.question = unescape(e.question);
                e.answer1 = unescape(e.answer1)
                e.answer2 = unescape(e.answer2)
                e.answer3 = unescape(e.answer3)
                e.answer4 = unescape(e.answer4)
                 initData.members[i] = e
             });
         }
         this.props.initialize(initData);
     }
     componentDidMount(){
         this.handleInitailiza();
     }
     onSubmit = (values)=>{
      this.props.buttonSubmit(values)
     }
  render() {
     const {data,onToggle,modalTitle,handleSubmit, Loading, submitting} = this.props
    return (
      <div>
        <ModalHeader toggle={onToggle}>{modalTitle}{': '}{data&&data.course_name}</ModalHeader>
            <ModalBody> 
                <form  onSubmit={handleSubmit(this.onSubmit)} >
                    <FieldArray 
                    component={renderMembers} 
                    name="members" />
                </form>
                
            </ModalBody>
            <ModalFooter>
                    <Button disabled={submitting} onClick={handleSubmit(this.onSubmit)} disabled={submitting} color="primary" type="submit">บันทึก</Button>{' '}
                    <Button disabled={submitting} color="secondary" onClick={onToggle}>ปิด</Button>
        </ModalFooter>
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
    form: 'ExaminationForm',
    validate
 })
 
export default form(ExaminationForm);
