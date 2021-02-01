import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = () =>{
    console.log('Event Happened');
  } 

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <div
            style={{
              display: "flex",
              FlexDirection: "column",
              padding: "20px",
            }}
          >
            <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>
              {/* Counter has these props as well as his own state */}
                {/* <h3>Title</h3> */}
            </Counter>
          </div>
        ))}
      </div>

      // <div style={{display:'flex', flexDirection:'row'}}>
      //     <div><Counter /></div>
      //     <div><Counter /></div>
      //     <div><Counter /></div>
      //     <div><Counter /></div>
      // </div>
    );
  }
}

export default Counters;
