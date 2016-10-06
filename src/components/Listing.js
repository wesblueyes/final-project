import React, { Component } from 'react'
import { Link } from 'react-router'
import '../styles/listing.sass'
import listings from './listings.json'
import Footer from './Footer'


class Listing extends Component {
  static propTypes = {
    coordinates: React.PropTypes.object
  }
  constructor (props) {
    super(props)

    this.state = { searchQuery: "" }
  }

  handleChange = (event) => {
    console.log("handleChange")
    this.setState({searchQuery: event.target.value})
  }

  render () {
    const { coordinates } = this.props
    const haversine = require('haversine')
    let start = { latitude: coordinates.latitude, longitude: coordinates.longitude }

    // Function for computing distance from user's geolocation
    let distance = (listing) => {
      let end = { latitude: listing.AddressLat, longitude: listing.AddressLong }
      return Math.round(haversine(start, end, {unit: 'mile'}))
    }

    // Add a distance from user's geolocation to location in the JSON data
    listings.allLocations.forEach((location) => {
      location.distance = distance(location)
    })

    // Make a new array of the locations, but sorted by the distance
    let sortedListings = listings.allLocations.sort((listing_a, listing_b) => {
      return (listing_a.distance > listing_b.distance) ? 1 : -1
    })

    if (this.state.searchQuery.length > 1)
    {
      const searchQuery = this.state.searchQuery.toLowerCase()
      sortedListings = sortedListings.filter((listing) => {
        return listing.ActivitiesAmenities.toLowerCase().search(searchQuery) > -1 ||
               listing.Title.toLowerCase().search(searchQuery) > -1
      })
    }

    // Turn those sorted listings into DOM
    let allListings = sortedListings.map((listing, index) => {

      return (
        <div key={index}>
          <Link to={`/location/${listing.Slug}`}>
          <div className='excerpt'>
            <div className='listingImage'>
            <img src={listing.Photo}/>
            </div>
            <div className='excerpt-text'>
            <h2>{listing.Title}</h2>
            <h3><b>Distance:</b> { listing.distance } miles</h3>
            <h3><b>Activities/Amenities: </b>{listing.ActivitiesAmenities}</h3>
          </div>
        </div>
        </Link>
        </div>
      )
    })

    return (
      <div>
        <Link to={`/`}><h1>Splash Search</h1></Link>
        <form><input type="search" name="s" value={this.searchQuery} onChange={this.handleChange} placeholder="Search Activities/Amenities"/></form>
        <div className='filters'>
        </div>
        <div className='container'>
          {allListings}
        </div>
          <Footer />
      </div>
    )
  }
}
export default Listing
