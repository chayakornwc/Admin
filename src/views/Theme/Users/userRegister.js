import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import { saveUser} from '../../../redux/actions/userActions';

import renderField from '../../../components/Utils/renderFields';

import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';

const alertify = require('alertify.js');


     class UserRegister extends Component {
         constructor(props){
             super(props)
         }
        onSubmit = (values)=>{
            console.log(values);
        }
      render() {     
          const {handleSubmit} = this.props     
        return (
          <div className="animated fadeIn">
                 <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                    <i className="fa fa-user-add"></i>  เพิ่มผู้ใช้งาน
                                    <div className="card-actions">

                                        <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                                        <Button className="btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                                        <a href="#" className="btn-close"><i className="icon-close"></i></a>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    {/* {periodSave.isRejected && <Alert isOpen={this.state.visible} color="danger" toggle={this.onDismiss}>{periodSave.data}</Alert>} */}
                                    <Form className="form-horizontal">
                                        <FormGroup>
                                            <Field name="per_price" component={renderField}  type="number" label="ค่าใช้จ่ายต่อหัว" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="per_quota" component={renderField}  type="number" label="จำนวนที่นั่ง" />
                                        </FormGroup>
                                       
                                    <div className="form-actions"> 
                                        <Button  color="secondary">Back</Button>{ ' '}
                                        <Button color="primary" onClick={handleSubmit(this.onSubmit)}>Save changes</Button>     
                                    </div>
                                </Form>
                            </CardBody>
                    </Card>
                </Col>
            </Row>  
              
          </div>
        )
      }
    }

function mapStateToProps(state){
    return {
        userSave:state.userReducers.userSave
    }
}

const form = reduxForm({
    form: 'UserRegister',
    
 })
 
 
 UserRegister = connect(mapStateToProps)(UserRegister);

 export default form(UserRegister);