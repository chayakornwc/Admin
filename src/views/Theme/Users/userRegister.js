import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Alert, Row, Col, Button,  Card, CardHeader, CardFooter, CardBody, Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import { saveUser} from '../../../redux/actions/userActions';

import renderField from '../../../components/Utils/renderFields';

import { Field, reduxForm } from 'redux-form';
import {loadTypes} from '../../../redux/actions/UserTypesActions';
import { connect } from 'react-redux';
import renderSelectprefix from './Utils/renderSelectPrefix';
import renderSelect from './Utils/renderSelect';
import renderSelectObject from './Utils/renderSelectObject';
const alertify = require('alertify.js');

const _province = [
    'กรุงเทพฯ',
    'กระบี่',
    'กาญจนบุรี',
    'กาฬสินธุ์',
    'กำแพงเพชร',
    'ขอนแก่น',
    'จันทบุรี',
    'ฉะเชิงเทรา',
    'ชลบุรี',
    'ชัยนาท',
    'ชัยภูมิ',
    'ชุมพร',
    'เชียงใหม่',
    'เชียงราย',
    'ตรัง',
    'ตราด',
    'ตาก',
    'นครนายก',
    'นครปฐม',
    'นครพนม',
    'นครราชสีมา',
    'นครศรีธรรมราช',
    'นครสวรรค์',
    'นนทบุรี',
    'นราธิวาส',
    'น่าน',
    'บึงกาฬ',
    'บุรีรัมย์',
    'ปทุมธานี',
    'ประจวบคีรีขันธ์',
    'ปราจีนบุรี',
    'ปัตตานี',
    'พระนครศรีอยุธยา',
    'พะเยา',
    'พังงา',
    'พัทลุง',
    'พิจิตร',
    'พิษณุโลก',
    'เพชรบุรี',
    'เพชรบูรณ์',
    'แพร่',
    'ภูเก็ต',
    'มหาสารคาม',
    'มุกดาหาร',
    'แม่ฮ่องสอน',
    'ยโสธร',
    'ยะลา',
    'ร้อยเอ็ด',
    'ระนอง',
    'ระยอง',
    'ราชบุรี',
    'ลพบุรี',
    'ลำปาง',
    'ลำพูน',
    'เลย',
    'ศรีสะเกษ',
    'สกลนคร',
    'สงขลา',
    'สตูล',
    'สมุทรปราการ',
    'สมุทรสงคราม',
    'สมุทรสาคร',
    'สระแก้ว',
    'สระบุรี',
    'สิงห์บุรี',
    'สุโขทัย',
    'สุพรรณบุรี',
    'สุราษฎร์ธานี',
    'สุรินทร์',
    'หนองคาย',
    'หนองบัวลำภู',
    'อ่างทอง',
    'อำนาจเจริญ',
    'อุดรธานี',
    'อุตรดิตถ์',
    'อุทัยธานี',
    'อุบลราชธานี'
    ];
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
const gender = ['ชาย', 'หญิง'];



     class UserRegister extends Component {
         constructor(props){
             super(props)
         }
         
        onSubmit = (values)=>{
            return this.props.dispatch(saveUser(values)).then(()=>{
                if(!this.props.userSave.isRejected){
                    this.props.handleInitailize();
                    console.log(this.props.userSave);
                    alertify.success("เพิ่มข้อมูลเรียบร้อยแล้ว"); 
                }else{
                    alertify.error(this.props.userSave.data);
                }
                
            })
        }
        handleInitailize = ()=>{
                let initData = {
                    "username":"",
                    "password":"password",
                    "first_name":"",
                    "last_name":"",
                    "email":"",
                    "prefix":"",
                    "gender":"",
                    "address":"",
                    "city":"",
                    "district":"",
                    "province":"",
                    "major":"",
                    "affiliation":"",
                    "company":"มหาวิทยาลัยราชภัฏลำปาง"
                }
            this.props.initialize(initData);
        }
        componentDidMount(){
            this.handleInitailize();
              this.props.dispatch(loadTypes())
              
        }
      render() {     
        const {handleSubmit, submitting,UserTypes} = this.props    
        var userGroup = []; 
        {UserTypes.data && UserTypes.data.map(function(e,i){
            userGroup.push({
                id:e.user_group,
                label:e.type_name
            })
        })}
        return (
          <div className="animated fadeIn">
                 <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                    <i className="fa fa-address-card-o"></i>  เพิ่มผู้ใช้งาน
                                    <div className="card-actions">    
                                        <Button className="btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    {/* {periodSave.isRejected && <Alert isOpen={this.state.visible} color="danger" toggle={this.onDismiss}>{periodSave.data}</Alert>} */}
                                    <Form className="form-horizontal">
                                        <FormGroup>
                                            <Field name="username" component={renderField}  type="text" label="รหัสนักศึกษา / ชื่อบัญชีผู้ใช้"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="password" component={renderField}  type="password" label="Password"/>
                                        </FormGroup> 
                                        <FormGroup>
                                            <Field name="user_group" data={userGroup}component={renderSelectObject}  type="text" label="ประเภทผู้ใช้งาน"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="email" component={renderField}  type="text" label="E-mail" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="prefix" component={renderSelectprefix}  type="text" label="คำนำหน้า" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="first_name" component={renderField}  type="text" label="ชื่อ" />
                                        </FormGroup>     
                                        <FormGroup>
                                            <Field name="last_name" component={renderField}  type="text" label="นามสกุล" />
                                        </FormGroup>   
                                        <FormGroup>
                                            <Field name="gender" component={renderSelect} data={gender} type="text" label="เพศ" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="address" component={renderField}  type="text" label="ที่อยู่" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="city" component={renderField}  type="text" label="ตำบล" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="district" component={renderField}  type="text" label="อำเภอ" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="province" data={_province} component={renderSelect}  type="text" label="จังหวัด" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="major" component={renderField} type="text" label="สาขาวิชา" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="affiliation" data={affiliation} component={renderSelectObject}  type="text" label="คณะ / สำนัก" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Field name="company" component={renderField}  type="text" label="สังกัด" />
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
        userSave:state.userReducers.userSave,
        UserTypes:state.UserTypesReducers.UserTypes,
    }
}
function validate(values){
    const errors = {};
    if (!values.username){
        errors.username = "ต้องการฟิลด์นี้";
    }
    if(!values.password){
        errors.password = "ต้องการฟิลด์นี้";
    }
    if(!values.email){
        errors.email ="ต้องการฟิลด์นี้";
    }
    if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email ="คุณป้อนอีเมลไม่ถูกรูปแบบ";
    }
    if(!values.prefix){
        errors.prefix = "ต้องการฟิลด์นี้";
    }
    if(!values.gender){
        errors.gender = "ต้องการฟิลด์นี้"
    }
    if(!values.company){
        errors.company = "ต้องการฟิลด์นี้"
    }
    if(!values.first_name){
        errors.first_name = "ต้องการฟิลด์นี้";
    }
    if(!values.last_name){
        errors.last_name = "ต้องการฟิลด์นี้";
    }
    if(!values.affiliation){
        errors.affiliation="ต้องการฟิลด์นี้";
    }
    return errors;

}
const form = reduxForm({
    form: 'UserRegister',
    validate
 })
 
 
 UserRegister = connect(mapStateToProps)(UserRegister);

 export default form(UserRegister);