import React, {Component, Fragment} from "react";
import './ShowItems.css';


const ShowItems = (props) => {

    const recieved_delete_item = props.sent_delete_item;
    const recieved_state = props.sent_state;
    // note: we use props directly without this.props because this is function-based, while we use this. with class-based
    let items_length = recieved_state.length;

    const items_list = items_length ? (
            recieved_state.map(obj =>{
            return(
                <div key={obj.id} className="add-span">
                    <span className="name"> {obj.name} </span>
                    <span className="age"> {obj.age} </span>
                    <span className="action icon" onClick={() => recieved_delete_item(obj.id)}> &times; </span>

                {/* note: if we write <onClick={recieved_delete_item(obj.id)}>, it will delete them automatically, but we want to delete it
                by using (x) button, so, we must write it as anynmous function. */}

                </div>
            )
            })
        ) :  (<p className="no-items"> There is no item to show </p>)
    
    return(
        <div className="ShowItems">
            <div className="titles">
                <span className="name title"> Name </span>
                <span className="age title"> Duration </span>
                <span className="action title"> Action </span>
            </div>
            <div> {items_list} </div>
        </div>
    )
}


export default ShowItems;