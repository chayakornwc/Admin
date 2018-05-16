import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import { loadCourse,getCourse } from '../../../redux/actions/courseActions';
import { saveUser} from '../../../redux/actions/userActions';

import renderField from '../../../components/Utils/renderFields';

import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';

const alertify = require('alertify.js');


     class UserRegister extends Component {
         constructor(props){
             super(props)
         }
      render() {          
        return (
          <div >
              UserRegister
          </div>
        )
      }
    }

function mapStateToProps(state){
    return {
        userSave:state.userReducers.userSave
    }
}
    export default UserRegister ;