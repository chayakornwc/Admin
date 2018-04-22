import React from 'react';
import {FormGroup, Label, Col,   Input  } from 'reactstrap';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
const renderFieldGroup = ({ input, label, type, holder,  meta: { touched, error } }) => {

    return (
        <div>
        <FormGroup row>
        <Col md="2">
          <Label htmlFor={input.name}>{label}</Label>
        </Col>
        <Col xs="12" md="10">
          <Input {...input}  placeholder={holder} type={type} id={input.name}  disabled/>
        </Col>
      </FormGroup>
      </div>
    )
    }
 


export default renderFieldGroup;