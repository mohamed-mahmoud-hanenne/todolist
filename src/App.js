import React, { Component } from 'react'
import Todoitem from './components/Todoitem/Todoitem';
import Additem from './components/Additem/Additem';

class App extends Component{

  state = {
    users : [
      {id: 1 , name : "Mohamed", age: 22},
      {id: 2 , name : "Hamoudi", age: 23},
      {id: 3 , name : "sidi", age: 24},
    ]
  }

  render() {
    return(
      <div>
        To list App
        <Todoitem />
        <Additem />
      </div>
    )
  }
}
export default App;
