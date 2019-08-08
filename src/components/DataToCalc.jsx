import React from "react";
import Calc from "./Calc";
import { connect } from "react-redux";
import { increment, decrement, plus, minus } from "../actions";

class DataToCalc extends React.Component {
 
  render() {
    return (
      <Calc
        value={this.props.value}
        onClickIncr={() => this.props.dispatch(increment())}
        onClickDecr={() => this.props.dispatch(decrement())}
        onClickPlus={() => this.props.dispatch(plus(5))}
        onClickMinus={() => this.props.dispatch(minus(5))}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch(increment())
//   };
// }

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(DataToCalc);
