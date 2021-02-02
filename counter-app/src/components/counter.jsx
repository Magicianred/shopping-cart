//counter.jsx contains components. We work here most of the time.
import React, { Component } from "react";
// -------------------------------------------
// My first component :
class Counter extends Component {
  //Component class from react module. Counter is a child to Component, it
  //means that Counter has his parent's features as well as his own features.
  state = {
    val: this.props.value,
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
        <button onClick= {this.handleIncrement} className="btn btn-success btn-sm">+</button> 
        <button onClick= {this.doHandleDecrement} className="btn btn-warning btn-sm ml-2">-</button>
        <button onClick= {()=>{this.props.onDelete(this.props.id)}} className="btn btn-danger btn-sm ml-2">Remove</button>
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
    if (this.state.val === 0 || this.state.val < 0) {
      classes += "default";
    } else {
      classes += "primary";
    }
    return classes;
  }
  //Helper Methods :

  formatCount() {
    let { val } = this.state; //Object Distructuring _(this.state.val)
    if (val === 0 || val<0) {
      return "Zero";
      // return <h1>Zero</h1>; //JSX Expression
    } else {
      return val;
    }
  }
  //Helper Methods for Events (onClick) aka *Event Handler*
// -------------Increment(+)--------------

  handleIncrement = () =>{
    
  // this.state.count++; not accepted in react whereas "this.setState({val:this.state.val+1});"
  // is accepted
  if ({val:this.state.val}<0) {
    this.setState({val:this.state.val*0});
    
  }

  this.setState({val:this.state.val+1});
  

  }

  // doHandleIncrement = ( ) =>{
  //   this.handleIncrement({id:1});

  // }
// -------------Decrement(-)--------------

  handleDecrement = (product) =>{
    console.log(product);
  // this.state.count++; not accepted in react
  if({val:this.state.val}<0){
    this.formatCount();
    }
    else{
      this.setState({val:this.state.val-1});
    }

  }

  doHandleDecrement = ()=> {
    this.handleDecrement({id:0});
  }

}

export default Counter;
