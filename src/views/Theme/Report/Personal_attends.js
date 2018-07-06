import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadOrdersByuser} from '../../../redux/actions/courseorderActions';
import Page404 from '../../Pages/Page404/Page404';
import PropTypes from 'prop-types';
import {Card,CardHeader}from 'reactstrap'
import CourseOrderTable from '../../../components/Report/CourseOrderTable'
import {getPublicuser} from '../../../redux/actions/userActions';
class Personal_attends extends Component {
    constructor(props){
        super(props)
    }
    static contextTypes = {
      router: PropTypes.object
         }
    componentDidMount(){
      this.props.dispatch(loadOrdersByuser(this.props.match.params.registration_id))
      this.props.dispatch(getPublicuser(this.props.match.params.registration_id))
    }
   
  render() {
    const {usercourseOrders, user} = this.props
    if(!usercourseOrders.isLoading && usercourseOrders.data.length===0){
      return <Page404/>
    }
    
    return (
      <div className="container">
          <Card>
            <CardHeader>รายงานการเข้าร่วมรายบุคคลของ {user.data && user.data.fullname} รหัสนักศึกษา/รหัสผู้ใช้งาน {user.data && user.data.username}</CardHeader>
            <CourseOrderTable data={usercourseOrders.data}/>
          </Card>
      </div>
    )
  }
}
function mapStateToProps (state)  {
  return {
    usercourseOrders:state.courseOrderReducers.usercourseOrders,
    user:state.userReducers.user
  }
}
export default connect(mapStateToProps)(Personal_attends)