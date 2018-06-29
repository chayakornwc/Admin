import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {loadPeriods, deletePeriod, savePeriod, resetStatus, getPeriod } from '../../../redux/actions/periodActions';
import {getAttendee, saveAttendee, deleteAttendee, loadAttenders} from '../../../redux/actions/AttendeeActions';
import {resetUserStore, publicLoadUsers, getUser, getPublicuser,resetStatusUsers} from '../../../redux/actions/userActions';
import { loadCourse } from '../../../redux/actions/courseActions';
import {loadRooms} from '../../../redux/actions/operationRoomActions';
import { debounce } from 'lodash';
import {connect} from 'react-redux';


import PeriodForm from '../../../components/period/periodForm';
import AttendeeForm from '../../../components/Period/AttendeeForm';
import Surver from '../../../components/Period/Survey/Survey';
import {Nav,NavLink, NavItem,TabContent,Container, Row,Alert, Col} from 'reactstrap';
import { confirmModalDialog } from '../../../components/Utils/reactConfirmModalDialog';

import classnames from 'classnames';
import {getPeriodSurvey} from '../../../redux/actions/analysisActions';
var alertify = require('alertify.js');

class PeriodManage extends Component {

    constructor(props){
       
        super(props);
        this.state = {
            activeTab:1
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
        this.handleAttention = this.handleAttention.bind(this);
        this.attenderSubmit = this.attenderSubmit.bind(this);
        this.RemoveAttenders = this.RemoveAttenders.bind(this);
     
       
      }
      static contextTypes = {
        router: PropTypes.object
           }
    componentDidMount(){
        this.props.dispatch(getPeriod(this.props.match.params.period_id));
        this.props.dispatch(loadCourse());
        this.props.dispatch(loadRooms());
    }
    
    toggleTab = (tab)=>{
        if(tab ===2){
            this.props.dispatch(getAttendee(this.props.match.params.period_id))
        }
        if(tab===3){
            this.props.dispatch(getPeriodSurvey(this.props.match.params.period_id))
        }
        if(tab !== this.state.activeTab){
            this.setState({
                activeTab:tab
            })
        }
    }
    // remove period
    handleDelete=()=>{
        confirmModalDialog({
            show:true,
            title:'ยืนยันการลบ',
            confirmLabel:'ยืนยัน ลบทันที',
            message:'คุณต้องการลบข้อมูลนี้ใช่หรือไม่',
            onConfirm: () =>  this.props.dispatch(deletePeriod(this.props.match.params.period_id)).then(() => {
                
                    if(!this.props.periodDelete.isRejected){
                        this.props.dispatch(loadPeriods())
                        { alertify.alert('ลบข้อมูลหลักสูตรเรียบร้อยแล้ว')}
                        this.context.router.history.push(`/period}`);
                    }
              })
            })
    }
    //period save new data
    handleSubmit = (values)=>{
        this.props.dispatch(savePeriod(values)).then(()=>{
            if(!this.props.periodSave.isRejected){
                alertify.alert('แก้ไขข้อมูลเรียบร้อยแล้ว')
            }else{
                alertify.error(this.period.periodSave.data)
            }
        })
    }

   
    
    handleAttention=(id)=>{
        this.setState({
            periodId:id
        })
        this.props.dispatch(resetStatus())
        this.setState({modalTitle:'รายชื่อผู้เข้าร่วมอบรม'})
        this.props.dispatch(getAttendee(id)).then(()=>{  
        })
    }
    
    RemoveAttenders = (id, periodId)=>{
        confirmModalDialog({
            show:true,
            title:'ยืนยันการลบ',
            confirmLabel:'ยืนยัน ลบทันที',
            message:'คุณต้องการลบข้อมูลนี้ใช่หรือไม่',
                onConfirm: ()=>{
                    this.props.dispatch(deleteAttendee(id)).then(()=>{
                        this.props.dispatch(getAttendee(periodId))
                        if(!this.props.attenderDelete.isRejected){
                            this.props.dispatch(loadPeriods());
                            alertify.success('ลบข้อมูลผู้เข้าร่วมเรียบร้อยแล้ว');
                        }
                    })
                } 
    })

}   
    
    
    attenderSearch = (term)=>{
        this.props.dispatch(publicLoadUsers(term));
    }
    AttendSelect = (id)=>{
        this.props.dispatch(getPublicuser(id));
    }
    resetStatusUsers = ()=>{
        this.props.dispatch(resetStatusUsers());
    }
    attenderSubmit = (values)=>{
        this.props.dispatch(saveAttendee(values)).then((id = values.id)=>{
            if(!this.props.attenderSave.isRejected){
                this.props.dispatch(getAttendee(id)).then(()=>{
                    if(!this.props.attenders.isRejected){
                        alertify.success(this.props.attenderSave.data.message)
                        this.props.dispatch(resetUserStore());
                        this.props.dispatch(loadPeriods());
                    }
                })
            }
        })
        
    }
    
    

    
    render() {
        const {activeTab} = this.state
        const {users,user, periodsurvey, period, periodSave, courses, operation_rooms, attenders, attenderDelete, attenderSave} = this.props;
        // ค้นหาผู้เข้าร่วมเพื่อเพิ่มเข้าไปใน period
        const attenderSearch = debounce(term =>{
            this.attenderSearch(term) 
        },500)
        
           
        
        return (
            
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={classnames({active:activeTab === 1 })}
                        onClick={() => { this.toggleTab(1); }}
                        >
                        ข้อมูลเบื้องต้น
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active:activeTab === 2 })}
                            onClick={() => { this.toggleTab(2); }}
                            >   
                            ผู้เข้าร่วม
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active:activeTab === 3 })}
                            onClick={() => { this.toggleTab(3); }}
                            >   
                            สำรวจความพึงพอใจหลักสูตร
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent>    
                    {activeTab === 1 && period.data !== null && <PeriodForm 
                        data={period.data}
                        course={courses}
                        operation_rooms={operation_rooms}
                        periodSave={periodSave} onSubmit={this.handleSubmit}
                        handleDelete={this.handleDelete}
                    />}
                    {activeTab ===2 && attenders &&  attenders.data!==null && <AttendeeForm 
                    RemoveAttenders={this.RemoveAttenders} 
                    periodId={this.props.match.params.period_id} 
                    attenderSubmit={this.attenderSubmit} 
                    usersReset={this.resetStatusUsers} 
                    AttendSelect={this.AttendSelect} 
                    users={users.data} 
                    user={user.data}   
                    data={attenders.data} 
                    attenderSearch={attenderSearch} 
                    attenderSave={attenderSave}
                    onSubmit={this.handleSubmitAtten}
                   
                       /> }
                    {activeTab ===3 &&periodsurvey.data ===null && <Container style={{paddingTop:'1rem'}}>
                        <Row>
                            <Col>
                                <Alert color="danger">
                                <h4>ไม่พบข้อมูล</h4>
                                </Alert>
                            </Col>
                        </Row>
                </Container>
                    }
                    {activeTab ===3&& periodsurvey.data !==null   && <Surver data={periodsurvey.data}/>}
                </TabContent>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return{
        user:state.userReducers.user,   
        users:state.userReducers.users,
        attenders:state.attendeeReducers.attenders,
        attender:state.attendeeReducers.attender,
        attenderSave:state.attendeeReducers.attenderSave,
        attenderDelete:state.attendeeReducers.attenderDelete,
        period:state.periodReducers.period,
        periodSave:state.periodReducers.periodSave,
        periodDelete:state.periodReducers.periodDelete,
        courses:state.courseReducer.courses,
        operation_rooms: state.operationRoomReducers.operation_rooms,
        periodsurvey:state.analysisReducers.periodsurvey
    }
}

export default connect(mapStateToProps)(PeriodManage);