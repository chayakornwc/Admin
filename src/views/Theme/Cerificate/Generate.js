import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadCertificationByperiodId}  from '../../../redux/actions/certificationActions';
import {Field, reduxForm} from 'redux-form';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Badge,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

import renderCheckbox from '../../../components/Certification/renderCheckbox';
 class  Generate extends Component {
    constructor(props){
            super(props)
    }
    componentDidMount(){
        this.props.dispatch(loadCertificationByperiodId(this.props.match.params.period_id))
    }


  render() {
     const {certificationperiod} = this.props
 
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-certification"></i><strong>รายชื่อผู้ที่ได้รับวุฒิบัตร</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                 {certificationperiod && certificationperiod.data && certificationperiod.data.map((e,i)=>{
                     return(
                        <ListGroupItem action key={i}>
                        <Row>
                        <Col md="11">{e.username}{' '}{e.fullname} ใบวุฒิบัตรเลขที่ {e.cert_id}{e.iat}</Col>
                          <Col md="1"><Field component={renderCheckbox} name={"cert_"+e.cert_id} type="checkbox" value={e.cert_id} /></Col>
                        </Row>
                        </ListGroupItem>
                      
                     )
                 })}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
const form = reduxForm({
  form:'Generate'
})

function mapStateToProps(state){
    return {
        certificationperiod:state.certificationReducers.certificationperiod
    }
}
Generate = connect(mapStateToProps)(Generate);
export default Generate = form(Generate)
 