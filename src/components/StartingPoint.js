import React, { Component } from 'react'
import '../styles/dropdown.sass'

class StartingPoint extends Component {
  render () {
    return (
      <div className='dropdownToggle'>
      <button type='submit' className='dropdown-toggle'><span>Filter by Distance</span></button>
      </div>
    )
  }
}

export default StartingPoint
