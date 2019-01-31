import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from './Item'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      ago: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval( () => {
      let now = new Date().getTime()
      let ago = this.state.time.getTime()
      this.setState({
        ago: Math.floor((now - ago) / 1000)
      }) 
    }, 1000)
    console.log('component mounted')
  } 

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log('component unmounted')
  }

  render(){
    const { name, drink, food, onDelete } = this.props
    const { time, ago } = this.state
    return (
      <div style={{backgroundColor: ago <= 10 ? 'lightGreen' : 'red' }}>
      <p>Ordered at {time.toLocaleTimeString()}. {ago} seconds ago</p>
      <p>{name}: {drink}</p>
      <Item food={food}/>
      <button onClick={onDelete}>Done</button>
      <hr />
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