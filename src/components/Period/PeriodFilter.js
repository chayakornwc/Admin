import React, { Component } from 'react';
import renderDatepicker from '../Utils/renderDatepicker';
import { Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const moment = require('moment');
moment.locale('th');

class PeriodFilter extends Component {
    constructor(props){
        super(props);
    }
    state={
        startDate:null
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
                      <InputGroup style={{'flex-wrap':'unset'}}>
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                                <i className="fa fa-search">ค้นหา</i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="ลองค้นหาดูสิ"/>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Col md="3">
                         <Label htmlFor="appendedInputButton">วันที่อบรม</Label>
                    </Col>
                    <Col md="3">
                    <InputGroup >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fa fa-calendar"></i>
                            </InputGroupText>
                    </InputGroupAddon>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            minDate={moment()}
                            maxDate={moment().add(5, "months")} />
                    </InputGroup>
                </Col>
                </FormGroup >
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary"><i className="fa fa-facebook"></i></Button>
                        </InputGroupAddon>
                        <Input type="text" id="input3-group2" name="input3-group2" placeholder="Search"/>
                        <InputGroupAddon addonType="append">
                          <Button type="button" color="primary"><i className="fa fa-twitter"></i></Button>
                        </InputGroupAddon>
                      </InputGroup>
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