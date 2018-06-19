import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';

 
const renderCheckbox = ({ input, label, type, autoFocus, meta: { touched, error } }) => {
            return (           
                        <FormGroup check inline>
                            <Input {...input} className="form-check-input" type={type}  />
                            <Label className="form-check-label" check htmlFor={input.name}>{label}</Label>
                        </FormGroup>
                    )
    }
 


export default renderCheckbox;
  
