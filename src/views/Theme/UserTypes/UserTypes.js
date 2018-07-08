import React, { Component } from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';
import connect from 'react-redux';
import UserTypesTable from '../../../components/UserTypes/UserTypesTable';

class UserTypes extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="container">
        <Card>
            <CardHeader>จัดการประเภทผู้ใช้งาน</CardHeader>
            <CardBody>
                <UserTypesTable 
                    data={false}
                />
            </CardBody>
        </Card>
      </div>
    )
  }
}
function mapDispatchToProps (state) {
    return {
            
        }
    
}
export default UserTypes