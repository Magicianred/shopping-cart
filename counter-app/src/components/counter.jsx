//counter.jsx contains components. We work here most of the time.
import React, { Component } from "react";
// -------------------------------------------
// My first component :
class Counter extends Component {
  //Component class from react module. Counter is a child to Component, it
  //means that Counter has his parent's features as well as his own features.
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"]
  };//state (a plain javascript object) is Counter assests.

  styles = {
    fontSize: "10px", //or plain 10
    fontWeight: "bold",
    marginRight: "25px",
  }; //internal CSS style={this.styles}
  //We also used external CSS (Bootstrap)
  //For inline CSS : style={{fontSize : '10px'}}

  // constructor(){
  //   super();
  //   this.handleIncrement=this.handleIncrement.bind(this);
  // }

  render() {
    // console.log(this.props)
    // console.log('props',this.props);
    //   let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        
        {/* {this.props.children} */}
        {/* <h2>counter # {this.props.id}</h2> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* in the curly brackets we should write plain js object */}
        <button onClick= {this.doHandleIncrement} className="btn btn-info btn-sm">Increment</button>
        <button onDelete= {this.doHandleDelete} className="btn btn-danger btn-sm ml-2">Delete</button>

        {/* <ul>
          <li>
            {this.state.tags.map(tag => <li>{tag}</li>)}
          </li>
        </ul> */}
      </React.Fragment>
    ); //JSX expression
  } //end of render()

  //Helper Methods :
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    if (this.state.value === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }
    return classes;
  }
  //Helper Methods :

  formatCount() {
    let { value } = this.state; //Object Distructuring _(this.state.value)
    if (value === 0) {
      return "Zero";
      // return <h1>Zero</h1>; //JSX Expression
    } else {
      return value;
    }
  }
  //Helper Methods :

  handleIncrement = (product) =>{
    console.log(product);
  // this.state.count++; not accepted in react
  this.setState({value:this.state.value+1});

  }

  doHandleIncrement = ( ) =>{
    this.handleIncrement({id:1});

  }

  //Helper Methods :
  
  handleDelete = (product) =>{
    console.log(product);
  // this.state.count++; not accepted in react
     this.setState({value:this.state.value-1});
      
    }
    
  doHandleDelete = ( ) =>{
    this.handleDelete({id:1});

  }

  


}

export default Counter;
