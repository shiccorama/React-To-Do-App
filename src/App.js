import React, {Component, Fragment} from "react";
import './App.css';
import ShowItems from "./components/ShowItems/ShowItems";
import AddItems from "./components/AddItems/AddItems";

class App extends Component {

  state = {
    items: [
      {id:1, name:"Go shopping", age:3},
      {id:2, name:"Go to barber", age:2},
      {id:3, name:"Go wash my car", age:1},
      {id:4, name:"Go to gym", age:4}

    ]
  }

 
  delete_item = (id) =>{

    let action_items = this.state.items;

    // first method:

    // let index = action_items.findIndex(obj => obj.id === id);
    // action_items.splice(index, 1);
    // this.setState({items : action_items});
    // note: in {key:value}, if the key === value, you can use it once i.e. {items : items} becomes {items}

    // second method:
    let filtered_items = action_items.filter(obj => {
      return obj.id !== id 
    })
    this.setState({items : filtered_items})
    // note: filter() method deletes only whichever comes (false) and keeps only (true) returns.
  }


    add_item = (sent_current_state) => {

        sent_current_state.id = Math.random() * 10;
        let action_items = this.state.items;
        action_items.push(sent_current_state);
        this.setState({ items: action_items });

    }


  render(){

    return (
        <div className="App container">
          <h1 className="title-bar"> To-Do List </h1>

          <ShowItems sent_state={this.state.items} sent_delete_item={this.delete_item} />

            <AddItems sent_add_item={this.add_item} />

        </div>
    );
      
  }
}

export default App;
