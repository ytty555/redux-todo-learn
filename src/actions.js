export const increment = () => {
  return {
    type: 'INCR'
  }
};

export const decrement = () => {
  return {
    type: 'DECR'
  }
};

export const plus = (num) => {
  return {
    type: 'PLUS',
    num: num
  }
};

export const minus = (num) => {
  return {
    type: 'MINUS',
    num: num
  }
};

