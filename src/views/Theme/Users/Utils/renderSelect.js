import React from 'react';
import { FormGroup, Col, Label, Input, Alert } from 'reactstrap';

const renderSelect = ({ input, label, type, data,  autoFocus, meta: { touched, error } }) => {
        return (
                    <div>
                        <FormGroup row>
                        <Col md="3">
                        <Label htmlFor={input.name}>{label}</Label>
                        </Col>
                        <Col xs="12" md="4">              
                        <select {...input}  value={input.value} type="select" className="form-control">     
                        <option>กรุณาเลือก</option>
                        {data && data.map((e, i) =>(
                            <option key={i} value={e}>{e}</option>
                        ))
                        }
                        </select> 
                         {touched && error && <Alert color="danger" className="text-danger">{error}</Alert>}
                        </Col>        
                        </FormGroup>
                        </div>
                        )
        }
export default renderSelect;