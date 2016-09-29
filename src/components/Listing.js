import React, { Component } from 'react'
import { Link } from 'react-router'
import '../styles/listing.sass'
import listings from './listings.json'
import Dropdown from './Dropdown'
import StartingPoint from './StartingPoint'

class Listing extends Component {

  render () {
    let allListings = listings.allLocations.map((listings, index) => {
      return (
        <div>
          <Link to={`/location/${listings.Slug}`}>
          <div className='excerpt' key={index}>
          <img src={listings.Photo}/>
          <div className='excerpt-text'>
          <h2>{listings.Title}</h2>
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
      <StartingPoint />
      <Dropdown />
      </div>
      <div className='container'>
      {allListings}
      </div>
      </div>
    )
  }
}
export default Listing
