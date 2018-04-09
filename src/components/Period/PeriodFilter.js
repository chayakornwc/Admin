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

class PeriodFilter extends Component {
    constructor(props){
        super(props);
          this.state = {
            startDate:null,
            endDate:null,
            term:'',
            options:[0,1]
            
        }
     
       
    }
    static propTypes ={
      onSearchTermChange:propTypes.func.isRequired,
      onSearchDateChange:propTypes.func.isRequired,
      placeholder:propTypes.string,
    
  }
  

  onInputChange(term) {
    this.setState({ term });
    var startDate = this.state.startDate? this.state.startDate: '';
    var endDate = this.state.endDate? this.state.endDate: '';
    var options =  this.state.options ? this.state.options:'';
    this.props.onSearchTermChange(term, startDate, endDate, options);
  
}   
  
    handleChang = name=> event=>{
      this.setState({
       [name]:moment(event).format('LL')
      })
      var startDate = this.state.startDate? this.state.startDate: '';
      var endDate = this.state.endDate? this.state.endDate: '';
      var term = this.state.term ? this.state.term:'';
      var options =  this.state.options ? this.state.options:'';
      if(name == 'startDate'){
          startDate = moment(event).format('LL');
        
      }
      if(name=='endDate'){
         endDate = moment(event).format('LL');
      }
       this.props.onSearchChange(term,startDate, endDate,options);

     
    }

    handleCheck = e =>{
      const options =this.state.options
      var startDate = this.state.startDate? this.state.startDate: '';
      var endDate = this.state.endDate? this.state.endDate: '';
      var term = this.state.term ? this.state.term:'';
      let index
     
      if (e.target.checked) {
        // add the numerical value of the checkbox to options array
        options.push(+e.target.value)
      } else {
        // or remove the value from the unchecked checkbox from the array
        index = options.indexOf(+e.target.value)
        options.splice(index, 1)
      }
     
      // update the state with the new array of options
      this.setState({ options: options })
      
      this.props.onSearchChange(term,startDate, endDate,options);
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
                    <Col md="12">
                      <InputGroup style={{'flexWrap':'inherit'}}>
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                                <i className="fa fa-search">ค้นหา</i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={e=> this.onInputChange(e.target.value)} value={this.state.term} type="text" id="searchPeriod" name="searchPeriod" placeholder="ลองค้นหาดูสิ"/>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Col md="2">
                         <Label style={{'marginTop':'3px'}} htmlFor="appendedInputButton">วันที่อบรม</Label>
                    </Col>
                    <Row>
                    <Col xs="5">
                    <InputGroup style={{'flexWrap':'inherit'}}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fa fa-calendar"></i>
                            </InputGroupText>
                    </InputGroupAddon>
                        <Datepicker  onChange={this.handleChang('startDate')}  className="form-control" selected={this.state.startDate ? moment(this.state.startDate, 'LL'): null}    minDate={moment().add(543, "years")} />
                    </InputGroup>        
                </Col>
                <i className="fa fa-angle-right fa-lg mt-2"></i>
                <Col xs="5">
                <InputGroup style={{'flexWrap':'inherit'}}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fa fa-calendar"></i>
                            </InputGroupText>
                    </InputGroupAddon>
                        <Datepicker onChange={this.handleChang('endDate')}  className="form-control" selected={this.state.endDate ? moment(this.state.endDate, 'LL'): null}    minDate={ this.state.startDate ? moment(this.state.startDate, 'LL') : moment().add(543, 'years')} />
                    </InputGroup>
                </Col>
                </Row>
                </FormGroup >
                  <FormGroup row>
                     <Col md="2">
                      สถานะ
                     </Col>
                      <Col md="9">
                      <FormGroup check inline>
                        <Input checked={this.state.options.includes(0)} onChange={this.handleCheck} className="form-check-input"  type="checkbox" id="per_status_0" name="per_status_0" value={0}/>
                        <Label className="form-check-label" check htmlFor="per_status_0">เปิดการอบรม</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input checked={this.state.options.includes(1)} onChange={this.handleCheck}  className="form-check-input" type="checkbox" id="per_status_1" name="per_status_1" value={1}/>
                        <Label className="form-check-label" check htmlFor="per_status_1">กำลังดำเนินการ</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input   checked={this.state.options.includes(2)} onChange={this.handleCheck}  className="form-check-input" type="checkbox" id="per_status_2" name="per_status_2" value={2}/>
                        <Label className="form-check-label" check htmlFor="per_status_2">ระงับการอบรม</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input checked={this.state.options.includes(3)}   onChange={this.handleCheck}   className="form-check-input" type="checkbox" id="per_status_3" name="per_status_3" value={3}/>
                        <Label className="form-check-label" check htmlFor="per_status_3">การอบรมเสร็จสิ้น</Label>
                      </FormGroup>
                      </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          </Row>
            </div>
        );
    }
}

export default PeriodFilter;