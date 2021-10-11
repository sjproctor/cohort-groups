import React, { Component } from 'react'
import AddsBreakoutRooms from './pages/AddsBreakoutRooms'
import AddsStudents from './pages/AddsStudents'
import DisplayBreakoutRooms from './components/DisplayBreakoutRooms'
import DisplayCohort from './components/DisplayCohort'
import Groups from './components/Groups'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      breakoutRooms: [],
      selectedBreakoutRoom: "",
      cohorts: [],
      selectedCohort: "",
    }
  }
  componentDidMount(){
    this.displayBreakoutRooms()
    this.displayCohorts()
  }
  displayBreakoutRooms = () => {
    fetch("/breakout_rooms")
    .then(response => response.json())
    .then(rooms => this.setState({breakoutRooms: rooms}))
    .catch(errors => console.log("Rooms read errors:", errors))
  }
  addBreakoutRoomSet = (roomsObj) => {
    fetch("/breakout_rooms", {
      body: JSON.stringify(roomsObj),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(() => this.displayBreakoutRooms())
    .catch(errors => console.log("Rooms create errors:", errors))
  }
  displayCohorts = () => {
    fetch("/students")
    .then(response => response.json())
    .then(students => this.setState({cohorts: students}))
    .catch(errors => console.log("Cohort read errors:", errors))
  }
  addClassSet = (classObj) => {
    console.log("classObj:", classObj)
    fetch("/students", {
      body: JSON.stringify(classObj),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(() => this.displayCohorts())
    .catch(errors => console.log("Student create errors:", errors))
  }
  setSelectedBreakoutRoom = (room) => {
    this.setState({selectedBreakoutRoom: room})
  }
  setSelectedCohort = (cohort) => {
    this.setState({selectedCohort: cohort})
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/rooms" render={(props) => {
            return <AddsBreakoutRooms addBreakoutRoomSet={this.addBreakoutRoomSet} />
          }} />
          <Route path="/class" render={(props) => {
            return <AddsStudents addClassSet={this.addClassSet} />
          }} />
          <Route path="/groups" render={(props) => {
            const oneRoom = this.state.breakoutRooms.find(oneRoom => oneRoom.theme === this.state.selectedBreakoutRoom)
            const oneClass = this.state.cohorts.find(oneClass => oneClass.cohort === this.state.selectedCohort)
            return (
              <Groups
                oneRoom={oneRoom} selectedBreakoutRoom={this.state.selectedBreakoutRoom} oneClass={oneClass}
                selectedCohort={this.state.selectedCohort}
              />
            )
          }} />
        </Switch>
        <DisplayBreakoutRooms
          breakoutRooms={this.state.breakoutRooms}
          setSelectedBreakoutRoom={this.setSelectedBreakoutRoom}
        />
        <DisplayCohort
          cohorts={this.state.cohorts}
          setSelectedCohort={this.setSelectedCohort}
        />
      </Router>
    )
  }
}
export default App
