import React, { Component } from 'react'
import { Link } from 'react-router'
import '../styles/listing.sass'
import listings from './listings.json'


class Listing extends Component {
  static propTypes = {
    coordinates: React.PropTypes.object
  }

  render () {
    const { coordinates } = this.props
    const haversine = require('haversine')
    let start = { latitude: coordinates.latitude, longitude: coordinates.longitude }
    let allListings = listings.allLocations.map((listings, index) => {
    let end = { latitude: listings.AddressLat, longitude: listings.AddressLong }
    let distance = Math.round(haversine(start, end, {unit: 'mile'}))
    console.log(distance)
      return (
        <div key={index}>
          <Link to={`/location/${listings.Slug}`}>
          <div className='excerpt'>
            <div className='listingImage'>
            <img src={listings.Photo}/>
            </div>
            <div className='excerpt-text'>
            <h2>{listings.Title}</h2>
            <h3><b>Distance:</b> { distance } miles</h3>
            <h3><b>Activities/Amenities: </b>{listings.ActivitiesAmenities}</h3>
          </div>
        </div>
        </Link>
        </div>
      )
    })

    return (
      <div>
      <h1>Splash Search</h1>
      <div className='filters'>
      </div>
      <div className='container'>
      {allListings}
      </div>
      </div>
    )
  }
}
export default Listing
