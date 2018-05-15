import React, { Component } from 'react'
import {loadUsers,getUser, deleteUser, resetStatus} from '../../../redux/actions/userActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Badge,Row,Col,Card,CardHeader,CardBody,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap';
import {confirmModalDialog} from '../../../components/Utils/reactConfirmModalDialog'
const moment = require('moment');
import UserTable from './Utils/Table';
moment.locale('th');
import Loader from '../../../components/Utils/Loader';
 class  Users extends Component {
     constructor(props){
         super(props);
            this.handleDelete = this.handleDelete.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
     }
     componentDidMount(){
        return this.props.dispatch(loadUsers()).then()
     }
     handleEdit = (id) => {
        this.props.dispatch(resetStatus())
        this.setState({ modalTitle: 'แก้ไข' })
        this.props.dispatch(getUser(id)).then(() => {
            this.toggle()
        })
    
    }
    
    
    handleSubmit = (values) => {
        this.props.dispatch(saveUser(values)).then(() => {
            if (!this.props.userSave.isRejected) {
                this.toggle()
                this.props.dispatch(loadUsers())
                {alertify.success('บันทึกข้อมูลเรียบร้อยแล้ว')}
            }
        })
    }
    
     
        handleDelete = (id) => {
            confirmModalDialog({
                show: true,
                title: 'ยืนยันการลบ',
                message: 'คุณต้องการลบข้อมูลผู้ใช้นี้ใช่หรือไม่',
                confirmLabel: 'ยืนยัน ลบทันที!!',
                onConfirm : () => this.props.dispatch(deleteUser(id)).then(() => {
                    this.props.dispatch(loadUsers())
                    if(!this.props.userDelete.isRejected){
                        {alertify.success('ลบข้อมูลผู้ใช้เรียบร้อยแล้ว')}
                    }
                })
            })
        }
    
    
  render() {
      const {users} = this.props  
    return (
        <div>
            {users.isLoading &&  <Loader />}
            { !users.isLoading &&
            <div className="fadeIn animated">
              {users.data &&
                <UserTable 
                    data={users.data}
                    buttonEdit={this.handleEdit}
                    buttonSubmit={this.handleSubmit}
                    buttonDelete={this.handleDelete}
                    />
                }  
            </div>
            }
      </div>
    )
  }

}


function mapStateToProps(state){
    return {
        users:state.userReducers.users
    }
}
export default connect(mapStateToProps)(Users)