import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadPeriods } from '../../../redux/actions/periodActions';
import {connect} from 'react-redux'
import PeriodTable from '../../../components/period/periodTable';
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

    render() {
        
        return (
            <div className="animated fadeIn">
                <PeriodTable />
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