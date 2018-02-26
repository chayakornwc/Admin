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
  import { Route, Redirect } from 'react-router'
class Courseregister extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };
            } 

    toggle(){    
        this.setState({ collapse: !this.state.collapse });

        }
   
    handleSubmit (values) {
            this.props.dispatch(saveCourse(values)).then(() => {
                if (!this.props.courseSave.isRejected) {
                     this.props.dispatch(loadCourse())   
                    return(
                        <Switch>
                        <Redirect from='/course/register' to='/course'/>
                        </Switch>
                    )
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
                        <i className="fa fa-edit"></i> ลงทะเบียนข้อมูลหลักสูตร
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
                        <Field name="course_name" component={renderField}  type="text" label="ชื่อหลักสูตร" autoFocus />
                        </FormGroup>
                        <FormGroup>
                            <Field name="course_nameEng" component={renderField}  type="text" label="ชื่อภาษาอังกฤษ" />
                        </FormGroup>
                        <FormGroup>
                            <Field name="course_detail" component={renderField} textarea type="text" label="รายละเอียด" />
                            </FormGroup> 
                            <FormGroup>
                            <div  className="field">
                                <label>สถานะ</label>
                                <div className="control" >
                                    <label className="radio">
                                        <Field name="course_status"  component="input" type="radio" selected value="0"/>{' '}ระงับการใช้งาน
                                    </label>
                                    <label className="radio"> 
                                        <Field name="course_status" component="input" type="radio" value="1"/>{' '}เปิดการใช้งาน 
                                    </label>
                                </div>
                            </div>
                            </FormGroup>
                            <div className="form-actions"> 
                            <Button color="secondary">Back</Button>{ ' '}
                            <Button onClick={this.handleSubmit}  color="primary">Save changes</Button>     
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
    if (!values.course_name) {
        errors.course_name = 'จำเป็นต้องกรอกฟิลด์นี้';
    }
    if(!values.course_nameEng){
        errors.course_nameEng = 'จำเป็นต้องกรอกฟิลด์นี้'
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


