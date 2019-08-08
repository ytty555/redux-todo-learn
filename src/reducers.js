function reducer(state = {value: 0}, action) {
  switch (action.type) {
    case 'INCR':
      return state + 1;
    case 'DECR':
      return state - 1;
    case 'PLUS':
      return state + action.num;
    case 'MINUS':
      return state - action.num;
    default:
      return state.value;
  }
}

export default reducer;