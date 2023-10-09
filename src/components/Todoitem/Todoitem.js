import React from "react";


 const Todoitem = (props) => {
    const {itms, deleteItem} = props;
    const length = itms.length
    const Todolist = length ? ( 
        itms.map(list => {
        return(
            <div key={list.id} className="champs">
                <span className="name">{list.name}</span>
                <span id="agedata">{list.age}</span>
                <span className="icon" onClick={ () => deleteItem(list.id)}>&times;</span>
            </div>
        )
    }) 
    ): (
    <p>No items </p>
    )
    
    return(
        <div className="listitems">
            <div id="headtitle">
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {Todolist}
        </div>
    )
}


export default Todoitem;