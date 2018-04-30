import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadPeriods, deletePeriod, savePeriod, resetStatus, getPeriod } from '../../../redux/actions/periodActions';
import {getAttendee, saveAttendee, deleteAttendee, loadAttenders} from '../../../redux/actions/AttendeeActions';
import {resetUserStore, publicLoadUsers, getUser, getPublicuser,resetStatusUsers} from '../../../redux/actions/userActions';
import { loadCourse } from '../../../redux/actions/courseActions';
import {loadRooms} from '../../../redux/actions/operationRoomActions';
import { debounce } from 'lodash';
import {connect} from 'react-redux';

import PeriodTable from '../../../components/period/periodTable';
import PeriodForm from '../../../components/period/periodForm';
import AttendeeForm from '../../../components/Period/AttendeeForm';

import {Modal} from 'reactstrap';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
import values from 'redux-form/lib/values';
import PeriodFilter from '../../../components/Period/PeriodFilter';

var alertify = require('alertify.js');

class Period extends Component {

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.AttenModalToggle = this.AttenModalToggle.bind(this);
        this.handleAttention = this.handleAttention.bind(this);
        this.attenderSubmit = this.attenderSubmit.bind(this);
        this.RemoveAttenders = this.RemoveAttenders.bind(this);
        this.state = {
            modal:false,
            AttenModal:false,
            backdrop: 'static',
            periodId:null
        }
      }
    componentDidMount(){
        this.props.dispatch(loadPeriods());
        this.props.dispatch(loadCourse());
        this.props.dispatch(loadRooms());
        alertify.error('Error notification message.'); 
    }

    modalToggle(){
        this.setState({
           modal: !this.state.modal
        })
    }
    AttenModalToggle(){
        this.setState({
            AttenModal:!this.state.AttenModal
        })
    }
    handleEdit=(id)=>{
        this.props.dispatch(resetStatus())
        this.setState({modalTitle:'แก้ไข'})
        this.props.dispatch(getPeriod(id)).then(()=>{
        this.modalToggle();
            
        })
    }
    handleAttention=(id)=>{
        this.setState({
            periodId:id
        })
        this.props.dispatch(resetStatus())
        this.setState({modalTitle:'รายชื่อผู้เข้าร่วมอบรม'})
        this.props.dispatch(getAttendee(id)).then(()=>{
            this.AttenModalToggle();
        })
    }
    handleDelete=(id)=>{
        confirmModalDialog({
            show:true,
            title:'ยืนยันการลบ',
            confirmLabel:'ยืนยัน ลบทันที',
            message:'คุณต้องการลบข้อมูลนี้ใช่หรือไม่',
            onConfirm: () => this.props.dispatch(deletePeriod(id)).then(() => {
                this.props.dispatch(loadPeriods())
                    if(!this.props.periodDelete.isRejected){
                        { alertify.alert('ลบข้อมูลหลักสูตรเรียบร้อยแล้ว')}
                    }
              })
            })
    }
    RemoveAttenders = (id, periodId)=>{
        confirmModalDialog({
            show:true,
            title:'ยืนยันการลบ',
            confirmLabel:'ยืนยัน ลบทันที',
            message:'คุณต้องการลบข้อมูลนี้ใช่หรือไม่',
                onConfirm: ()=>{
                    this.props.dispatch(deleteAttendee(id)).then(()=>{
                        this.props.dispatch(getAttendee(periodId))
                        if(!this.props.attenderDelete.isRejected){
                            alertify.success('ลบข้อมูลผู้เข้าร่วมเรียบร้อยแล้ว')
                        }
                    })
                } 
    })

}
    handleSubmit = (values)=>{
        this.props.dispatch(savePeriod(values)).then(()=>{
            if(!this.props.periodSave.isRejected){
                this.modalToggle();
                this.props.dispatch(loadPeriods());
                alertify.alert('แก้ไขข้อมูลเรียบร้อยแล้ว').set('basic', true);
                
            }
        })
    }
  
    handleSearch = (term, startDate, endDate, options) => {
        term != null ? term : null ;
        startDate != null ? startDate : null ;  
        endDate != null ? endDate : null;
        options != null ? options : null;
        this.props.dispatch(loadPeriods(term, startDate, endDate, options));
    }
    attenderSearch = (term)=>{
        this.props.dispatch(publicLoadUsers(term));
    }
    AttendSelect = (id)=>{
        this.props.dispatch(getPublicuser(id));
        
    }
    resetStatusUsers = ()=>{
        this.props.dispatch(resetStatusUsers());
    
    }
    attenderSubmit = (values)=>{
        this.props.dispatch(saveAttendee(values)).then((id = values.id)=>{
            if(!this.props.attenderSave.isRejected){
                this.props.dispatch(getAttendee(id)).then(()=>{
                    if(!this.props.attenders.isRejected){
                        this.props.dispatch(resetUserStore());
                    }
                })
            }
        })
        
    }
    
    render() {
        const {users,user, periods, period, periodSave, courses, operation_rooms, attenders, attenderDelete, attenderSave} = this.props;
        //period filter
        const Filter = debounce((term, startDate, endDate, options) => {
            this.handleSearch(term, startDate, endDate, options)
        },500)
         // Attendant find
        const attenderSearch = debounce(term =>{
            this.attenderSearch(term) 
        },500)
        
        if (periods.isRejected) {
            //ถ้ามี error
            return <h1>{periods.data}</h1>
        }
           
        
        return (
            <div className="animated fadeIn">
              <Modal isOpen={this.state.modal} toggle={this.modalToggle} className="modal-primary modal-lg" autoFocus={false} backdrop={this.state.backdrop}>
                <PeriodForm  modalTitle={this.state.modalTitle} data={period.data} operation_rooms={operation_rooms} course={courses}  periodSave={periodSave} onSubmit={this.handleSubmit} onToggle={this.modalToggle} />
              </Modal>

              <Modal isOpen={this.state.AttenModal} toggle={this.AttenModalToggle}  className="modal-primary modal-lg" autoFocus={false} backdrop={this.state.backdrop}>
               <AttendeeForm RemoveAttenders={this.RemoveAttenders} periodId={this.state.periodId} attenderSubmit={this.attenderSubmit} usersReset={this.resetStatusUsers} AttendSelect={this.AttendSelect} modalTitle={this.state.modalTitle} users={users.data} user={user.data} data={attenders.data} attenderSearch={attenderSearch} attenderSave={attenderSave} onSubmit={this.handleSubmitAtten} onToggle={this.AttenModalToggle}  /> 
              </Modal>
         
                <PeriodFilter onSearchChange={this.handleSearch} onSearchTermChange={Filter}/>
                <PeriodTable attendee={this.handleAttention} data={periods.data} buttonEdit={this.handleEdit} buttonDelete={this.handleDelete} />
            </div>
        );
    }
}



function mapStateToProps(state) {
    return{
        user:state.userReducers.user,   
        users:state.userReducers.users,
        attenders:state.attendeeReducers.attenders,
        attender:state.attendeeReducers.attender,
        attenderSave:state.attendeeReducers.attenderSave,
        attenderDelete:state.attendeeReducers.attenderDelete,
        periods:state.periodReducers.periods,
        period:state.periodReducers.period,
        periodSave:state.periodReducers.periodSave,
        periodDelete:state.periodReducers.periodDelete,
        courses:state.courseReducer.courses,
        operation_rooms: state.operationRoomReducers.operation_rooms
    }
}

export default connect(mapStateToProps)(Period);