import React from 'react';
import {Button, ListGroup, ListGroupItem, FormGroup, Col, Label, Input } from 'reactstrap';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
import {Field} from 'redux-form';
import renderTextArea from './renderTextArea';
import renderSelect from './renderSelect';
const renderMembers = ({fields, meta:{ error, submitFailed  } }) => {
    return (
            <div>
                    <FormGroup>
                    <Button className="btn-block" color="info" type="button" onClick={() => fields.push({})}>
                    เพิ่มข้อ
                    </Button>
                    {submitFailed && error && <span className="text-danger"><strong><i className="fa fa-warning"></i>{' '}{error}</strong></span>}
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
                    <Field 
                    name={`${member}.answer_real`} 
                    type="select"
                    label="คำตอบที่ถูกต้อง" 
                    component={renderSelect}
                    />
                    
                    </ListGroupItem>
                ))}
                </ListGroup>
                </div>
                </FormGroup>
            </div>
                
                    )
    }
   

export default renderMembers;
  
 