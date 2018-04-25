import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Popover ,NavItem,NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ModalBody, ModalFooter, ModalHeader, Modal, Form, FormGroup, Col, Label, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import renderFieldsDisabled from '../Utils/renderFieldsDisabled';
import { Field, reduxForm } from 'redux-form';

import renderField from '../Utils/renderFields';

const moment = require('moment');
moment.locale('th');
moment().format('LL');
class AttendeeForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            popoverOpen: false,
            dropdownOpen:false,
            term:''
        }
        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.HookAtten = this.HookAtten.bind(this);
        this.renderUser = this.renderUser.bind(this);
     
    }
        handleInitialize =()=>{
            let definedData = {
                "id":this.props.periodId,
                 "username":'',
                 "fullname":'',
                 "major":'',
                 "registration_id":''
            }
            this.props.initialize(definedData); 
        }

        
        PopoverToggle =()=>{
            this.setState({
                popoverOpen:!this.state.popoverOpen
            })
        }
        dropdownToggle = () =>{
            this.setState({
                dropdownOpen:!this.state.dropdownOpen
            })
        }
        toggle = () => {
            this.props.onToggle();
        }
        handleChange = (values) => {
            this.setState({
                term:values
            })
            this.props.attenderSearch(values)
        }   
        HookAtten =(id)=>{
            this.setState({
                term:'',
                dropdownOpen:false
            })
            this.props.AttendSelect(id);
            this.props.usersReset();   
        }
        onSubmit = (values)=>{
            console.log(values)
                // this.props.attenderSubmit(values);
        }
        componentWillReceiveProps(nextProps){
           
        if(nextProps.users == ''){
            this.setState({
                dropdownOpen:false
            })
        }else{
            this.setState({
                dropdownOpen:true
            })
      
        }
        if(nextProps.user){
                let  definedData = {
                    "id":this.props.periodId,
                        "username":nextProps.user.username,
                        "fullname":nextProps.user.fullname,
                        "major":nextProps.user.major,
                        "registration_id":nextProps.user.id
                }
                this.props.initialize(definedData);
            }
        }
     

     componentDidMount(){
     
     }
    
     renderUser =()=>{
         const AttendSelect = term =>{
             this.HookAtten(term)
         } 
         const isActive = this.state.dropdownOpen ? 'is-active':'is-passive'
         if (this.state.dropdownOpen){
          return  [this.props.users && <div key={1} className="dropdown show">
            <div  key={2} className={"dropdown-menu "+isActive} x-placement="bottom-start"  aria-labelledby="dropdownMenuButton" >
            {this.props.users.map(function(e, key){
                return <div  className="dropdown-item " onClick={AttendSelect(e.id)}  key={key+3}>{e.username}{' '}{e.first_name}{' '}{e.last_name}{' '}{e.major}</div >
            })}
            </div>
            </div >
        ]
      
    
    }
         }
     
    render() {
        // handleSubmit  properties of redux form
        const {users, data, attenderSave, onSubmit, handleSubmit , modalTitle, onToggle, course, operation_rooms} = this.props
        const AttendSelect = term =>{
            this.HookAtten(term)
        } 
        const isActive = this.state.dropdownOpen ? 'is-active':'is-passive';
        return (
            <div>
                <ModalHeader toggle={onToggle}>{modalTitle}</ModalHeader>
                 <ModalBody>
                    {/* ตรวจสอบว่ามี err หรือไม่ */}
                    {attenderSave.isRejected && <div className="alert alert-danger">{attenderSave.data}</div>}

                    {/* รูปแบบการแสดงผลจัดตาม Bootstrap 4 */}
                    <Form className="form-horizontal">
                            <FormGroup row>   
                                <Col md="12">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                        <i className="fa fa-users"></i>
                                        </InputGroupText>
                                        </InputGroupAddon>
                                        <Input value={this.state.term} autoComplete="off" id="term" name="term" onChange={e=> this.handleChange(e.target.value)} type="text" placholder="ค้นหา" />
                                    </InputGroup>
                                    {this.props.users && <div key={1} className="dropdown show">
                                            <div  key={2} className={"dropdown-menu "+isActive} x-placement="bottom-start"  aria-labelledby="dropdownMenuButton" >
                                            {this.props.users.map(function(e, key){
                                                return <div  className="dropdown-item " onClick={()=>AttendSelect(e.id)}  key={key+3}>{e.username}{' '}{e.first_name}{' '}{e.last_name}{' '}{e.major}</div >
                                            })}
                                            </div>
                                            </div >
                                         }
                                    </Col>
                                    </FormGroup>
                                    <Field component={renderFieldsDisabled} name="username" label="บัญชีผู้ใช้" holder="บัญชีผู้ใช้ / รหัสนักศึกษา" />
                                    <Field component={renderFieldsDisabled} name="fullname" label="ชื่อเต็ม" holder="ชื่อ นามสกุล" />
                                    <Field component={renderFieldsDisabled} name="major" label="สาขาวิชา" holder="สาขาวิชา / สังกัด" />
                                   
                        </Form>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit(this.onSubmit)}><i className="icon-paper-plane"></i>{' '}เพิ่ม</Button>{' '}
                    <Button color="secondary" onClick={onToggle}>ยกเลิก</Button>
                </ModalFooter>
            </div>
        );
    }

}


Dropdown.propTypes = {
    disabled: PropTypes.bool,
    direction: PropTypes.oneOf(['down']),
    group: PropTypes.bool,
    isOpen: PropTypes.bool,
    // For Dropdown usage inside a Nav
    nav: PropTypes.bool,
    active: PropTypes.bool,
    // For Dropdown usage inside a Navbar (disables popper)
    inNavbar: PropTypes.bool,
    tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
    toggle: PropTypes.func
  };
  


const form = reduxForm({
    form: 'AttendeeForm'
})
export default form(AttendeeForm)

