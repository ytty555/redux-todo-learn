import React from "react";
import Calc from "./Calc";
import {connect} from 'react-redux';

class DataToCalc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Calc value={this.props.value}/>;
  }
}

const mapStateToProps = state => {
  return {
    value: state.value
  };
};

export default connect(mapStateToProps)(DataToCalc);
