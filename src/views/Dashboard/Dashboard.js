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
const brandSuccess = '#4dbd74';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, ,33,22]
    }
  ],
};



// Social Box Chart
const socialBoxData = [
  {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
  {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
  {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
  {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'}
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      }
    ]
  };
  return () => data;
};



// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients'
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic'
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR'
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate'
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label
      }
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 12;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(random(1, 400));
}



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
    console.log(itechData)
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
                            <option key={i}>{e}</option>
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
                    <ul className="horizontal-bars">
                      <li>
                        <div className="title">
                          Monday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="34"/>
                          <Progress className="progress-xs" color="danger" value="78"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Tuesday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="56"/>
                          <Progress className="progress-xs" color="danger" value="94"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Wednesday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="12"/>
                          <Progress className="progress-xs" color="danger" value="67"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Thursday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="43"/>
                          <Progress className="progress-xs" color="danger" value="91"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Friday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="22"/>
                          <Progress className="progress-xs" color="danger" value="73"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Saturday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="53"/>
                          <Progress className="progress-xs" color="danger" value="82"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Sunday
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="9"/>
                          <Progress className="progress-xs" color="danger" value="69"/>
                        </div>
                      </li>
                    </ul>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars type-2">
                      <li>
                        <i className="icon-user"></i>
                        <span className="title">Male</span>
                        <span className="value">43%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="43"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Female</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="37"/>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <i className="icon-globe"></i>
                        <span className="title">Organic Search</span>
                        <span className="value">191,235 <span className="text-muted small">(56%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="56"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-facebook"></i>
                        <span className="title">Facebook</span>
                        <span className="value">51,223 <span className="text-muted small">(15%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="15"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-twitter"></i>
                        <span className="title">Twitter</span>
                        <span className="value">37,564 <span className="text-muted small">(11%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="11"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-linkedin"></i>
                        <span className="title">LinkedIn</span>
                        <span className="value">27,319 <span className="text-muted small">(8%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="8"/>
                        </div>
                      </li>
                      <li className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="show more"><i className="icon-options"></i></Button>
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
