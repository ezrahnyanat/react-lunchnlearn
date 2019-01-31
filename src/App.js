import React, { Component } from 'react';
import './App.css';
import Order from './components/Order'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      drink: '',
      food: '',
      orders: []
    }
    this.nameInput = React.createRef()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, drink, food, orders } = this.state
    orders.push({name, drink, food})
    this.setState({
      orders,
      name: '',
      drink: '',
      food: ''
    })
    this.nameInput.current.focus()
  }

  handleDelete = (name) => {
    const { orders } = this.state 
    let newOrderList = orders.filter(order => order.name !== name )
    this.setState({
      orders: newOrderList
    })
  }

  render() {

    const {name, drink, food, orders} = this.state

    return (
      <div className="App">
        <h1>Hello Central Cafe</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: 
            <input type='text' ref={this.nameInput} name='name' value={name} onChange={this.handleChange} />
          </label>
          <label>Drink: <input type='text' name='drink' value={drink} onChange={this.handleChange} /></label>
          <label>Food: <input type='text' name='food' value={food} onChange={this.handleChange} /></label>
          <input type='submit' />
        </form>
        <hr/>
        {orders.map(order => (
          <Order 
            {...order} 
            key={order.name} 
            onDelete={this.handleDelete.bind(this, order.name)} />))}
      </div>
    );
  }
}

export default App;
