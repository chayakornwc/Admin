import ReactQuill from 'react-quill'; // ES6

const renderTextAre = ({ input, label, type, data, autoFocus, meta: { touched, error } }) => {

    return (
                <div>
                    <FormGroup row>
                    <Col md="3">
                    <Label htmlFor={input.name}>{label}</Label>
                    </Col>
                    <Col xs="12" md="4">              
                        <ReactQuill />
                    </Col>        
                    </FormGroup>
                    </div>
                
                    )
    }