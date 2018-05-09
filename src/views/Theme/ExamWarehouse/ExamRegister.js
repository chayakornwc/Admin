import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {FieldArray, Field, reduxForm } from 'redux-form';
import {loadNullexam} from '../../../redux/actions/ExaminationActions';
import { connect } from 'react-redux';
import  renderSelectExams from './Utils/renderSelectExams';
import renderTextArea from './Utils/renderTextArea';
import {ListGroup, Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText, ListGroupItem} from 'reactstrap';
 class ExamRegister extends Component {

     constructor(props){
         super(props);
         this.onSubmit = this.onSubmit.bind(this);
         this.renderMembers = this.renderMembers.bind(this);
         this.state = {
             collapse:true
         }
     }
     toggle(){

     }
     onSubmit(e){
        console.log(e)
     }
     componentDidMount(){
         this.props.dispatch(loadNullexam());
     }
    renderMembers = ({fields, meta:{ touched, error, submitFailed } })=>{
    
      return <FormGroup>
          <Button className="btn-block" color="info" type="button" onClick={() => fields.push({})}>
            เพิ่มข้อ
          </Button>
          {(touched || submitFailed) && error && <span><h5>{error}</h5></span>}
         <div className="form-control"> 
          <ListGroup>
        {fields.map((member, index) => (
          <ListGroupItem key={index}>
          <FormGroup>
            <Button size="sm" color="danger" type="button" className="float-right" title="Remove Member" onClick={() => fields.remove(index)} >
            <i className="fa fa-remove"></i>
            </Button>
          </FormGroup>  
            <h4>ข้อ. {index + 1}</h4>
            <Field
              name={`${member}.question`}
              type="textarea"
              component={renderTextArea}
              label="คำถาม"
            /> 
            <Field
            name={`${member}.answer1`}
            type="textarea"
            component={renderTextArea}
            label="คำตอบ. 1"
          />
           <Field
              name={`${member}.answer2`}
              type="textarea"
              component={renderTextArea}
              label="คำตอบ. 2"
            />
             <Field
              name={`${member}.answer3`}
              type="textarea"
              component={renderTextArea}
              label="คำตอบ. 3"
            />
             <Field
              name={`${member}.answer4`}
              type="textarea"
              component={renderTextArea}
              label="คำตอบ. 4"
            />
            <FormGroup>
              <Col md="2">
              <Label>
              คำตอบที่ถูกต้อง
                </Label>
              </Col>
              <Col md="10">
              <Field name="trueanser" component="select">
                <option>กรุณาเลือก</option>
                <option value="1">ข้อ 1 </option>
                <option value="2">ข้อ 2</option>
                <option value="3">ข้อ 3</option>
                <option value="4">ข้อ 4</option>
              </Field>
              </Col>
            </FormGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
      </div>
      </FormGroup>
    } 
  render() {
    //  const {handleSubmit} = this.props
    const {nullExams, handleSubmit, submitting} = this.props
  
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
                        <form onSubmit={handleSubmit(this.onSubmit)} className="form-horizontal">
                            <Field name="course_id" component={renderSelectExams} data={nullExams.data} label="เลือกหลักสูตร" />
                            <FieldArray name="members" component={this.renderMembers} />
                            <div className="form-actions"> 
                            <Button  color="secondary">Back</Button>{ ' '}.
                            <Button disabled={submitting}  type="submit" color="primary">Save changes</Button>     
                            </div>
                        </form>
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
    if(!values.course_id){
      errors.course_id ="กรุณาเลือก"
    }
    if(!values.members){
      errors.members = "free data"
    }
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
