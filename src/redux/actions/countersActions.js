export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CLEAR_COUNTER = 'CLEAR_COUNTER';

export const addCounter = ({title}) => {
  const id = Math.random().toString(36).substr(2, 9);
  return {
    type: ADD_COUNTER,
    payload: {id, title: title, numbers: 0},
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
