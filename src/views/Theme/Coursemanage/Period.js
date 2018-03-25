import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadPeriods, deletePeriod, savePeriod, resetStatus, getPeriod } from '../../../redux/actions/periodActions';
import { loadCourse } from '../../../redux/actions/courseActions';
import {loadRooms} from '../../../redux/actions/operationRoomActions';

import {connect} from 'react-redux'
import PeriodTable from '../../../components/period/periodTable';
import PeriodForm from '../../../components/period/periodForm';
import {Modal} from 'reactstrap';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
import values from 'redux-form/lib/values';
import PeriodFilter from '../../../components/Period/PeriodFilter';

const alertify = require('alertify.js');

class Period extends Component {

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
      }

      state = {
        modal:false,
        backdrop: 'static'
    }

    componentDidMount(){
        this.props.dispatch(loadPeriods());
        this.props.dispatch(loadCourse());
        this.props.dispatch(loadRooms());
    }

    modalToggle(){
        this.setState({
           modal: !this.state.modal
        })
    }
    
    handleEdit=(id)=>{
        this.props.dispatch(resetStatus())
        this.setState({modalTitle:'แก้ไข'})
        this.props.dispatch(getPeriod(id)).then(()=>{
        this.modalToggle();
        console.log(this.props.period.data);
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
                  { alertify.alert('ลบข้อมูลหลักสูตรเรียบร้อยแล้ว').set('basic', true)}
              }
              })
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
    handleSearch = (term) => {
        this.props.dispatch(loadUsers(term))
    }
    render() {
        const {periods, period, periodSave, courses, operation_rooms} = this.props;
        return (
            <div className="animated fadeIn">
              <Modal isOpen={this.state.modal} toggle={this.modalToggle} className="modal-primary modal-lg" autoFocus={false} backdrop={this.state.backdrop}>
                <PeriodForm  modalTitle={this.state.modalTitle} data={period.data} operation_rooms={operation_rooms} course={courses}  periodSave={periodSave} onSubmit={this.handleSubmit} onToggle={this.modalToggle} />
            </Modal>
                <PeriodFilter handleSearch={this.handleSearch} />
                <PeriodTable  data={periods.data} buttonEdit={this.handleEdit} buttonDelete={this.handleDelete} />
            </div>
        );
    }
}

Period.propTypes = {

};

function mapStateToProps(state) {
    return{
        periods:state.periodReducers.periods,
        period:state.periodReducers.period,
        periodSave:state.periodReducers.periodSave,
        periodDelete:state.periodReducers.periodDelete,
        courses:state.courseReducer.courses,
        operation_rooms: state.operationRoomReducers.operation_rooms
    }
}

export default connect(mapStateToProps)(Period);