import React, { Component } from 'react'
import '../styles/footer.sass'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
      <p>Developed by: Whitney Smith | <a href='http://gallerywrappeddesign.com' target='_blank'>View Portfolio</a></p>
      <div className='images'><a href='https://github.com/wesblueyes' target='_blank'><img src='/src/images/github.png'/></a>
      <a href='https://www.linkedin.com/in/whitney-smith-94ab0425' target='_blank'><img src='/src/images/linkedin.png'/></a>
      <a href='https://twitter.com/wesblueyes' target='_blank'><img src='/src/images/twitter.png'/></a>
      <a href='https://www.pinterest.com/wesblueyes/' target='_blank'><img src='/src/images/pinterest.png'/></a>
      </div>
      </div>
    )
  }
}
export default Footer
