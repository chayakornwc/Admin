import React, {Component}from 'react';
import {Table,FormGroup, Input, Label, Button} from 'reactstrap';

class UserTypesTable extends Component {
    constructor(props){
        super(props)
     
    }
   
    render(){
     const {data,permisschange, ButtonDelete} = this.props
    return(
            <Table bordered>
                <thead>
                    <tr>
                        <th>ประเภทผู้ใช้งาน</th>
                        <th>สิทธิในการเข้าถึง</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(function(e,i){
                     return   <tr key={e.user_group}>
                            <td>{e.type_name}</td>
                            <td> 
                                <FormGroup check inline>
                                        <Input checked={e.permission.includes(0)}  onChange={(event)=>{
                                            if(e.permission.includes(0)){
                                                if(e.permission.includes(1)){
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:'1'
                                                    } 
                                                }else{
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:' '
                                                    } 
                                                }
                                            }else{
                                                if(e.permission.includes(1)){
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:'0,1'
                                                    } 
                                                }else{
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:'0'
                                                    } 
                                                }
                                            }
                                            permisschange(post)
                                        }} className="form-check-input"  type="checkbox" id={'front-'+e.user_group} name={e.user_group} value={0}/>
                                        <Label className="form-check-label" check htmlFor={'front-'+e.user_group}>การอบรม</Label>
                                </FormGroup>
                                <FormGroup check inline>
                                        <Input checked={e.permission.includes(1)} onChange={(event)=>{
                                              if(e.permission.includes(1)){
                                                if(e.permission.includes(0)){
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:'0'
                                                    } 
                                                }else{
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:' '
                                                    } 
                                                }
                                            }else{
                                                if(e.permission.includes(0)){
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:'0,1'
                                                    } 
                                                }else{
                                                    var post = {
                                                        usergroup:e.user_group,
                                                        value:'1'
                                                    } 
                                                }
                                            }
                                            permisschange(post)
                                        }}  className="form-check-input"  type="checkbox" id={'back-'+e.user_group}name={e.user_group} value={1}/>
                                        <Label className="form-check-label" check htmlFor={'back-'+e.user_group}>ระบบผู้ดูแล</Label>
                                </FormGroup>
                                </td>
                                <td width="90">
                                    <Button size="sm" 
                                    onClick={()=>ButtonDelete(e.user_group)}
                                    color="danger"
                                    ><i className="fa fa-times"></i>
                                    {'\u00A0 ลบ'}
                                    </Button>
                                </td>
                        </tr>
                    })}
                </tbody>
        </Table>
    )    
    }
}
export default UserTypesTable