import React from "react";
import Calc from "./Calc";
import { connect } from "react-redux";
import { increment } from "../actions";

class DataToCalc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Calc value={this.props.value} onClickIncr={increment()} />;
  }
}

const mapStateToProps = state => {
  return {
    value: state.value
  };
};

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataToCalc);
