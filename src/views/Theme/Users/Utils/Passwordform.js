import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Modal,Alert, ModalHeader, ModalBody, Form, FormGroup, Button} from  'reactstrap'
import renderField from '../../../../components/Utils/renderFields';
import renderSelectObject from './renderSelectObject'
import renderSelect from './renderSelect'
import renderSelectprefix from './renderSelectprefix'
class Passwordform extends Component {
    
    toggle = () =>{
        this.props.onToggle();
    }
    handleInitialize = ()=>{
        let iniData = {
            id:this.props.data.id,
            password:'',
            confirmpassword:''
        }
        this.props.initialize(iniData);
    }
    componentDidMount = ()=>{
        this.handleInitialize();
    }
   
  render() {

      const {data, submitting, userSave, modalTitle, onToggle, onSubmit,handleSubmit} = this.props
      
    const gender = ['ชาย', 'หญิง'];
    return (
      <div>
          <ModalHeader toggle={onToggle} onToggle={onToggle}>{modalTitle}{' '}{this.props.data.username}{' '}{this.props.data.first_name}{' '}{this.props.data.last_name}</ModalHeader>
          <ModalBody>
            <Form 
                className="form-horizontal"
                >
                {userSave.isRejected && <Alert color="danger"><i className="fa fa-warning"></i>{' '}{userSave.data}</Alert>}
                    <FormGroup>
                         <Field
                          name="password" 
                          component={renderField}  
                          type="password" 
                          label="รหัสผ่านใหม่" />
                     </FormGroup>
                     <FormGroup>
                        <Field name="confirmpassword" 
                        component={renderField}  
                        type="password" 
                        label="ยืนยันรหัสผ่านอีกครั้ง"/>
                    </FormGroup>       
                 <div className="form-actions"> 
                     <Button 
                     onClick={onToggle} 
                     type="button" 
                     color="danger" 
                     disabled={submitting}>
                     Close</Button>{ ' '}
                     <Button color="primary" disabled={submitting} onClick={()=>{handleSubmit(this.onSubmit)}}>Save changes</Button>     
                 </div>

                    </Form>
                </ModalBody>

        
      </div>
    )
  }
}
function validate(values){
    let errors = {};
    if(!values.password){
        errors.password = "The field is required";
    }
    if(values.password && !/^[A-Za-z@0-9._%#?]+$/g.test(values.password)){
        errors.password = "อนุญาติเฉพาะตัวอักษรภาษาอังกฤษ ตัวเลข และ เครื่องหมายพิเศษ ._%#?@ เท่านั้น";
    }
    if(!values.confirmpassword){
        errors.confirmpassword = "The field is required";
    }else if(values.password != values.confirmpassword){
        errors.confirmpassword = "Please check that you've entered and confirmed your password!"
    }
    return errors;
}
const form = reduxForm({
    form:'Passwordform',
    validate
})
export default form(Passwordform);