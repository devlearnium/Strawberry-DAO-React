import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className={`component2-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component2-image"
      />
    </div>
  )
}

Component2.defaultProps = {
  image_src: '/playground_assets/logo.svg',
  image_alt: 'image',
  rootClassName: '',
}

Component2.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component2
