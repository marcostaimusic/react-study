import React, { Component } from "react";
import Counter from "./counter";
class Counters extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-danger">
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h4>This are a children passed as this.props.children</h4>
            <h5>Counter #{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
