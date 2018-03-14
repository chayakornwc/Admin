import React from 'react';
import Datepicker from 'react-datepicker';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
import 'react-datepicker/dist/react-datepicker.css';
const moment = require('moment');

let date = moment(dateStr, 'DD/MM/YYYY'); 
if (date.isValid()) { 
    date.add(543, 'years'); 
    return date.format('DD/MM/YYYY'); 
} 
const renderDatePicker = ({ input, placeholder, defaultValue, meta: { touched, error } }) => {
    moment.locale('th');
    moment().format('LL');
    console.log(moment('9 มีนาคม 2018'))
    return (
                <div className="form-group row">
                        <div className="col-sm-9">
                                    <Datepicker {...input} {...placeholder}   dateFormat='LL' selected={input.value ? moment(input.value):null} />
                                    {/* ส่วนนี้จะแสดงข้อความ error ที่ได้จากการ validate */}
                                    {touched && error && <small className="text-danger">{error}</small>}
                        </div>
                    </div>
                    )
    }
 


export default renderDatePicker;