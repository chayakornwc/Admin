import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Badge,
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  Input,
 
} from 'reactstrap';
import {connect} from 'react-redux';
import {analysisAttends} from '../../redux/actions/analysisActions.js';

const moment = require('moment');
moment.locale('th')
const brandPrimary = '#20a8d8';





const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 10,
        stepSize: Math.ceil(10 / 10),
        max: 10
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

var yearSelect = [];
for (var i = 0; i < 5; i++) {
  yearSelect.push(moment().add(543-i,'year').year());
}
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }
    componentDidMount(){
      let currentyear = moment().add(543,'year').year()
      this.props.dispatch(analysisAttends(currentyear)).then(()=>{

      })
    }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }
  handleYearChange(e){
    this.props.dispatch(analysisAttends(e.target.value))
  }
  calCulatic(data){
    var sum = 0
          Object.keys(data).forEach(function(key){
            if(data[key].length>0){
              data[key].reduce((e,i)=>{
                sum +=i
               })
            }
              
        });
    return sum
  }
  render() {
   const {attendsBoard} = this.props
    var itechData = [];
    var sciData = [];
    var eduData = [];
    var humanData = [];
    var manageData = [];
    var arcData = [];
    var otherData = [];
    
    {attendsBoard.data && attendsBoard.data.map((e,i)=>{
      itechData.push(e.itech)
      sciData.push(e.sci)
      eduData.push(e.edu)
      humanData.push(e.human)
      manageData.push(e.manage)
      arcData.push(e.arc)
      otherData.push(e.other)
    })}
    const statisticData  = {
      itech:itechData,
      sci:sciData,
      edu:eduData,
      human:humanData,
      manage:manageData,
      arc:arcData,
      other:otherData
    }
    
  var sumary =  this.calCulatic(statisticData);
    var countItech = statisticData.itech.length > 0 ? statisticData.itech.reduce((e,i)=>{
      return e+i
    }) : null;
    var countSci = statisticData.sci.length > 0 ? statisticData.sci.reduce((e,i)=>{
      return e+i
    }) : null;
    var countEdu = statisticData.edu.length > 0 ? statisticData.edu.reduce((e,i)=>{
      return e+i
    }) : null;
    var countHuman = statisticData.human.length > 0 ? statisticData.human.reduce((e,i)=>{
      return e+i
    }) : null;
    var countManage = statisticData.manage.length > 0 ? statisticData.manage.reduce((e,i)=>{
      return e+i
    }) : null;
    var countArc = statisticData.arc.length > 0 ? statisticData.arc.reduce((e,i)=>{
      return e+i
    }) : null;
    var countOther = statisticData.other.length > 0 ? statisticData.other.reduce((e,i)=>{
      return e+i
    }) : null;
   const Point = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'คณะเทคโนโลยีอตสาหกรรม',
      
        backgroundColor: '#transparent',
        borderColor: '#ee0a0a',
        pointHoverBackgroundColor: '#ee0a0a',
        borderWidth: 2,
        data: itechData
      },
      {
        label: 'คณะวิทยาศาสตร์',
        backgroundColor: 'transparent',
        borderColor: '#ffc107',
        pointHoverBackgroundColor: '#ffc107',
        borderWidth: 2,
        data: sciData
      },
      {
        label: 'คณะครุศาสตร์',
        backgroundColor: 'transparent',
        borderColor: '#6f42c1',
        pointHoverBackgroundColor: '#6f42c1',
        borderWidth: 2,
        data: eduData,
      },{
        label:'คณะมนุษยศาสตร์และสังคมศาสตร์',
        backgroundColor: 'transparent',
        borderColor: '#f58a05',
        pointHoverBackgroundColor: '#f58a05',
        borderWidth: 2,
        data: humanData,
      },
      {
        label:'คณะวิทยาการจัดาร',
        backgroundColor: 'transparent',
        borderColor: '#63c2de',
        pointHoverBackgroundColor: '#63c2de',
        borderWidth: 2,
        data: humanData,
      },
      {
        label: 'คณะเทคโนลียีการเกษตร',
        backgroundColor: 'transparent',
        borderColor: '#4dbd74',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: arcData
      },
      {
        label: 'บุคลคากรภายนอก / บุคคลากรภายใน',
        backgroundColor: 'transparent',
        borderColor: '#4dbd74',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: otherData
      }
    ]
  }

    return (
      
      <div className="fadeIn animated">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col md="10">
                    <CardTitle className="mb-0">สถิติ</CardTitle>
                    <div className="small text-muted"> การเข้าร่วมอบรม ปี พ.ศ </div>
                  </Col>
                  <Col>
                    <Input type="select" className="float-right" onChange={this.handleYearChange} name="select" id="exampleSelect" >
                        {yearSelect && yearSelect.map((e,i)=>{
                          return (
                            <option key={'years-'+i}>{e}</option>
                          )
                        })}
                    </Input>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                  <Line data={Point} options={mainChartOpts} height={300}/>
                </div>
              </CardBody>
              <CardFooter>
                <ul>
                  <li>
                    <div className="text-muted">เทคโนโลยีอุตสาหกรรม</div>
                    <Progress className="progress-xs mt-2" color="red" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">วิทยาศาสตร์</div>
                    <Progress className="progress-xs mt-2" color="warning" value="100"/>
                  </li>
                  <li>
                    <div className="text-muted">ครุศาสตร์</div>
                    <Progress className="progress-xs mt-2" color="purple" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">เทคโนโลยีการเษตร</div>
                    <Progress className="progress-xs mt-2" color="success" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">คณะวิทยาการจัดการ</div>
                    <Progress className="progress-xs mt-2" color="primary" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">คณะมนุษยศาสตร์และสังคมศาสตร์</div>
                    <Progress className="progress-xs mt-2" color="orange" value="100"/>
                  </li>
                  <li className="d-none d-md-table-cell">
                    <div className="text-muted">บุคลากรภายนอก/ภายใน</div>
                    <Progress className="progress-xs mt-2" color="gray-900" value="100"/>
                  </li>
                </ul>
              </CardFooter>
            </Card>
          </Col>
        </Row>

       

        <Row>
          <Col>
            <Card>
              <CardHeader>
                  อัตราส่วน
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars type-2">
            
                        <li>
                            <span className="title">คณะเทคโนโลยีอตสาหกรรม</span>
                            <span className="value">{countItech && countItech}<span className="text-muted small">({countItech ? (countItech/sumary*100).toFixed(2):0}%)</span></span>
                            <div className="bars">
                              <Progress className="progress-xs" color="red" value={countItech ? (countItech/sumary*100).toFixed(2):0}/>
                            </div>
                          </li>
                      <li>
                        <span className="title">คณะวิทยาศาสตร์</span>
                        <span className="value">{countSci && countSci}<span className="text-muted small">({countSci ? (countSci/sumary*100).toFixed(2):0}%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value={countSci ?(countSci/sumary*100).toFixed(2) : 0}/>
                        </div>
                      </li>
                      
                      <li>
                        <span className="title">คณะครุศาสตร์</span>
                        <span className="value">{countEdu && countEdu} <span className="text-muted small">({countEdu ? (countEdu/sumary*100).toFixed(2) : 0}%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="purple" value={countEdu ? (countEdu/sumary*100).toFixed(2): 0}/>
                        </div>
                      </li>
                      <li>
                        <span className="title">คณะเทคโนลียีการเกษตร</span>
                        <span className="value">{countArc && countArc} <span className="text-muted small">({countArc ? (countArc/sumary*100).toFixed(2):0}%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value={countArc ? (countArc/sumary*100).toFixed(2):0}/>
                        </div>
                      </li>
                      <li>
                        <span className="title">คณะวิทยาการจัดการ</span>
                        <span className="value">{countManage && countManage} <span className="text-muted small">({countManage ? (countManage/sumary*100).toFixed(2):0}%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="primary" value={countManage ? (countManage/sumary*100).toFixed(2):0}/>
                        </div>
                      </li>
                      <li>
                        <span className="title">คณะมนุษยศาสตร์และสังคมศาสตร์</span>
                        <span className="value">{countHuman && countHuman}<span className="text-muted small">({countHuman ? (countHuman/sumary*100).toFixed(2):0}%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="orange" value={countHuman? (countHuman/sumary*100).toFixed(2):0}/>
                        </div>
                      </li>
                      <li>
                        <span className="title">บุคคลากรภายใน / บุคลคากรภายนอก</span>
                        <span className="value">{countOther && countOther}<span className="text-muted small">({countOther ?(countOther/sumary*100).toFixed(2):0}%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="gray-900" value={countOther ? (countOther/sumary*100).toFixed(2) : 0}/>
                        </div>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <br/>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    attendsBoard:state.analysisReducers.attendsBoard
  }
}
export default connect(mapStateToProps)(Dashboard);
