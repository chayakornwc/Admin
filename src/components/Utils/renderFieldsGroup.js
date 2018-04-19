import React from 'react';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
const renderField = ({ input, label, type, textarea, autoFocus, meta: { touched, error } }) => {
//สำหรับรูปแบบ Field ที่เป็น TextArea

//สำหรับรูปแบบ Field ที่เป็น TextBox
 const inputType = <input {...input} placeholder={label} type={type} className="form-control" autoFocus={autoFocus} />;
 const icon = data;
    return (
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">{label}</label>
                        <div className="col-sm-9">
                                {/* เลือกว่าจะแสดงแบบ textarea หรือ input ธรรมดา*/}
                                    {textarea ? textareaType : inputType}
                                    {/* ส่วนนี้จะแสดงข้อความ error ที่ได้จากการ validate */}
                                    {touched && error && <span className="text-danger">{error}</span>}
                        </div>
                    </div>
                    )
    }
 


export default renderField;