import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

const renderSelect = ({ input, label, type, data,  autoFocus, meta: { touched, error } }) => {
        return (
                    <div>
                        <FormGroup row>
                        <Col md="3">
                        <Label htmlFor={input.name}>{label}</Label>
                        </Col>
                        <Col xs="12" md="4">              
                        <select {...input}  type="select" className="form-control" >    
                        <option></option>
                        {data && data.map((value, index) =>(
                            <option key={index} value={value}>{value}</option>
                        ))
                        }
                        </select> 
                         {touched && error && <small className="text-danger">{error}</small>}
                        </Col>        
                        </FormGroup>
                        </div>
                        )
        }
export default renderSelect;