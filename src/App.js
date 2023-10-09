import React, { Component } from 'react'
import Todoitem from './components/Todoitem/Todoitem';
import Additem from './components/Additem/Additem';
import './index.css'

class App extends Component{

  state = {
    users : [
      {id: 1 , name : "Mohamed", age: 22},
      {id: 2 , name : "Hamoudi", age: 23},
      {id: 3 , name : "sidi", age: 24},
    ]
  }


  deleteItem = (id) => {
   let items = this.state.users ;
   let index = items.findIndex(item => item.id === id)
   items.splice(index,1)
   this.setState({users : items});

  // let items = this.state.users.filter(item => {
  //   return item.id !== id
  // })
  // this.setState({users : items})
  }

  addItem = (item) => {
    let items = this.state.users;
    items.push(item);
    this.setState({
      users : items
    })
  }

  render() {
    return(
      <div className='container'>
        <h1>To do List</h1>
        <Todoitem itms = {this.state.users} deleteItem = {this.deleteItem}/>
        <Additem addItem = {this.addItem}/>
      </div>
    )
  }
}
export default App;
