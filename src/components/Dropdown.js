import React, { Component } from 'react'
import '../styles/dropdown.sass'

class Dropdown extends Component {

  render () {
    return (
<div className='dropdownToggle'>
          <button type='button' className='dropdown-toggle'><span>Available Activities + </span></button>
    <ul>
    <li><input type='checkbox' value='Beach'/>Beach</li>
    <li><input type='checkbox' value='Bicycling'/>Bicycling</li>
    <li><input type='checkbox' value='Boating'/>Boating</li>
    <li><input type='checkbox' value='Camping'/>Camping</li>
    <li><input type='checkbox' value='Fishing'/>Fishing</li>
    <li><input type='checkbox' value='Frisbee Golf'/>Frisbee Golf</li>
    <li><input type='checkbox' value='Hiking'/>Hiking</li>
    <li><input type='checkbox' value='Kayaking'/>Kayaking</li>
    <li><input type='checkbox' value='Pets'/>Pets</li>
    <li><input type='checkbox' value='Picnicking'/>Picnicking</li>
    <li><input type='checkbox' value='Playground'/>Playground</li>
    <li><input type='checkbox' value='Surfing'/>Surfing</li>
    <li><input type='checkbox' value='Swimming'/>Swimming</li>
    <li><input type='checkbox' value='Volleyball'/>Volleyball</li>
    <li><input type='checkbox' value='Weddings'/>Weddings</li>
    </ul>
    </div>
  )
  }
}
export default Dropdown
