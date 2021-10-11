import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class AddsStudents extends Component {
  constructor(props){
    super(props)
    this.state = {
      cohort: "",
      names: []
    }
  }
  handleSetCohort = (e) => {
    this.setState({cohort: e.target.value})
  }
  handleSetNames = (e) => {
    this.setState({names: e.target.value.split(",")})
  }
  handleSubmit = (e) => {
    this.props.addClassSet(this.state)
  }
  render() {
    return (
      <>
        <h3>Add Students</h3>
        <Form>
          <FormGroup>
            <FormGroup>
              <Label for="cohort">Cohort</Label>
              <Input
                type="text"
                name="cohort"
                onChange={this.handleSetCohort}
                value={this.state.cohort}
              />
            </FormGroup>
            <Label for="names">Students</Label>
            <Input
              type="textarea"
              name="names"
              onChange={this.handleSetNames}
              value={this.state.names}
            />
          </FormGroup>
          <br />
          <Button onClick={this.handleSubmit}>
            Add Students
          </Button>
        </Form>
        <br />
      </>
    )
  }
}
export default AddsStudents
