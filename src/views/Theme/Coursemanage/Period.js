import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadPeriods, deletePeriod, savePeriod } from '../../../redux/actions/periodActions';
import {connect} from 'react-redux'
import PeriodTable from '../../../components/period/periodTable';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
class Period extends Component {
    constructor(props){
        super(props);
    }
    state = {modal:false}
    componentDidMount(){
        this.props.dispatch(loadPeriods())
    }

    ModalToggle(){
        this.setState({
           modal: !this.state.modal
        })
    }
    handleEdit=(id)=>{
        
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
    render() {
        const {periods} = this.props;
        return (
            <div className="animated fadeIn">
                <PeriodTable data={periods.data} buttonEdit={this.handleEdit} buttonDelete={this.handleDelete} />
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
        courses:state.courseReducer.courses
    }
}

export default connect(mapStateToProps)(Period);