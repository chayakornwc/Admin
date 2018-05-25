import React, { Component } from 'react'
import {loadUsers,getUser,saveUser, deleteUser, resetStatus} from '../../../redux/actions/userActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Modal, Badge,Row,Col,Card,CardHeader,CardBody,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap';
import {confirmModalDialog} from '../../../components/Utils/reactConfirmModalDialog';
import Userform from './Utils/Userform';
import Passwordform from './Utils/Passwordform';
const moment = require('moment');
import UserTable from './Utils/Table';
const alertify = require('alertify.js');
moment.locale('th');
import Loader from '../../../components/Utils/Loader';
 class  Users extends Component {
     constructor(props){
         super(props);
         this.state = {
             Modal:false,
             modalTitle:'',
             _Modalpassword:false
         }
            this.handleDelete = this.handleDelete.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChangepassword = this.handleChangepassword.bind(this);
            this.modalToggle = this.modalToggle.bind(this);
            this.modalpasswordToggle = this.modalpasswordToggle.bind(this);
            
     }
     componentDidMount(){
        return this.props.dispatch(loadUsers()).then()
     }

    
    handleSubmit = (values) => {
       return this.props.dispatch(saveUser(values)).then(() => {
            if (!this.props.userSave.isRejected) {
                if(this.state.Modal){
                    this.modalToggle();
                }
                if(this.state._Modalpassword){
                    this.modalpasswordToggle();
                }
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
        handleEdit = (id) => {
            this.props.dispatch(resetStatus())
            this.setState({ modalTitle: 'แก้ไข' })
            this.props.dispatch(getUser(id)).then(() => {
                this.modalToggle();
            })
        
        }
        
    modalToggle = ()=>{
        this.setState({
            Modal:!this.state.Modal
        })
    }
    modalpasswordToggle = ()=>{
        this.setState({
            _Modalpassword:!this.state._Modalpassword
        })
    }
    handleChangepassword = (id)=>{
        this.props.dispatch(resetStatus())
        this.setState({modalTitle:'เปลี่ยนรหัสผ่านผู้ใช้งาน'})
        this.props.dispatch(getUser(id)).then(()=>{
           this.modalpasswordToggle();
       })
    }

    
    
  render() {
      const {users, user, userSave} = this.props  
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
                    buttonChangePassword={this.handleChangepassword}
                    />  
                }
                
            </div>
            }
             <Modal className="modal-primary modal-lg" isOpen={this.state.Modal} toggle={this.modalToggle}>
                    <Userform
                        onToggle={this.modalToggle}
                        data={user.data}
                        modalTitle={this.state.modalTitle}
                        userSave={userSave}
                        onSubmit={this.handleSubmit}
                    />
            </Modal>
            <Modal className="modal-primary modal-lg" isOpen={this.state._Modalpassword} toggle={this.modalpasswordToggle}>
                <Passwordform
                onToggle={this.modalpasswordToggle}
                data={user.data}
                modalTitle={this.state.modalTitle}
                userSave={userSave}
                onSubmit={this.handleSubmit}
                />
            </Modal>
      </div>
    )
  }

}


function mapStateToProps(state){
    return {
        users:state.userReducers.users,
        userSave:state.userReducers.userSave,
        user:state.userReducers.user
    }
}
export default connect(mapStateToProps)(Users)