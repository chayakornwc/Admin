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
            term:''
        }
     
       
    }
    static propTypes ={
      onSearchTermChange:propTypes.func.isRequired,
      placeholder:propTypes.string,
    
  }
  

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
}   
  
    handleChang = name=> event=>{
      this.setState({
       [name]:moment(event).format('LL')
      })
     
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

                        <Datepicker   onChange={this.handleChang('startDate')}  className="form-control" selected={this.state.startDate ? moment(this.state.startDate, 'LL'): null}    minDate={moment().add(543, "years")} />
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

                        <Datepicker   onChange={this.handleChang('endDate')}  className="form-control" selected={this.state.endDate ? moment(this.state.endDate, 'LL'): null}    minDate={ this.state.startDate ? moment(this.state.startDate, 'LL') : moment().add(543, 'years')} />
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
                        <Input className="form-check-input"  type="checkbox" id="per_status0" name="per_status0" value="0"/>
                        <Label className="form-check-label" check htmlFor="per_status0">เปิดการอบรม</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="per_status1" name="iper_status1" value="1"/>
                        <Label className="form-check-label" check htmlFor="per_status1">กำลังดำเนินการ</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="per_status2" name="per_status2" value="2"/>
                        <Label className="form-check-label" check htmlFor="per_status2">ระงับการอบรม</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="per_status3" name="per_status3" value="3"/>
                        <Label className="form-check-label" check htmlFor="per_status3">การอบรมเสร็จสิ้น</Label>
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