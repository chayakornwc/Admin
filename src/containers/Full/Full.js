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
import Colors from '../../views/Theme/Colors/';
import Coursemanage from '../../views/Theme/Coursemanage/Coursemanage';
import Courseregister from '../../views/Theme/Coursemanage/Courseregister';
import Periodregister from '../../views/Theme/Coursemanage/Periodregister';
import Period from '../../views/Theme/Coursemanage/Period';
import Typography from '../../views/Theme/Typography/';

import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';

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

// Base
import Cards from '../../views/Base/Cards/';
import Forms from '../../views/Base/Forms/';
import Switches from '../../views/Base/Switches/';
import Tables from '../../views/Base/Tables/';
import Tabs from '../../views/Base/Tabs/';
import Breadcrumbs from '../../views/Base/Breadcrumbs/';
import Carousels from '../../views/Base/Carousels/';
import Collapses from '../../views/Base/Collapses/';
import Dropdowns from '../../views/Base/Dropdowns/';
import Jumbotrons from '../../views/Base/Jumbotrons/';
import ListGroups from '../../views/Base/ListGroups/';
import Navbars from '../../views/Base/Navbars/';
import Navs from '../../views/Base/Navs/';
import Paginations from '../../views/Base/Paginations/';
import Popovers from '../../views/Base/Popovers/';
import ProgressBar from '../../views/Base/ProgressBar/';
import Tooltips from '../../views/Base/Tooltips/';

// Buttons
import Buttons from '../../views/Buttons/Buttons/';
import ButtonDropdowns from '../../views/Buttons/ButtonDropdowns/';
import ButtonGroups from '../../views/Buttons/ButtonGroups/';
import SocialButtons from '../../views/Buttons/SocialButtons/';

// Icons
import Flags from '../../views/Icons/Flags/';
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

// Notifications
import Alerts from '../../views/Notifications/Alerts/';
import Badges from '../../views/Notifications/Badges/';
import Modals from '../../views/Notifications/Modals/';
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
                <Route path="/course/period/register" name="PeriodRegister" component={Periodregister} />  
                <Route path="/course/period" name="Period" component={Period} />
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
