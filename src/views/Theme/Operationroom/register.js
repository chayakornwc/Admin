import React, { Component } from 'react'

 class OPRregister extends Component {

  onSubmit(e){ 
    this.props.dispatch(savePeriod(e)).then(()=>{
        if(!this.props.periodSave.isRejected){
           this.handleInitialize();
           alertify.alert('เพิ่มการอบรมเรียบรร้อยแล้ว').set('basic', true)
        }else{
           this.setState({ visible: true });
        }
          }).catch((err)=>{
            this.setState({ visible: true });
          })
   }
   
  render() {
    return (
      <div>
         <div className="animated fadeIn">
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                                <i className="fa fa-edit"></i> เพิ่มข้อมูล
                                <div className="card-actions">

                                    <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                                 {' '}
                                    <a href="#" className="btn-close"><i className="icon-close"></i></a>
                                </div>
                            </CardHeader>
                            <Collapse isOpen={this.state.collapse} id="collapseExample">
                            <CardBody>
                                {periodSave.isRejected && <Alert isOpen={this.state.visible} color="danger" toggle={this.onDismiss}>{periodSave.data}</Alert>}
                                <Form className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="appendedInputButton">วันที่อบรม</Label>
                                        </Col>
                                        <Col md="4">
                                            <Field name="per_start" component={renderDatepicker} type="time"  placeholder="วันที่เริ่มอบรม" /> 
                                        </Col>
                                        <i className="fa fa-angle-right fa-lg mt-2"></i>{'  '}
                                        <Col md="4">   
                                            <Field name="per_end" component={renderDatepicker}  placeholder="สิ้นสุดการอบรม" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="appendedInputButton">ช่วงเวลาที่อบรม</Label>
                                        </Col>
                                        <Col md="auto">
                                            <Field name="per_time_start" component={renderTimepicker} placeholder=""/>
                                        </Col>
                                        {' '}<i className="fa fa-angle-right fa-lg mt-2"></i>{' '}
                                        <Col md="auto">
                                            <Field name="per_time_end" component={renderTimepicker}/>
                                        </Col>
                                    </FormGroup>

                                        <Field name="course_id"  label="หลักสูตร" data={courses.data}  component={renderSelect} />

                                     <FormGroup>
                                        <Field name="per_price" component={renderField}  type="number" label="ค่าใช้จ่ายต่อหัว" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Field name="per_quota" component={renderField}  type="number" label="จำนวนที่นั่ง" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Field name="room_id" data={operation_rooms.data}  component={renderSelectRoom} label="ห้องปฏิบัติการ" />
                                    </FormGroup>
                                <div className="form-actions"> 
                                    <Button  color="secondary">Back</Button>{ ' '}
                                    <Button color="primary" onClick={handleSubmit(this.onSubmit)}>Save changes</Button>     
                                </div>
                            </Form>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Row>  
</div>
      </div>
    )
  }
}
const  mapStateToProps = (state)=>({
  courses: state.courseReducer.courses, 
  periodSave: state.periodReducers.periodSave,
  operation_rooms: state.operationRoomReducers.operation_rooms
 })
 const form = reduxForm({
  form: 'OPRregister'
})
OPRregister = connect(mapStateToProps)(OPRregister)

export default form(OPRregister)

