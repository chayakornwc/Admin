import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Badge,Row,Col,Card,CardHeader,CardBody,Table,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap'

class ExamTable extends Component {    
    constructor(props){
        super(props);
    }
  render() {
    const {data, buttonDelete, buttonEdit} = this.props
    const  IshaveExam = (exam_id = null, course_id)=>{
        let _render = <Button color="danger"  disabled size="sm"><i key={course_id} className="fa fa-times-rectangle ">{' ไม่พบข้อสอบ'}<a href="../examination/add/"></a></i> </Button>  
        if(exam_id){
            _render = <i key={course_id} onClick={()=>buttonEdit(course_id)} className="fa-wow fa fa-file-text"></i>   
        }
        return _render
    }
    return (
      <div className="animated fadeIn">
        <Row>
                <Col>
                        <Card>
                        <CardHeader>
                            <i className="fa fa-folder-o"></i>Examination Warehouse<a href="/#/examination/add"><Button size="sm" className="float-right" color="primary"><i className="fa fa-plus"></i>{'\u00A0 เพิ่มข้อสอบ'}</Button></a>
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
                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.course_name}</td>
                                <td className="ar">{IshaveExam(e.exam_id, e.course_id)}</td>
                            </tr>
                        }) }
                            </tbody>
                        </Table>}
                        </CardBody>
                    </Card>
                    </Col>
                </Row>   
        
      </div>
    )
  }
}

export default ExamTable;
