import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Modal, ModalHeader, ModalBody, Form} from  'reactstrap'
import renderField from '../../../../components/Utils/renderFields';
class Userform extends Component {
    handleInitailize = ()=>{
        let initData = {
            "username":this.props.data.username,
            "first_name":"",
            "last_name":"",
            "email":"",
            "prefix":"",
            "gender":"",
            "address":"",
            "city":"",
            "district":"",
            "province":"",
            "major":"",
            "affiliation":"",
            "company":"มหาวิทยาลัยราชภัฏลำปาง"
        }
    this.props.initialize(initData);
}
    toggle = () =>{
        this.props.onToggle();
    }
  render() {
      const {data, submitting, userSave, modalTitle, onToggle, onSubmit} = this.props
    return (
      <div>
          <ModalHeader onToggle={onToggle}>{modalTitle}</ModalHeader>
            <Form 
                className="form-horizontal"
                onSubmit={handleSubmit(this.onSubmit)}
                >
                                    <FormGroup>
                                            <Field name="username" component={renderField}  type="text" label="รหัสนักศึกษา / ชื่อบัญชีผู้ใช้"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="user_group" data={userGroup}component={renderSelectObject}  type="text" label="ประเภทผู้ใช้งาน"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="email" component={renderField}  type="text" label="E-mail" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="prefix" component={renderSelectprefix}  type="text" label="คำนำหน้า" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="first_name" component={renderField}  type="text" label="ชื่อ" />
                                        </FormGroup>     
                                        <FormGroup>
                                            <Field name="last_name" component={renderField}  type="text" label="นามสกุล" />
                                        </FormGroup>   
                                        <FormGroup>
                                            <Field name="gender" component={renderSelect} data={gender} type="text" label="เพศ" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="address" component={renderField}  type="text" label="ที่อยู่" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="city" component={renderField}  type="text" label="ตำบล" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="district" component={renderField}  type="text" label="อำเภอ" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="province" data={_province} component={renderSelect}  type="text" label="จังหวัด" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="major" component={renderField} type="text" label="สาขาวิชา" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="affiliation" data={affiliation} component={renderSelectObject}  type="text" label="คณะ / สำนัก" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="company" component={renderField}  type="text" label="สังกัด" />
                                        </FormGroup>
                                    <div className="form-actions"> 
                                        <Button  color="secondary" disabled={submitting}>Back</Button>{ ' '}
                                        <Button color="primary" disabled={submitting} onClick={handleSubmit(this.onSubmit)}>Save changes</Button>     
                                    </div>

                </Form>

        
      </div>
    )
  }
}
export default Userform;