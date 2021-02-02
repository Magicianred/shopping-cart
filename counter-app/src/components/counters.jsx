import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [ // Array of objects
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  handleDelete = (counterId) => {
    const newCounter = this.state.counters.filter(c => c.id !==counterId);
    this.setState({counters:newCounter});
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
            <Counter key={counter.id}  value={counter.value} id={counter.id} onDelete={this.handleDelete}>
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
