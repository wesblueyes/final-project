import React, { Component } from 'react'
import '../styles/location.sass'
import { Link } from 'react-router'
import listings from './listings.json'

class Location extends Component {

  render () {
    const listing = listings.allLocations.find((listing) => {
      return listing.Slug === this.props.params.Slug
    })

    return (
      <div>
        <Link to='/listing'><button type='button' className='dropdown-toggle'><span>Back to List </span></button></Link>
          <div className='complete-images'>
          <img src={listing.Photo}/>
          </div>
          <div className='complete-text'>
          <h2>{listing.Title}</h2>
          <h3><b>Amenities: </b>{listing.ActivitiesAmenities}</h3><h3><b>Hours: </b>{listing.Hours} | <b>Entrance/Parking Fee: </b>{listing.EntranceFee}</h3>
          <h3><a href={listing.Website}>Visit Website</a> <a href={listing.Phone}>Call Phone</a></h3>
          <p>{listing.Description}</p>
          <button type='button' className='directions'><span>Open Directions</span></button>
          </div>
      </div>
    )
  }
}
export default Location
