import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import Footer from './Footer';
import './App.css';

class App extends Component {

  state = {
    groceries: [
      {id: 1, name: "Banana", complete: false, },
      {id: 2, name: "Apple", complete: false, },
    ],
    filter: 'All'
  }

  setFilter = (filter) => {
    this.setState({filter})
  }

  getUniqId = () => {
    return (Math.floor((1 + Math.random()) * 0x10000))
    .toString(16)
    .substring(1)
  }

  addItem = (name) => {
    const { groceries } = this.state
    const grocery = { id: this.getUniqId(), name, complete: false, }
    this.setState({ groceries: [...groceries, grocery]})
  }

  handleClick = (id) => {
    const { groceries } = this.state 
    this.setState({
      groceries: groceries.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  visibleItems = () => {
    const { groceries, filter } = this.state

    switch(filter) {
      case 'Active':
        return groceries.filter( t => !t.complete)
      case 'Complete':
        return groceries.filter( t => t.complete)
      default: 
        return groceries
    }
  }

  render() {
    const { groceries, filter } = this.state
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={this.visibleItems()} itemClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;
