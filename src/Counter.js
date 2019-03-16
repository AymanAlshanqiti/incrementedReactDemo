import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div className="row my-4 justify-content-md-cente">
        <div className="col-3">
          <label>{this.props.cttheCounterr}</label>
        </div>

        <div className="col-4">
          <button
            onClick={this.onIncrementCounter}
            className="btn btn-warning mx-3"
          >
            Increment
          </button>
          <button onClick={this.onDecrementCounter} className="btn btn-info">
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theCounter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
