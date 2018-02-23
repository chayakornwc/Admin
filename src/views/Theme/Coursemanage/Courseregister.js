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

    handleSubmit = (values) => {
            this.props.dispatch(saveUser(values)).then(() => {
                if (!this.props.userSave.isRejected) {
                    this.toggle()
                    this.props.dispatch(loadUsers())
                    {alertify.success('บันทึกข้อมูลเรียบร้อยแล้ว')}
                }
            })
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
                    <div className="form-actions">
                    <Button onClick={this.handleSubmit} type="submit" color="primary">Save changes</Button>
                    <Button color="secondary">Cancel</Button>
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

function validate(values) {
    const errors = {};
    if (!values.Course_name) {
        errors.first_name = 'จำเป็นต้องกรอกฟิลด์นี้';
    }
    if(!values.Course_nameEng){
        errors.Course_nameEng = 'จำเป็นต้องกรอกฟิลด์นี้'
    }

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


