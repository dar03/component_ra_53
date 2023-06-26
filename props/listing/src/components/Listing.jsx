import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem.jsx';

function Listing(props) {
  const { items } = props;

  return (
    <ul className='item-list'>
      {items.map((item) => <ListItem key={item.listing_id} item={item} />)}
    </ul>
  )
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  items: PropTypes.array.isRequired
}

export default Listing