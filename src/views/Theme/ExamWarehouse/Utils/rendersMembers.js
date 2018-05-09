import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
 
const renderMembers = ({fields, meta:{ touched, error, submitFailed } }) => {

    return (
            <div>
                    <FormGroup>
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
            </div>
                
                    )
    }
   

export default renderSelectExams;
  
