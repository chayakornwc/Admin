import React from 'react'
import {Table} from 'reactstrap'
const UserTypesTable = ({data})=>{
    return(
            <Table bordered stripted>
                <thead>
                    <tr>
                        <th>ประเภทผู้ใช้งาน</th>
                        <th>สิทธิในการเข้าถึง</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(function(e,i){
                        <tr key={e.id}>
                            <td>{e.userType}</td>
                            <td>{e.permission}</td>
                        </tr>
                    })}
                </tbody>
        </Table>
    )    
}
export default UserTypesTable