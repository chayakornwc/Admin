import React from 'react';
import Datepicker from 'react-datepicker';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
import 'react-datepicker/dist/react-datepicker.css';
const moment = require('moment');
moment.locale('th');
const renderDatePicker = ({ input, placeholder, defaultValue, meta: { touched, error } }) => {

 
    return (
                <div className="form-group row">
                        <div className="col-sm-9">
                                    <Datepicker {...input} {...placeholder}  dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value):null} />
                                    {/* ส่วนนี้จะแสดงข้อความ error ที่ได้จากการ validate */}
                                    {touched && error && <small className="text-danger">{error}</small>}
                        </div>
                    </div>
                    )
    }
 


export default renderDatePicker;