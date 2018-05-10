import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
 
const renderSelect = ({ input, label, type, data, autoFocus, meta: { touched, error } }) => {
    const numbers = [1, 2, 3, 4, 5];
    return (
            <div>
                <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input.name}>{label}</Label>
                    </Col>
                    <Col xs="12" md="4">              
                    <select {...input}  type="select" className="form-control" >
                    <option></option>
                    {numbers && numbers.map(value =>(
                        <option key={value} value={value}>ข้อ. {value}</option>
                    ))
                    }
                    </select> 
                     {touched && error && <span className="text-danger"><strong><i className="fa fa-warning"></i>{' '}{error}</strong></span>}
                    </Col>        
                </FormGroup>
            </div>
                
                    )
    }
 


export default renderSelect;
  
