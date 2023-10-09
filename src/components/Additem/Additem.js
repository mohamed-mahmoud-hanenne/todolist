import React, { Component } from "react";
import './Additem.css';


class Additem extends Component {
    state = {
        name : '',
        age : ''
    }

    changefunc = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
       
    }

    funcSubmit = (e) => {
     e.preventDefault();
     this.props.addItem(this.state);
     this.setState({
        name : '',
        age : ''
     })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.funcSubmit} className="form">
                    <input type="text" placeholder="Enter name..." id="name" onChange={this.changefunc} value={this.state.name}/>
                    <input type="number" placeholder="Enter age..." id="age" onChange={this.changefunc} value={this.state.age}/>
                    <input type="submit" value= "Add" id="click"/>
                </form>
            </div>
        )
    }
}

export default Additem;