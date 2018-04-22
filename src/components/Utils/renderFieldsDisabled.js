import React from 'react';
import {FormGroup, Col, InputGroup, InputGroupAddon, InputGroupText, Input  } from 'reactstrap';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
const renderFieldGroup = ({ input, label, type,  meta: { touched, error } }) => {



 const inputType = <Input {...input} placeholder={label} type={type} className="form-control" autoFocus={autoFocus} />;

    return (
        <div>
        <FormGroup row>
        <Col md="3">
          <Label htmlFor="disabled-input">Disabled Input</Label>
        </Col>
        <Col xs="12" md="9">
          <Input {...input} placeholder={label} type={type} id="disabled-input"  disabled/>
        </Col>
      </FormGroup>
      </div>
    }
 


export default renderFieldGroup;