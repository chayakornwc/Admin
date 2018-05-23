import React from 'react';
import { FormGroup, Col, Label, Input, Alert } from 'reactstrap';

const renderSelectObject = ({ input, label, type, data,  autoFocus, meta: { touched, error } }) => {
        return (
                    <div>
                        <FormGroup row>
                        <Col md="3">
                        <Label htmlFor={input.name}>{label}</Label>
                        </Col>
                        <Col xs="12" md="4">              
                        <select {...input}  type="select" className="form-control" >    
                        <option selected>กรุณาเลือก</option>
                        {data && data.map((value, index) =>(
                            <option key={index} value={value.id}>{value.label}</option>
                        ))
                        }
                        </select> 
                         {touched && error && <Alert color="danger"><i className="fa fa-warning"></i>{' '}{error}</Alert>}
                        </Col>        
                        </FormGroup>
                        </div>
                        )
        }

export default renderSelectObject;


                                                