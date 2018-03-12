import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
class Periodregister extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.state = { collapse: true, visible:true };
    }
    handleSubmit(){

    }
    handleUpdate(){

    }
    toggle(){

    }
    onDismiss(){

    }

    
    render() {
        return (
            <div>
                <h1> THIS PERIOD REGISTER</h1>
            </div>
        );
    }
}

Periodregister.propTypes = {

};

export default Periodregister;