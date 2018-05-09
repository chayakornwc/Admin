import React from 'react';
import { FormGroup, Col, Label, Input } from 'reactstrap';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

const renderTextArea = ({ input, label, type, autoFocus, meta: { touched, error } }) => {
    var createModule =({
        modules: {
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline','strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
          },
        
          formats: [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
          ],
    })
    return (
                <div>
                    <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input.name}>{label}</Label>
                    </Col>
                    <Col xs="12" md="9">              
                        <ReactQuill   {...input}
                            onChange={(newValue, delta, secure) => {
                                if (secure === 'user') {
                                input.onChange(newValue);
                                }
                            }}
                            onBlur={(range, source, quill) => {
                                input.onBlur(quill.getHTML());
                            }} 
                            modules={createModule.modules}
                            className="form-control" />
                        {touched && error && <span className="text-danger">{error}</span>}
                    </Col>        
                    </FormGroup>
                    </div>
                    )
    }

    export default renderTextArea;