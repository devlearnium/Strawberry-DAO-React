import React from 'react'

import PropTypes from 'prop-types'

import './section-2.css'

const Section2 = (props) => {
  return (
    <div className="section-2-section-2">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="section-2-image"
      />
      <h1 className="section-2-text">
        <span className="section-2-text1">
          The
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="section-2-text2">main task</span>
        <span className="section-2-text3"> of the community</span>
        <br className="section-2-text4"></br>
        <span className="section-2-text5">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="section-2-text6"></br>
        <span className="section-2-text7">
          is to control the process of food production and distribution in order
          to guarantee access to high-quality, healthy and safe food for people
          and their descendants.
        </span>
      </h1>
      <div className="section-2-container"></div>
      <div>Placeholder for widget timer</div>
      <div>Placeholder for widget timer</div>
      <div>Placeholder for widget timer</div>
    </div>
  )
}

Section2.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/img%20%5B1%5D-500h.png',
  rootClassName: '',
}

Section2.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Section2
