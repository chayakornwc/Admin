import React from 'react';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
const renderFieldGroup = ({ input, label, type, textarea, icon, autoFocus, meta: { touched, error } }) => {
import {Col, InputGroup, InputGroupAddon, InputGroupText, Input  } from 'reactstrap';

//สำหรับรูปแบบ Field ที่เป็น TextBox
 const inputType = <Input {...input} placeholder={placeholder} type={type} className="form-control" autoFocus={autoFocus} />;
 const iconType = <i className={icon} />;
    return (
                <div >
                  <Col md="12">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                           {iconType}
                          </InputGroupText>
                        </InputGroupAddon>
                        {inputType}
                      </InputGroup>
                    </Col>
                    </div>
                    )
    }
 


export default renderField;