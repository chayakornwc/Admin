import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadCertificationByperiodId,loadCertificationByOptions}  from '../../../redux/actions/certificationActions';
import {Field, reduxForm, formValues} from 'redux-form';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Button,

  } from 'reactstrap';

import renderCheckbox from '../../../components/Certification/renderCheckbox';
import logo from '../../../../public/img/log2o.png';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew-Bold.ttf',
    italics: 'THSarabunNew-Italic.ttf',
    bolditalics: 'THSarabunNew-BoldItalic.ttf'
  }
}

const alertify = require('alertify.js')


 class  Generate extends Component {
    constructor(props){
            super(props)
            this.pdfCreate = this.pdfCreate.bind(this)
    }
    componentDidMount(){
        this.props.dispatch(loadCertificationByperiodId(this.props.match.params.period_id))
    }
    pdfCreate(values){
      const {certificationsbyoptions} = this.props
      if(Object.keys(values).length === 0 && values.constructor === Object){
          alertify.alert('Please select at least 1 person')
      }else{
              var data = {};
              var i = 0;
             for(var key in values){
                  if (values[key]) {
                    data[i] = key.replace('cert_',"");
                }
                i++;
             }
             
             this.props.dispatch(loadCertificationByOptions(data)).then(()=>{
                    if(!this.props.certificationsbyoptions.isRejected){
                      var documentname = new Date();
                      documentname = documentname.getTime();
                      var docDefinition = {

                        info: {
                          title: documentname,
                          author: 'COMCENTRE LPRU',
                          subject: 'subject of document',
                          keywords: 'keywords for document',
                        },
                          pageSize:'A4',
                          pageOrientation: 'portrait',
                          pageMargins: [ 40, 60, 40, 60 ],
                          defaultStyle:{
                            font:'THSarabunNew'
                          },
                        content: [
                          certificationsbyoptions.data && certificationsbyoptions.data.map((e,i)=>{
                            {text:'sdasdlaspdas'}
                     
                          
                          })
                        ]
                        
                      };
                        
                      pdfMake.createPdf(docDefinition).open();
                    }
                
             })
       
         

      }
    }

  render() {
     const {certificationperiod,handleSubmit} = this.props
 
    return (
      <div className="animated fadeIn">
        <Row>
        <Col md="3">
            <Card>
              <CardHeader>
                <i className="fa fa-certification"></i><strong>Action</strong>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col>
                    <Button onClick={handleSubmit(this.pdfCreate)}color="success" block><i className="fa fa-print"></i>{'\u00A0'}พิมพ์ใบวุฒิบัตร</Button>
                    </Col>
                    </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-certification"></i><strong>รายชื่อผู้ที่ได้รับวุฒิบัตร</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <form>
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
                 </form>
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
        certificationperiod:state.certificationReducers.certificationperiod,
        certificationsbyoptions:state.certificationReducers.certificationsbyoptions
    }
}
Generate = connect(mapStateToProps)(Generate);
export default Generate = form(Generate)
 