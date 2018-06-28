import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

 
const renderSelectObject = ({ input, label, type, textarea, autoFocus,data, meta: { touched, error } })  => {
    return(
            <div>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor={input.name}>{label}</Label>
                    </Col>
                    <Col xs="12" md="6">              
                        <select {...input} className="form-control" selected={input.value}>
                                {data && data.map((value, key) =>(
                                <option key={key} value={value.id} >{value.label}</option>
                                    ))}
                        </select>
                        {touched && error && <span className="text-danger">{error}</span>}
                    </Col>        
                </FormGroup>
            </div>
    )
    }
 


export default renderSelectObject;
  

