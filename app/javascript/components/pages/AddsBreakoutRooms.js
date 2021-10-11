import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class BreakoutRooms extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme: "",
      rooms: []
    }
  }
  handleSetTheme = (e) => {
    this.setState({theme: e.target.value})
  }
  handleSetRooms = (e) => {
    this.setState({rooms: e.target.value.split(",")})
  }
  handleSubmit = (e) => {
    this.props.addBreakoutRoomSet(this.state)
  }
  render() {
    return (
      <>
        <h3>Add Breakout Rooms</h3>
        <Form>
          <FormGroup>
            <FormGroup>
              <Label for="roomTheme">Room Theme</Label>
              <Input
                type="text"
                name="theme"
                onChange={this.handleSetTheme}
                value={this.state.theme}
              />
            </FormGroup>
            <Label for="breakoutRooms">Breakout Rooms</Label>
            <Input
              type="textarea"
              name="breakoutRooms"
              onChange={this.handleSetRooms}
              value={this.state.rooms}
            />
          </FormGroup>
          <br />
          <Button onClick={this.handleSubmit}>
            Add Breakout Rooms
          </Button>
        </Form>
        <br />
      </>
    )
  }
}
export default BreakoutRooms
