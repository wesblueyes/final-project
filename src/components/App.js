import React, { Component } from 'react'
import '../styles/screen.sass'
import Listing from './Listing'

class App extends Component {

  constructor () {
    super()
    this.state = {
      coordinates: {
        latitude: 27.7702504,
        longitude: -82.636237
      }
    }
  }

  componentDidMount () {
    let geoSuccess = (position) => {
      this.setState({ coordinates: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }})
      console.log(this.state.coordinates)
    }
    navigator.geolocation.getCurrentPosition(geoSuccess)
  }

  render () {
    return React.cloneElement(this.props.children, {
      coordinates: this.state.coordinates
    })
  }
}

export default App
