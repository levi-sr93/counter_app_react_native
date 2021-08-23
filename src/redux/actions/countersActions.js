export const ADD_COUNTER = 'ADD_COUNTER';
export const ADD_COUNTER_TEST = 'ADD_COUNTER_TEST';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CLEAR_COUNTER = 'CLEAR_COUNTER';

export const addCounter = (title, id) => {
  return {
    type: ADD_COUNTER,
    payload: {id, title, numbers: 0},
  };
};

export const removeCounter = counterId => {
  return {
    type: REMOVE_COUNTER,
    payload: counterId,
  };
};

export const increment = id => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

export const decrement = id => {
  return {
    type: DECREMENT,
    payload: id,
  };
};

export const clearCounter = id => {
  return {
    type: CLEAR_COUNTER,
    payload: id,
  };
};
