import React, { Component } from 'react';
import renderDatepicker from '../Utils/renderDatepicker';
import { Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import Datepicker from 'react-datepicker';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
import 'react-datepicker/dist/react-datepicker.css';
import values from 'redux-form/lib/values';
import propTypes from 'prop-types';

const moment = require('moment');
moment.locale('th');

class ReportFilter extends Component {
  
    constructor(props){
        super(props);
          this.state = {
            startDate:moment().add(543, 'years'),
            endDate:'',
        }
     
       
    }
    static propTypes = {
      onSearchTermChange:propTypes.func.isRequired,
      placeholder:propTypes.string,
    
  }
  


  
    handleChang = name=> event=>{
      this.setState({
       [name]: moment(event).isValid()  ? moment(event).format('LL') : ''
      })
      var startDate = this.state.startDate? this.state.startDate: '';
      var endDate = this.state.endDate? this.state.endDate: '';
      if(name == 'startDate'){
          startDate = moment(event).isValid() ? moment(event).format('LL') : '';
        
      }
      if(name=='endDate'){
         endDate = moment(event).isValid() ?  moment(event).format('LL'): '';
      }
       this.props.onSearchTermChange(startDate, endDate);
     
    }

    
  
render() {
    return (
           <div>
            <Row>
            <Col  >
            <Card>
              <CardHeader>
                ค้นหา
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                 
                  <FormGroup row>
                     <Col md="2">
                         <Label style={{'marginTop':'3px'}} htmlFor="appendedInputButton">ช่วงเวลา</Label>
                    </Col>
                    <Row>
                    <Col xs="5">
                    <InputGroup style={{'flexWrap':'inherit'}}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fa fa-calendar"></i>
                            </InputGroupText>
                    </InputGroupAddon>
                        <Datepicker  onChange={this.handleChang('startDate')}  className="form-control" dateFormat='LL' selected={moment(this.state.startDate, 'DD MMMM YYYY').isValid() ? moment(this.state.startDate, 'DD MMMM YYYY') : null}    />
                    </InputGroup>        
                </Col>
              <span style={{paddingTop:'.25rem'}}> ถึง</span>
                <Col xs="5">
                <InputGroup style={{'flexWrap':'inherit'}}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fa fa-calendar"></i>
                            </InputGroupText>
                    </InputGroupAddon>
                        <Datepicker onChange={this.handleChang('endDate')}  className="form-control" dateFormat='LL' selected={moment(this.state.endDate, 'DD MMMM YYYY').isValid() ? moment(this.state.endDate,  'DD MMMM YYYY') : null }    minDate={ this.state.startDate ? moment(this.state.startDate, 'LL') : moment().add(542, 'years')} />
                    </InputGroup>
                </Col>
                </Row>
                </FormGroup >
                </Form>
              </CardBody>
            </Card>
          </Col>
          </Row>
            </div>
        );
    }
}

export default ReportFilter;