import React from 'react'
import PropTypes from 'prop-types'

function Cards({ image, ...props }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {image && <img src={image.src} className="card-img-top" alt={image.alt} />}
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

Cards.propTypes = {
  image: PropTypes.object
}

export default Cards