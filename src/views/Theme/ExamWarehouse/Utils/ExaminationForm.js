import React, { Component } from 'react'

import {FieldArray, Field, reduxForm } from 'redux-form';
import {saveExamination,loadNullexam, registerexamination} from '../../../../redux/actions/ExaminationActions';
import renderMembers from './rendersMembers';

 class ExaminationForm extends Component {
     constructor(props){
         super(props);
     }
     handleInitailiza(){
      const   members = this.props
         let initData = {
             'members':[]
         }
         if(members){
             array.forEach((e,i) => {
                 initData.members[i] = e
             });
         }
     }
  render() {
     const {data} = this.props
    return (
      <div>
          <FieldArray component={renderMembers} name="members" />
      </div>
    )
  }
}
export default ExaminationForm;