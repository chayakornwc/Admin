import React, { Component } from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderField from '../Utils/renderFields';
class UserTypesForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            permission:'',
            type_name:''
        }
        this.permissionChange  = this.permissionChange.bind(this)
    }
    componentDidMount(){
       
    }
    permissionChange = (post)=>{
        this.setState({
            permission:post.value
        })
        this.props.initialize({
            permission:post.value,
            type_name:this.state.type_name
        })
       
    }
    toggle = () => {
        this.props.onToggle();
    }
    onSubmit = (values) => {
        this.props.onSubmit(values);
    }
    onChange(event){
        this.setState.event({
            type_name:event.target.value
        })
    }
  
    render() {
        // handleSubmit  properties of redux form
        const { data, saveUserTypes, onSubmit, handleSubmit,onToggle } = this.props
        return (
            <div>
                 <ModalBody>
                    {/* ตรวจสอบว่ามี err หรือไม่ */}
                    {saveUserTypes.isRejected && <div className="alert alert-danger">{saveUserTypes.data}</div>}

                    {/* รูปแบบการแสดงผลจัดตาม Bootstrap 4 */}
                
                    <Field name="type_name" component={renderField} onChange={(event)=>{this.setState(
                         this.setState({
                            type_name:event.target.value
                        })
                    )}}  type="text" label="ประเภท" autoFocus />
                    <FormGroup check inline>
                                        <Input checked={this.state.permission.includes(0)}  onChange={(event)=>{
                                            if(this.state.permission.includes(0)){
                                                if(this.state.permission.includes(1)){
                                                    var post = {
                                                        value:'1'
                                                    } 
                                                }else{
                                                    var post = {
                                                        value:' '
                                                    } 
                                                }
                                            }else{
                                                if(this.state.permission.includes(1)){
                                                    var post = {
                                                        value:'0,1'
                                                    } 
                                                }else{
                                                    var post = {
                                                      
                                                        value:'0'
                                                    } 
                                                }
                                            }
                                            this.permissionChange(post)
                                        }} className="form-check-input"  type="checkbox" id={'front'} name="front" value={0}/>
                                        <Label className="form-check-label" check htmlFor={'front'}>การอบรม</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                        <Input checked={this.state.permission.includes(1)} onChange={(event)=>{
                                              if(this.state.permission.includes(1)){
                                                if(this.state.permission.includes(0)){
                                                    var post = {
                                                        value:'0'
                                                    } 
                                                }else{
                                                    var post = {
                                                        value:' '
                                                    } 
                                                }
                                            }else{
                                                if(this.state.permission.includes(0)){
                                                    var post = {
                                                        value:'0,1'
                                                    } 
                                                }else{
                                                    var post = {
                                                        value:'1'
                                                    } 
                                                }
                                            }
                                            this.permissionChange(post)
                                        }}  className="form-check-input"  type="checkbox" id={'back'}name={'back'} value={1}/>
                                        <Label className="form-check-label" check htmlFor={'back'}>ระบบผู้ดูแล</Label>
                                </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit" onClick={handleSubmit(this.onSubmit)}>บันทึก</Button>{' '}
                    <Button  type="button"  color="danger" onClick={onToggle} >ปิด</Button>
                </ModalFooter>
            </div>
        );
    }
   
}

function validate(values) {
    const errors = {};
    if (!values.type_name) {
        errors.type_name = 'จำเป็นต้องกรอก ฟิลด์นี้!';
    }
    if(values.type_name && !/^[A-Za-z0-9ก-๙]+$/g.test(values.type_name)){
        errors.type_name = 'ไม่อนุญาติให้ป้อนอักษรพิเศษทุกประเภท'
    }
    return errors;
}

//เรียกใช้ redux-form โดยให้มีการเรียกใช้การ validate ด้วย
const form = reduxForm({
    form: 'UserTypesForm',
    validate
})

export default form(UserTypesForm);