import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <h1 className="component3-text">
        <span className="component3-text1">
          The
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component3-text2">main task</span>
        <span className="component3-text3"> of the community</span>
        <br className="component3-text4"></br>
        <span className="component3-text5">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="component3-text6"></br>
        <span className="component3-text7">
          is to control the process of food production and distribution in order
          to guarantee access to high-quality, healthy and safe food for people
          and their descendants.
        </span>
      </h1>
    </div>
  )
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
