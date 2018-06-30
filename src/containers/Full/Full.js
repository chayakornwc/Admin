import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';

// course
import Coursemanage from '../../views/Theme/Coursemanage/Coursemanage';
import Courseregister from '../../views/Theme/Coursemanage/Courseregister';

import periodManage from '../../views/Theme/period/PeriodManage';
import Periodregister from '../../views/Theme/Period/Periodregister';
import Period from '../../views/Theme/Period/Period';



// operation room 
import Operationroom from '../../views/Theme/Operationroom';
import OPRregister from '../../views/Theme/Operationroom/register';

// Examination warehouse
import ExamWarehouse from '../../views/Theme/ExamWarehouse/ExamWarehouse';
import ExamRegister from '../../views/Theme/ExamWarehouse/ExamRegister';


//  users module

import Users from '../../views/Theme/users/users';
import UserRegister from '../../views/Theme/users/userRegister';

//Certificate module


import Certificate from '../../views/Theme/Cerificate/Certificate';
import Generate from '../../views/Theme/Cerificate/Generate';
import Report from '../../views/Theme/Report/Report'
class Full extends Component {
  
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb/>
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/report" name="Report" component={Report}/>
                <Route path="/period/manage/:period_id" name="Period" component={periodManage} />
                <Route path="/period/register" name="PeriodRegister" component={Periodregister} />  
                <Route path="/period" name="Period" component={Period} />
                <Route path="/course/register" name="CourseRegister" component={Courseregister} />          
                <Route path="/course" name="Course" component={Coursemanage} />
                <Route path="/operationRoom/add" name="OperationRoom" component={OPRregister} />
                <Route path="/operationRoom" name="OperationRoom" component={Operationroom} />
                <Route path="/examination/add" name="" component={ExamRegister} />
                <Route path="/examination" name="examinationwarehouse" component={ExamWarehouse} />
                <Route path="/users/register" name="userRegister" component={UserRegister} />
                <Route path="/users" name="usermangement" component={Users} />
                <Route path="/cert/generate/:period_id" name="Certifiation generate" component={Generate} />
                <Route path="/cert" name="Certificate" component={Certificate} />
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Full;
