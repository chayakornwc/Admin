import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
 
const renderSelectExams = ({ input, label, type, data, autoFocus, meta: { touched, error } }) => {

    return (
            <div>
                <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input.name}>{label}</Label>
                    </Col>
                    <Col xs="12" md="4">              
                    <select {...input}  type="select" className="form-control" >
                    {data && data.map(value =>(
                        <option key={value.course_id} value={value.course_id}>{value.course_name}</option>
                    ))
                    }
                    </select> 
                     {touched && error && <span className="text-danger">{error}</span>}
                    </Col>        
                </FormGroup>
            </div>
                
                    )
    }
 


export default renderSelectExams;
  
