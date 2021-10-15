import React from "react";
import { Navbar } from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import { Fragment } from "react";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //new array cloned from this.state
    const index = counters.indexOf(counter); //getting the index of the counter received in the parameters in the cloned array
    counters[index] = { ...counter }; //taking the counter object received in the parameter and cloning it to a new object
    counters[index].value++;
    this.setState({ counters }); //setState twith the new counters array

    console.log(counter);
    console.log(counters, "counters");
    console.log(index, "index");
    console.log(counters[index], "counter[index]");
  };

  handleDelete = (counterId) => {
    // console.log("event handler called", counterId);
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
