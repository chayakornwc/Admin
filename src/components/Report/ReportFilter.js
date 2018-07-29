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
const affiliation = [
    {id:1000, label:"มหาวิทยาลัยราชภัฏลำปาง"},
    {id:1001, label:"สำนักงานอธิการบดี"},                             
    {id:1002, label:"คณะครุศาสตร์"},      
    {id:1003, label:"คณะมนุษยศาสตร์และสังคมศาสตร์"},
    {id:1004, label:"คณะวิทยาศาสตร์"},
    {id:1005, label:"คณะวิทยาการจัดการ"},
    {id:1006, label:"คณะเทคโนโลยีการเกษตร"},
    {id:1007, label:"คณะเทคโนโลยีอุตสาหกรรม"},                         
    {id:1008, label:"กองบริการการศึกษา"},                      
    {id:1009, label:"กองนโยบายและแผน"},
    {id:1010, label:"กองพัฒนานักศึกษา"},
    {id:1011, label:"สถาบันวิจัยและพัฒนา"},
    {id:1012, label:"สำนักศิลปะและวัฒนธรรม"},
    {id:1014, label:"ศูนย์คอมพิวเตอร์"},                          
    {id:1015, label:"โครงการจัดตั้งสถาบันภาษา"},
    {id:1016, label:"ศูนย์วิทยาศาสตร์และวิทยาศาสตร์ประยุกต์"},   
    {id:1017, label:"ศูนย์เวชศึกษาป้องกัน"},
    {id:1018, label:"ศูนย์จีน"},   
    {id:1019, label:"ศูนย์วิทยบริการ"},      
    {id:1020, label:"ศูนย์การศึกษาพัฒนาครู"},
    {id:1021, label:" บัณฑิตศึกษา"},
    {id:1024, label:"สำนักวิทยบริการและเทคโนโลยีสารสนเทศ"},             
    {id:1025, label:"หน่วยตรวจสอบภายใน"},
    {id:1028, label:"งบกลางมหาวิทยาลัย"}, 
    {id:1029, label:"ศูนย์ฝึกปฏิบัติวิชาชีพอาลัมพาง"},  
    {id:1030, label:"สำนักงานสภามหาวิทยาลัย"},                         
    {id:1031, label:"สภาคณาจารย์และข้าราชการ"},                          
    {id:1032, label:"โรงเรียนสาธิตมหาวิทยาลัยราชภัฏลำปาง"},
    {id:2000, label:"บุคคลภายนอก"}         
  ];
class ReportFilter extends Component {
  
    constructor(props){
        super(props);
          this.state = {
            startDate:moment().add(543, 'years'),
            endDate:'',
            affiliation:'',
            course:''
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

    onSelectChange = name=> event=>{
        this.setState({
            [name]:event.target.value
        })
    }
  
render() {
    const {course} = this.props
    console.log(this.state)
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
                <FormGroup row>
                     <Col md="2">
                         <Label style={{'marginTop':'3px'}} htmlFor="appendedInputButton">คณะ</Label>
                    </Col>
                    <Row>
                    <Col xs="5">
                    <Input onChange={this.onSelectChange('affiliation')} type="select" name="course">
                    <option value=""></option>
                    {affiliation && affiliation.map(function(e,i){
                        return <option key={e.id} value={e.id}>{e.label}</option>
                    })}
                </Input>
                </Col>
                <Col md="2">
                         <Label style={{'marginTop':'3px'}} htmlFor="appendedInputButton">หลักสูตร</Label>
                </Col>
                <Col xs="5">
                <Input onChange={this.onSelectChange('course')} type="select" name="course">
                    <option value=""></option>
                    {course && course.map(function(e,i){
                        return <option  key={e.course_id} value={e.course_id}>{`${e.course_name} (${e.course_nameEng})`}</option>
                    })}
                </Input>
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