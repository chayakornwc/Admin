import React, { Component } from 'react'
import ReportFilter from '../../../components/Report/ReportFilter';
import ReportTable from '../../../components/Report/ReportTable';
import {loadOrders} from '../../../redux/actions/courseorderActions';
import Loader from '../../../components/Utils/loader';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
 class Report extends Component {
    constructor(props){
      super(props)
      this.handleRage = this.handleRage.bind(this)
      this.renderToRedirect = this.renderToRedirect.bind(this)
    }
    static contextTypes = {
      router: PropTypes.object
         }
         renderToRedirect(id){
          this.context.router.history.push(`/report/personal_attends/${id}`);
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
      <div>
        <ReportFilter onSearchTermChange={this.handleRage}/>
        {courseOrders.isLoading && <div style={{display:'flex', justifyContent:'center'}}><Loader/></div>}
        <ReportTable renderToRedirect={this.renderToRedirect} data={courseOrders.data} />
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