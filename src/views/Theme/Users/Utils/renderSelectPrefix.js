import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
import {Alert} from 'reactstrap';
const renderSelectprefix = ({ input, label, type,  autoFocus, meta: { touched, error } }) => {

const data = ["นาย", "นางสาว", "นาง", "ดร.", "ผศ.", "รอง ศจ.", "ศจ."];
   
    return (
                <div>
                    <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input.name}>{label}</Label>
                    </Col>
                    <Col xs="12" md="4">              
                    <select {...input}  type="select" className="form-control" >    
                    <option selected></option>
                    {data && data.map((value, index) =>(
                        <option key={index} value={value} selected>{value}</option>
                    ))
                    }
                  
                    </select> 
                     {touched && error && <Alert color="danger"><i className="fa fa-warning"></i>{' '}{error}</Alert>}
                    </Col>        
                    </FormGroup>
                    </div>
                
                    )
    }
 


export default renderSelectprefix;
  
// <FormGroup row>
// <Col md="3">
//   <Label htmlFor="text-input">Text Input</Label>
// </Col>
// <Col xs="12" md="9">
//   <Input type="text" id="text-input" name="text-input" placeholder="Text"/>
//   <FormText color="muted">This is a help text</FormText>
// </Col>
// </FormGroup>