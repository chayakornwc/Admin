import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Badge,Row,Col,Card,CardHeader,CardBody,Table,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap'
class ExamTable extends Component {
    
    constructor(props){
        super(props);
    }
    renderTableRow(data){
        if(data.exam_id){
          data.map(function(e,i){
              return <tr>
                  <td>{i+1}</td>
                  <td>{e.course_name}</td>
              </tr>
          })
        }else{
            return (null);
        }
    }
  render() {
    const {data, buttonDelete, buttonEdit} = this.props
    return (
      <div className="animated fadeIn">
        <Row>
                <Col>
                        <Card>
                        <CardHeader>
                            <i className="fa fa-building"></i>OPERATION ROOM<a href="/#/operationRoom/add"><Button className="float-right" color="secondary"><i className="icon-directions"></i>{'\u00A0 Add Operation Room'}</Button></a>
                        </CardHeader>
                        <CardBody>
                        {data && <Table>
                            <thead>
                                <tr>
                                    <th>ลำดับ</th>
                                    <th>ชื่อห้องปัฏิบัตการ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableRow(data)}
                            </tbody>
                        </Table>}
                        </CardBody>
                    </Card>
                    </Col>
                </Row>   
        {this.renderTableRow}    
      </div>
    )
  }
}

export default ExamTable;
