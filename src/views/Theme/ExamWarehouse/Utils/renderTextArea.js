import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

const renderTextArea = ({ input, label, type, autoFocus, meta: { touched, error } }) => {

    return (
                <div>
                    <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input.name}>{label}</Label>
                    </Col>
                    <Col xs="12" md="9">              
                        <ReactQuill {...input} value={input.value}  className="form-control" />
                        {touched && error && <span className="text-danger">{error}</span>}
                    </Col>        
                    </FormGroup>
                    </div>
                
                    )
    }

    export default renderTextArea;