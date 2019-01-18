import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from './Item'

class Order extends Component {
  render(){
    const { name, drink, food } = this.props
    return (
      <div style={{color: 'blue' }}>
      <p>{name}: {drink}</p>
      <Item food={food}/>
      </div>
    )
  }
}

Order.propTypes = {
  name: PropTypes.string,
  drink: PropTypes.string
}

Order.defaultProps = {
  name: 'Craig',
  drink: 'water'
}

export default Order