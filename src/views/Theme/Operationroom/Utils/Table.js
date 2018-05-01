import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge,Row,Col,Card,CardHeader,CardBody,Table,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap'
const moment = require('moment');

export class OPRTable extends Component {
    constructor(props){
        super(props);
    }
  static propTypes = {

  }

  render() {
      const {data, ButtonDelete, ButtonEdit} = this.props
    return (
      <div>
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
                        {data.map(function(e, i){  
                        return(
                          <tr key={i++}>
                                <td>{i++}</td>
                                <td>{e.name}</td>
                                <td className="ar"><i onClick={()=>buttonEdit(e.room_id)} className="fa fa-edit"></i>{' '}<i onClick={()=>ButtonDelete(e.room_id)} className="fa fa-times"></i></td>
                            </tr>
                        )  
                        })}
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
