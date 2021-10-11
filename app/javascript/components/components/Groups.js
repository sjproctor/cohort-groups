import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Groups extends Component {
  constructor(props){
    super(props)
    this.state = {
      groups: [] // {breakoutRoom: "", students: []}
    }
  }
  randomPairs = () => {
    const {oneRoom, oneClass} = this.props
    oneClass.names.forEach(student => {
      console.log("im in the loop")
      oneClass.names.unshift()
      oneClass.names.unshift()
      oneRoom.rooms.unshift()
      let randomizeStudents = this.props.oneClass.names.sort(() => Math.random() - 0.5)
      console.log(randomizeStudents)
      this.setState({groups: [...this.state.groups, {breakoutRoom: oneRoom.rooms[0], students: [oneClass.names[0], oneClass.names[1]]}]})
    })
  }
  render() {
    const {oneRoom, selectedBreakoutRoom, oneClass, selectedCohort} = this.props
    console.log(this.state.groups)
    return (
      <>
        {oneRoom && oneRoom.rooms.map((room, index) => {
          return <div key={index}>{room}:</div>
        })}
        <Button onClick={this.randomPairs}>
          Create Groups
        </Button>
      </>
    )
  }
}
export default Groups
