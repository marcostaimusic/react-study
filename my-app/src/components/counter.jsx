/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button } from "react-bootstrap";

class Counter extends React.Component {
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : this.props.counter.value;
  }

  formatColors() {
    return this.props.counter.value === 0 ? "warning" : "primary";
  }

  render() {
    return (
      <div>
        {this.props.children}
        <h5>Counter #{this.props.counter.id}</h5>{" "}
        {/*metodo alternativo alla children props, o passo il children o passo la prop */}
        <Button variant={this.formatColors()}>{this.formatCount()}</Button>{" "}
        <Button
          onClick={() => this.props.onIncrement(this.props.counter)}
          variant="primary"
        >
          Increment
        </Button>
        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          variant="danger"
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default Counter;
