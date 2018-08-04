import React from 'react';
import Datepicker from 'react-datepicker';
//renderField จะรับ props ต่างๆ ของ Field ที่ได้จาก redux-form
import 'react-datepicker/dist/react-datepicker.css';
import './extends.css';
import {InputGroup, InputGroupAddon, InputGroupText,Tooltip} from 'reactstrap'
const moment = require('moment');
moment.locale('th');
moment().format('LL');
// let date = moment(dateStr, 'DD/MM/YYYY'); 
// if (date.isValid()) { 
//     date.add(543, 'years'); 
//     return date.format('DD/MM/YYYY'); 
//} 


const renderDatePicker = ({ input, placeholder, styles, id, defaultValue,startPeriodValue, meta: { touched, error } }) => {
  
  const defaultType =  <Datepicker 
                            autoComplete="off" 
                                {...input} 
                                id={id} placeholderText={placeholder}   
                                className="form-control"  
                                minDate={moment().add(543, 'years')}   
                                dateFormat='LL' 
                                selected={input.value !=='' ? moment(input.value, 'DD MMMM YYYY')  : null}
                        /> 
                        const fixedType = <Datepicker 
                        autoComplete="off" 
                            {...input} 
                            id={id} placeholderText={placeholder}   
                            className="form-control"  
                            minDate={moment(startPeriodValue, 'DD MMMM YYYY')}   
                            dateFormat='LL' 
                            selected={input.value !=='' ? moment(input.value, 'DD MMMM YYYY')  : null}
                    />
    return (
                <div>
                    <InputGroup style={{flexWrap:'unset'}}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fa fa-calendar"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        {startPeriodValue ? fixedType : defaultType}
                    </InputGroup>
                    {touched && error && 
                    <Tooltip placement="bottom" isOpen={true} target={id} className="danger">
                    <h5>{error}</h5>
                     </Tooltip>}
                 </div>
                  
              
                    )
    }
 


export default renderDatePicker;