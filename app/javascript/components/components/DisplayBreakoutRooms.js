import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class DisplayBreakoutRooms extends Component {
  handleSetRoom = (e) => {
    this.props.setSelectedBreakoutRoom(e.target.value)
  }
  render() {
    return (
      <>
        <h3>Breakout Room Options</h3>
        <Form>
          {this.props.breakoutRooms.map(breakoutRoom => {
            return (
              <FormGroup check key={breakoutRoom.id} onChange={this.handleSetRoom}>
                <Label check>
                  <Input
                    type="radio"
                    name="radio"
                    value={breakoutRoom.theme}
                  />{' '}
                  {breakoutRoom.theme}
                </Label>
              </FormGroup>
            )
          })}
        </Form>
      </>
    )
  }
}
export default DisplayBreakoutRooms
