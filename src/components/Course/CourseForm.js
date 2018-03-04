import React, { Component } from 'react';
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../../components/Utils/renderFields';
class CourseForm extends Component {
    render() {
        const { handleSubmit, CourseSave } = this.props
        return (
            <div>
                 <ModalBody>
                    {/* ตรวจสอบว่ามี err หรือไม่ */}
                    {CourseSave.isRejected && <div className="alert alert-danger">{CourseSave.data}</div>}

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
                    <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                </ModalFooter>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.name) {
        errors.name = 'จำเป็นต้องกรอกชื่อ-สกุล';
    }

    if (!values.username) {
        errors.username = 'จำเป็นต้องกรอก Username !';
    } else if (values.username.length < 3) {
        errors.username = 'Username ต้องมากกว่า 3 ตัวอักษร !';
    }

    return errors;
}

//เรียกใช้ redux-form โดยให้มีการเรียกใช้การ validate ด้วย
const form = reduxForm({
    form: 'CourseForm',
    validate
})

export default form(CourseForm);