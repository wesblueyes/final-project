import React, { Component } from 'react'
import '../styles/footer.sass'
import githubImage from '../images/github.png'
import linkedinImage from '../images/linkedin.png'
import twitterImage from '../images/twitter.png'
import pinterestImage from '../images/pinterest.png'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <p>Developed by: Whitney Smith | <a href='http://gallerywrappeddesign.com' target='_blank'>View Portfolio</a></p>
        <div className='images'>
          <a href='https://github.com/wesblueyes' target='_blank'><img src={githubImage}/></a>
          <a href='https://www.linkedin.com/in/whitney-smith-94ab0425' target='_blank'><img src={linkedinImage}/></a>
          <a href='https://twitter.com/wesblueyes' target='_blank'><img src={twitterImage}/></a>
          <a href='https://www.pinterest.com/wesblueyes/' target='_blank'><img src={pinterestImage}/></a>
        </div>
      </div>
    )
  }
}
export default Footer
