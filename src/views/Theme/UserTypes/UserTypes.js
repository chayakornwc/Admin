import React, { Component } from 'react';
import {Card, CardHeader, CardBody, Modal,Button, ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';
import UserTypesTable from '../../../components/UserTypes/UserTypesTable';
import UserTypesForm from '../../../components/UserTypes/UserTypesForm'
import {DeleteUserType,loadTypes,UpdatePermiss} from '../../../redux/actions/UserTypesActions';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';
const alertify = require('alertify.js');

class UserTypes extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal:false
        }
        this.modalToggle = this.modalToggle.bind(this)
    }
    componentDidMount(){
        this.props.dispatch(loadTypes())
    }
    handleChange = (e) =>{
        this.props.dispatch(UpdatePermiss(e)).then(()=>{
            if(!this.props.saveUserTypes.isRejected){
                this.props.dispatch(loadTypes())
            }
        })
    }
    modalToggle=()=>{
        this.setState({
            modal:!this.state.modal
        })
    }
    handleAdd = ()=>{
        this.modalToggle();
    }
    handleSubmit = (values)=>{
        this.props.dispatch(UpdatePermiss(values)).then(()=>{
            if(!this.props.saveUserTypes.isRejected){
                this.modalToggle();
                this.props.dispatch(loadTypes())
                alertify.alert('เพิ่มข้อมูลเรียบร้อยแล้ว');
                
            }
        })
    }
    handleDelete = (id)=>{
        confirmModalDialog({
            show:true,
            title:'ยืนยันการลบ',
            confirmLabel:'ยืนยัน ลบทันที',
            type:'danger',
            message:'เมื่อคุณลบข้อมูลประเภทผู้ใช้งาน สมาชิกทั้งหมดที่เกี่ยวข้องจะถูกลบด้วย',
            onConfirm: () => this.props.dispatch(DeleteUserType(id)).then(() => {
              if(!this.props.deleteUserTypes.isRejected){
                this.props.dispatch(loadTypes())
                  { alertify.alert(this.props.deleteUserTypes.data)}
              }
              })
            })
    }
  render() {
      const {UserTypes,saveUserTypes} = this.props
    if(saveUserTypes.isRejected){
        alertify.error(saveUserTypes.data)
    }
    
    return (
      <div className="container">
        <Card>
            <CardHeader>จัดการประเภทผู้ใช้งาน
            <Button size="sm" 
            className="float-right" 
            color="primary"
            onClick={this.handleAdd}
            ><i className="fa fa-plus"></i>{'\u00A0 เพิ่มประเภทผู้ใช้งาน'}</Button>
            </CardHeader>
                <CardBody>
                    <UserTypesTable 
                        data={UserTypes.data}
                        permisschange={this.handleChange}
                        ButtonDelete={this.handleDelete}
                    />    
                </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.modalToggle} className="modal-primary" autoFocus={false}  >
          <ModalHeader toggle={this.modalToggle}>เพิ่มข้อมูล</ModalHeader>
            <UserTypesForm
               saveUserTypes={saveUserTypes} 
                onSubmit={this.handleSubmit}
                 onToggle={this.modalToggle} 
                    />
          </Modal>
      </div>
    )
  }
}
function mapStateToProps (state) {
    return {
        UserTypes:state.UserTypesReducers.UserTypes,
        saveUserTypes:state.UserTypesReducers.saveUserTypes,
        deleteUserTypes:state.UserTypesReducers.deleteUserTypes
        }
    
}
export default connect(mapStateToProps)(UserTypes)