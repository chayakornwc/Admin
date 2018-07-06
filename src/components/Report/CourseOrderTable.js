import React from 'react'
import {Table} from 'reactstrap'
import moment from 'moment'
moment.locale('th')
const CourseOrderTable = ({data})=>{
   return (
            <Table hover responsive className="table-outline mb-0 d-none d-sm-table"> 
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>หลักสูตร</th>
                        <th>วันที่อบรม</th>
                        <th>วิทยากร</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data && data.map(function(e,i){
                            return(
                                <tr key={e.order_id} >
                                    <td>{i+1}</td>
                                    <td>{e.course_name}</td>
                                    <td>{moment(e.per_start).add(543, 'years').format('ll')} - {moment(e.per_end).add(543, 'years').format('ll')}</td>
                                    <td>{e.lecture}</td>
                                </tr>
                            )
                        })}
                    </tbody>
            </Table>
   )
}
export default CourseOrderTable;