import React from 'react';
// import PropTypes from 'prop-types';

const Calc = ({value, onClickIncr, onClickDecr, onClickPlus, onClickMinus}) => {
  return (
    <>
      <p>Результат вычисления = {value}</p>
      <button type='button' onClick={onClickIncr}>Increment</button>
      <button type='button' onClick={onClickDecr}>Decrement</button>
      <button type='button' onClick={onClickPlus}>+</button>
      <button type='button' onClick={onClickMinus}>-</button>
    </>
  );
}

// Calc.propTypes = {
//   value: PropTypes.number.isRequired,
//   onClickIncr: PropTypes.func.isRequired, 
//   onClickDecr: PropTypes.func.isRequired,
//   onClickPlus: PropTypes.func.isRequired,
//   onClickMinus: PropTypes.func.isRequired
// }


export default Calc;