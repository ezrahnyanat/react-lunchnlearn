import React, { Component } from 'react';
import './App.css';
import Order from './components/Order'

class App extends Component {
  render() {

    // const Order = (props) => {
    //   return (
    //     <p>{props.name}: {props.drink}</p>
    //   )
    // }

    return (
      <div className="App">
        <h1>Hello Central Cafe</h1>
        <Order name='Allen' drink='mocha' food='roti'/>
        <Order name='Brad' drink='drip' food='sandwich'/>
        <Order name='Ty' drink='latte'food='steak'/>
        <Order />
      </div>
    );
  }
}

export default App;
