import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Badge,Row,Col,Card,CardHeader,CardBody,Table,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap'
class ExamTable extends Component {
    
    constructor(props){
        super(props);
    }
  
    IshaveExam(id = null){
        let render = <i className="fa fa-add"><a href="../examination/add/"></a></i>
        if(data=null){
            _render = <i className="fa fa-edit"></i>
        }
        return render
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
                                    <th>ชื่อหลักสูตร</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                        {data &&data.map(function(e,i){
                            return <tr>
                                <td>{i+1}</td>
                                <td>{e.course_name}</td>
                                <td>{IshaveExam(e.exam_id)}</td>
                            </tr>
                        }) }
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
