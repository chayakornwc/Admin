import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ModalBody, ModalFooter, ModalHeader, Modal } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderField from '../Utils/renderFields';
class PeriodForm extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.handleInitialize();
    }
    handleInitialize(){ 
        let initData = {
            course_id:'',
            course_status:null,
            course_name:'',
            course_nameEng:'',
            course_detail:''
        }
            if(this.props.data.course_id){
                initData = this.props.data
                //status ที่รับมาเป็น init แต่value ต้องแปลงเป็น string ก่อน
                initData.course_status = this.props.data.course_status.toString()
            }
            // method of redux-form
           
            this.props.initialize(initData);
    }
        toggle = () => {
            this.props.onToggle();
        }
        onSubmit = (values) => {
            this.props.onSubmit(values);
        }
    
    render() {
        // handleSubmit  properties of redux form
        const { data, periodSave, onSubmit, handleSubmit , modalTitle, onToggle} = this.props
        return (
            <div>
                <ModalHeader toggle={onToggle}>{modalTitle}</ModalHeader>
                 <ModalBody>
                    {/* ตรวจสอบว่ามี err หรือไม่ */}
                    {periodSave.isRejected && <div className="alert alert-danger">{periodSave.data}</div>}

                    {/* รูปแบบการแสดงผลจัดตาม Bootstrap 4 */}
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">สถานะ</label>
                        <div className="col-sm-9">
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <Field name="course_status"  component="input" type="radio" selected value="0"/>{' '}ระงับการใช้งาน
                                    </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <Field name="course_status" component="input" type="radio" value="1"/>{' '}เปิดการใช้งาน 
                                    </label>
                            </div>
                        </div>
                    </div>
                    <Field name="course_name" component={renderField}  type="text" label="ชื่อหลักสูตร" autoFocus />
                    <Field name="course_nameEng" component={renderField}  type="text" label="ชื่อภาษาอังกฤษ" />
                    <Field name="course_detail" component={renderField} textarea type="text" label="รายละเอียด" />
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit(this.onSubmit)}>บันทึก</Button>{' '}
                    <Button color="secondary" onClick={onToggle}>ยกเลิก</Button>
                </ModalFooter>
            </div>
        );
    }

}

function validate(values) {
    const errors = {};
    if (!values.course_name) {
        errors.course_name = 'จำเป็นต้องกรอก ฟิลด์นี้!';
    }
    if (!values.course_status){
        errors.course_status = 'จำเป็นต้องเลือก';    
    }
    if (!values.course_nameEng) {
        errors.course_nameEng = 'จำเป็นต้องกรอก ฟิลด์นี้!';
    }

    return errors;
}



PeriodForm.propTypes = {

};


const form = reduxForm({
    form: 'PeriodForm',
    validate
})
export default form(PeriodForm)

