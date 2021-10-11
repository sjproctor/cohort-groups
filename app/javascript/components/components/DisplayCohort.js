import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class DisplayCohort extends Component {
  handleSetCohort = (e) => {
    this.props.setSelectedCohort(e.target.value)
  }
  render() {
    return (
      <>
      <h3>Cohort Options</h3>
        <Form>
          {this.props.cohorts.map(cohort => {
            return (
              <FormGroup check key={cohort.id} onChange={this.handleSetCohort}>
                <Label check>
                  <Input
                    type="radio"
                    name="radio"
                    value={cohort.cohort}
                  />{' '}
                  {cohort.cohort}
                </Label>
              </FormGroup>
            )
          })}
        </Form>
      </>
    )
  }
}
export default DisplayCohort
