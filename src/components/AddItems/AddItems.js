import React, {Component, Fragment} from "react";
import './AddItems.css';


class AddItems extends Component{


    state = {
        name : "",
        age : ""
    }

    handle_change = (e) =>{
            this.setState({
                [e.target.id] : e.target.value
            })
    }

    handle_submit = (e) => {

       e.preventDefault();  // to stop refreshing the page
      if(e.target.name.value !== "" && e.target.age.value !== "" ){
         const current_state = this.state;
        this.props.sent_add_item(current_state);
        this.setState({
            name: "",
            age: ""
        })
      }
    }




    render(){
        return(
            <div className="AddItems">

            <br/>
            <form className="form-style" onSubmit={this.handle_submit}>

                    <input className="form-name" type="text" name="name" id="name" placeholder="to-do item" onChange={this.handle_change} value={this.state.name}/>
                    <input className="form-age" type="number" name="age" id="age" placeholder="hours" onChange={this.handle_change} value={this.state.age} />
                <input className="form-action" name="submit" type="submit" value="Add Note" />

            </form>














            </div>
        )
    }
}

export default AddItems;