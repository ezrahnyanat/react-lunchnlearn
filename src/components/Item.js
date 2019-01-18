import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Item extends Component {
  render() {
    return (
      <p>{this.props.food}</p>
    )
  }
}

Item.propTypes = {
  food: PropTypes.string
}

Item.defaultProps = {
  food: 'burrito bowl'
}

export default Item