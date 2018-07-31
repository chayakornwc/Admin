import React, { Component } from 'react'
import ReportFilter from '../../../components/Report/ReportFilter';
import ReportTable from '../../../components/Report/ReportTable';
import {loadOrders} from '../../../redux/actions/courseorderActions';
import {loadCourse} from '../../../redux/actions/courseActions'
import Loader from '../../../components/Utils/loader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
 class Report extends Component {
    constructor(props){
      super(props)
      this.handleRage = this.handleRage.bind(this)
      this.renderToRedirect = this.renderToRedirect.bind(this)
      this.handleSearchtermChange = this.handleSearchtermChange.bind(this)
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
    handleSearchtermChange(start, end, affiliation, course){
   
      this.props.dispatch(loadOrders(start,end,affiliation,course));
    }
    componentDidMount(){
      this.props.dispatch(loadOrders())
      this.props.dispatch(loadCourse())
    }

  render() {
    const {courseOrders, courses} = this.props
  
    return (
      <div>
        <ReportFilter 
          course={courses.data} 
          onSearchTermChange={this.handleSearchtermChange}/>
        {courseOrders.isLoading && <div style={{display:'flex', justifyContent:'center'}}><Loader/></div>}
        <ReportTable renderToRedirect={this.renderToRedirect} data={courseOrders.data} />
      </div>
    )
  }
}
function mapStateToProps(state){
    return{
      courseOrders:state.courseOrderReducers.courseOrders,
      courses:state.courseReducer.courses,
    }
}
export default connect(mapStateToProps)(Report);