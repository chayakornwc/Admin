import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Modal,Alert, ModalHeader, ModalBody, Form, FormGroup, Button} from  'reactstrap'
import renderField from '../../../../components/Utils/renderFields';
import renderSelectObject from './renderSelectObject'
import renderSelect from './renderSelect'
import renderSelectprefix from './renderSelectprefix'
class Userform extends Component {
    handleInitailize = ()=>{
        const {data} = this.props;
        let initData = {
            "id":data.id ? data.id:'',
            "user_group":data.user_group,
            "username":data.username ? data.username:'',
            "first_name":data.first_name ? data.first_name : '',
            "last_name": data.last_name ? data.last_name : '',
            "email":data.email ? data.email : '',
            "prefix":data.prefix ? data.prefix : '',
            "gender":data.gender ? data.gender : '',
            "address":data.address ? data.address : '',
            "city":data.city ? data.city : '',
            "district":data.district ? data.district : '',
            "province":data.province ? data.province : '',
            "major":data.major ? data.major:'',
            "affiliation":data.affiliation ? data.affiliation :'',
            "company":data.company ? data.company :''
        }
    this.props.initialize(initData);
}
    toggle = () =>{
        this.props.onToggle();
    }
    componentDidMount=()=>{
        this.handleInitailize();
    }
   
  render() {

      const {data, submitting, userSave, modalTitle, onToggle, onSubmit,handleSubmit} = this.props
      const userGroup = [
        {id:1, label:"ผู้บริหาร"},
        {id:2, label:"ผู้ดูแลระบบ"},
        {id:4, label:"บุคคลากรสายวิชาการ"},
        {id:5, label:"บุคลากรสายสนับสนุน"},
        {id:6, label:"นักศึกษา"},
        {id:7, label:"บุคคลากร"},
    ];
    const _province = ['กรุงเทพฯ',
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
    'อุบลราชธานี'];
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
    return (
      <div>
          <ModalHeader  onToggle={onToggle}>{modalTitle}</ModalHeader>
          <ModalBody>
            <Form 
                className="form-horizontal"
                onSubmit={()=>{handleSubmit(this.onSubmit)}}
                >
                {userSave.isRejected && <Alert color="danger"><i className="fa fa-warning"></i>{' '}{userSave.data}</Alert>}
                    <FormGroup>
                                <Field name="username" component={renderField}  type="text" label="รหัสนักศึกษา / ชื่อบัญชีผู้ใช้"/>
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
                                        <Button  color="secondary" disabled={submitting}>Back</Button>{ ' '}
                                        <Button color="primary" disabled={submitting} onClick={()=>{handleSubmit()}}>Save changes</Button>     
                                    </div>

                    </Form>
                </ModalBody>

        
      </div>
    )
  }
}
function validate(values){
    let errors = {};
}
const form = reduxForm({
    form:'Userform',
    validate
})
export default form(Userform);