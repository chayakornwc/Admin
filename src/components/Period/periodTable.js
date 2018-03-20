import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Badge,Row,Col,Card,CardHeader,CardBody,Table,Pagination,PaginationItem,PaginationLink, Button } from 'reactstrap';
const moment = require('moment');
moment.locale('th');

class PeriodTable extends Component {
    
    render() {
        const {data, buttonDelete, buttonEdit} = this.props;
        console.log(data)
        return (
            <div>      
                <Row>
                <Col>
                    <Card>
                    <CardHeader>
                        <i className="icon-note"></i> จัดการ การอบรม <a href="/#/course/period/register"><Button className="float-right" color="secondary"><i className="fa fa-calendar-plus-o"></i>{'\u00A0 เปิดการอบรม'}</Button></a>
                    </CardHeader>
                    <CardBody>
                        <Table hover striped responsive> 
                        <thead>
                        <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อหลักสูตร</th>
                        <th>วันที่อบรม</th>
                        <th>เวลา</th>
                        <th>เข้าร่วม</th>
                        <th>รับได้</th>
                        <th>วิทยากร</th>
                        <th>สถานะ</th>
                        <th className="text-center"><i className="icon-settings "></i></th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        </tbody>
                        </Table>
                        <nav>
                        <Pagination>
                            <PaginationItem><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                            <PaginationItem active>
                            <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                        </Pagination>
                        </nav>
                    </CardBody>
                    </Card>
                </Col>
                </Row>             
            </div>
        );
    }
}

PeriodTable.propTypes = {

};

export default PeriodTable;