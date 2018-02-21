import React, { Component } from 'react';
import PropTypes from 'prop-types';
import renderField from '../../../components/Utils/renderFields';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Collapse,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
  } from 'reactstrap';
  import { Field, reduxForm } from 'redux-form';
class Courseregister extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };
            } 

    toggle(){    
        this.setState({ collapse: !this.state.collapse });
        }
           
    render() {
        return (
            <div className="animated fadeIn">
        <Row>
           <Col xs="12">
             <Card>
               <CardHeader>
                 <i className="fa fa-edit"></i>Form Elements
                 <div className="card-actions">
                   <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                   <Button className="btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                   <a href="#" className="btn-close"><i className="icon-close"></i></a>
                 </div>
               </CardHeader>
               <Collapse isOpen={this.state.collapse} id="collapseExample">
                 <CardBody>
                 <Form className="form-horizontal">
                   <FormGroup>
                   <Field name="Course_name" component={renderField}  type="text" label="ชื่อหลักสูตร" autoFocus />
                   </FormGroup>
                   <FormGroup>
                      <Field name="Course_nameEng" component={renderField}  type="text" label="ชื่อภาษาอังกฤษ" />
                   </FormGroup>
                   <FormGroup>
                       <Field name="Course_detail" component={renderField} textarea type="text" label="รายละเอียด" />
                    </FormGroup>
                    <FormGroup>
                        <Field name="Course_Administrator" component={renderField} type="text" label="ผู้ดูแลหลักสูตร" />
                    </FormGroup>
                    
                
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

function validate(values) {
    const errors = {};
    // if (!values.first_name) {
    //     errors.first_name = 'จำเป็นต้องกรอกชื่อ';
    // }
    // if(!values.last_name){
    //     errors.last_name = 'จำเป็นต้องกรอก นามสกุล'
    // }
    // if (!values.username) {
    //     errors.username = 'จำเป็นต้องกรอก Username !';
    // } else if (values.username.length < 6) {
    //     errors.username = 'Username ต้องมากกว่า 6 ตัวอักษร !';
    // }
    // if(!values.password){
    //     errors.password ="จำเป็นต้องกรอก password"
    // }else if(values.password.length < 6){
    //     errors.password = "Password จำเป็นต้องมีไม่น้อยกว่า 6 ตัวอักษร"
    // }
    // if(!values.confirm_password){
    //     errors.confirm_password = 'จำเป็นต้องยืนยันรหัสผ่าน'
    // }
    // else if (values.password != values.confirm_password){
    //     errors.confirm_password ="การยืนยันรหัสผ่านผิด กรุณาลองอีกครั้ง !"
    //     errors.password ="การยืนยันรหัสผ่านผิด กรุณาลองอีกครั้ง !"
    // } 

    return errors;
}

//เรียกใช้ redux-form โดยให้มีการเรียกใช้การ validate ด้วย
const form = reduxForm({
    form: 'Courseregister',
    validate
})

//สังเกตุว่าไม่มีการใช้ connect เลยเพราะเราไม่ได้เป็นตัวจัดการ data โดยตรง
//แต่ส่งสิ่งต่างๆผ่าน props ที่ได้จาก src/pages/User.js
export default form(Courseregister)


