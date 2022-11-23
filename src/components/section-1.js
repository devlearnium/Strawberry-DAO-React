import React from 'react'

import PropTypes from 'prop-types'

import './section-1.css'

const Section1 = (props) => {
  return (
    <div className={`section-1-section-1 ${props.rootClassName} `}>
      <h1 className="section-1-text">
        <span className="section-1-text1">Strawberry</span>
        <span className="section-1-text2"> DAO</span>
        <br className="section-1-text3"></br>
        <span className="section-1-text4">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="section-1-text5"></br>
        <span className="section-1-text6">
          is a decentralized autonomous organization dedicated to building
          sustainable, automated strawberry greenhouses around the world.
        </span>
      </h1>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="section-1-image"
      />
    </div>
  )
}

Section1.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/logo.svg',
}

Section1.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Section1
