import React, { Component } from 'react'
import { Link } from 'react-router'
import '../styles/listing.sass'
import listings from './listings.json'
import Dropdown from './Dropdown'
import StartingPoint from './StartingPoint'

class Listing extends Component {
  static propTypes = {
    coordinates: React.PropTypes.object
  }

  render () {
    const { coordinates } = this.props
    console.log(coordinates)
    let allListings = listings.allLocations.map((listings, index) => {
      return (
        <div>
          <Link to={`/location/${listings.Slug}`}>
          <div className='excerpt' key={index}>
            <div className='listingImage'>
            <img src={listings.Photo}/>
            </div>
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
      </div>
      <div className='container'>
      {allListings}
      </div>
      </div>
    )
  }
}
export default Listing
