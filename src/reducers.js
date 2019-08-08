function reducer(state = {value: 0}, action) {
  switch (action.type) {
    case 'INCR':
      return state.value + 1;
    case 'DECR':
      return state.value - 1;
    case 'PLUS':
      return state.value + action.num;
    case 'MINUS':
      return state.value - action.num;
    default:
      return state.value;
  }
}

export default reducer;