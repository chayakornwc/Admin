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
         const members = (this.props.data && this.props.data.members) 
 
         let initData = {
             'members':[]
         }
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
     handleSubmit = (values)=>{
        this.props.buttonSubmit(values);
     }
  render() {
     const {data,onToggle,modalTitle,handleSubmit, Loading, submitting} = this.props
    return (
      <div>
        <ModalHeader toggle={onToggle}>{modalTitle}{': '}{data&&data.course_name}</ModalHeader>
            <ModalBody> 
                <form  onSubmit={handleSubmit(this.handleSubmit)} className="form-control">
                    <FieldArray 
                    component={renderMembers} 
                    name="members" />
                </form>
                
            </ModalBody>
            <ModalFooter>
                    <Button disabled={submitting} color="primary" type="submit">บันทึก</Button>{' '}
                    <Button disabled={submitting} color="secondary" onClick={onToggle}>ปิด</Button>
        </ModalFooter>
      </div>
    )
  }
}
const form = reduxForm({
    form: 'ExaminationForm',
 
 })
 
export default form(ExaminationForm);
