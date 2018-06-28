import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Alert, Row, Col, Container,Table} from 'reactstrap'
import { Line} from 'react-chartjs-2';

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false,
    labels:{
        fontSize: 0
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: true,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 11,
        stepSize:0.5,
        max: 5.5
      }
    }]
  },
  elements: {
    point: {
      radius: 1,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
    line: {
                tension: 0, // disables bezier curves
      }
  }
}
 class Survey extends Component {
   
  render() {
      const {data} = this.props
     var title = [];
     var MeanDataSet = [];
     {data !==null && data.map(function(e,i){
       title.push('ข้อ.'+(i+1))
       MeanDataSet.push(e.Mean)
     })}
     
      const Point = {
        labels: title,
        datasets: [
          {
            label: 'ค่าเฉลี่ย',
            pointStyle:'rect',
            hitRadius:3,
            backgroundColor: 'rgba(255, 0, 0, 0.3)',
            borderColor: '#ee0a0a',
            pointHoverBackgroundColor: '#ee0a0a',
            borderWidth: 2,
            data: MeanDataSet
          }]
        }
    return (
      <div className="container">
          <Row style={{paddingTop:'1rem'}}>
          <Col> 
              <span>จำนวนผู้ร่วมตอบแบบประเมิณ {data!==null &&data.lenght>0 &&data[0].COUNT}</span>
                </Col>

          </Row>
          <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                <Line data={Point} 
                  options={mainChartOpts} 
                    height={300}/>
            </div>
          <Row style={{paddingTop:'1rem'}}>
              <Col>
                <Table striped>
                    <thead>
                      <tr>
                        <th className="text-algn-center">ข้อ</th>
                        <th className="text-algn-left">เรื่อง</th>
                        <th>ค่าเฉลี่ย</th>
                        <th>S.D.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data!==null && data.map((e,i)=>{
                        return (
                          <tr key={"row_"+i}>
                          <td className="text-algn-center">ข้อ.{i+1}</td>
                          <td>{e.title}</td>
                          <td>{(e.Mean)}</td>
                          <td>{(Math.sqrt(e.Error))}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                 
              </Col>
            </Row>
      </div>
    )
  }
}
export default Survey;