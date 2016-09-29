import React, { Component } from 'react'
import '../styles/screen.sass'
import Listing from './Listing'

class App extends Component {

  constructor () {
    super()

    this.state = { coordinates: {latitude: 27.7702504, longitude: -82.636237} }

    window.onload = function () {
      let startPos
      let geoSuccess = function (position) {
        startPos = position
        this.state = { coordinates: startPos.coords }
        console.log(this.state.coordinates)
      }
      navigator.geolocation.getCurrentPosition(geoSuccess.bind(this))
    }
  }

  render () {
    return (
            <div>
            <p></p>
            <Listing coordinates={this.state.coordinates}/>
            </div>
          )
  }
  }
export default App
