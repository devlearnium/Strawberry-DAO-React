import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './logo-cont.css'

const LogoCont = (props) => {
  return (
    <div className={`logo-cont-logo-cont ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="logo-cont-image"
      />
      <Link to="/" className="logo-cont-navlink">
        <h2 className="logo-cont-text">{props.heading}</h2>
      </Link>
    </div>
  )
}

LogoCont.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/logo.svg',
  heading: 'Strawberry DAO',
}

LogoCont.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default LogoCont
