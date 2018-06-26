import React, { Component } from 'react'
import ReportFilter from '../../../components/Report/ReportFilter';
import ReportTable from '../../../components/Report/ReportTable';
import {loadOrders} from '../../../redux/actions/courseorderActions';
import {connect} from 'react-redux'
 class Report extends Component {
    constructor(props){
      super(props)
      this.handleRage = this.handleRage.bind(this)
    }
    handleRage(start, end){
          if(start && end){
            this.props.dispatch(loadOrders(start,end))
          }
    }
    componentDidMount(){
      this.props.dispatch(loadOrders())
    }

  render() {
    const {courseOrders} = this.props
  
    return (
      <div className="animated fadeIn">
        <ReportFilter onSearchTermChange={this.handleRage}/>
        <ReportTable data={courseOrders.data} />

      </div>
    )
  }
}
function mapStateToProps(state){
    return{
      courseOrders:state.courseOrderReducers.courseOrders
    }
}
export default connect(mapStateToProps)(Report);