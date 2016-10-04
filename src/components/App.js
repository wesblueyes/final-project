import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  constructor () {
    super()
    this.state = {
      // Default Coordinates (The Iron Yard St. Pete)
      coordinates: {
        latitude: 27.751828,
        longitude: -82.626734
      }
    }
  }

  componentDidMount () {
    // Have Browser Ask to Use Location
    let geoSuccess = (position) => {
      this.setState({ coordinates: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }})
    }
    navigator.geolocation.getCurrentPosition(geoSuccess)
  }

  render () {
    // Save Coordinates to Use in All Components
    return React.cloneElement(this.props.children, {
      coordinates: this.state.coordinates
    })
  }
}

export default App
