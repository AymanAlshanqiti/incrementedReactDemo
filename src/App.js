import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props.log);
    return (
      <div className="container">
        <div className="row my-4 justify-content-md-cente">
          <div className="col-3">
            <label>Counter: {this.props.theCounter}</label>
          </div>
          <div className="col-3">
            <label>Log: {this.props.log}</label>
          </div>

          <div className="col-4">
            <button
              onClick={() => this.props.onIncrement()}
              className="btn btn-warning mx-3"
            >
              Increment
            </button>
            <button
              onClick={() => this.props.onDecrement()}
              className="btn btn-info"
            >
              Decrement
            </button>
            <button
              onClick={() => this.props.log()}
              className="btn btn-dark mx-3"
            >
              Log
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theCounter: state.rootCounter.counter,
    log: state.rootLog.log
  };
};

const mapDispatcherToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actionCreators.increment()),
    onDecrement: () => dispatch(actionCreators.decrement()),
    log: () => dispatch(actionCreators.log())
  };
};

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(App);
