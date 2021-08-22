import {
  ADD_COUNTER,
  DECREMENT,
  INCREMENT,
  REMOVE_COUNTER,
  CLEAR_COUNTER,
} from '../actions/countersActions';

const inititalState = {
  counters: [],
};

export default function (state = inititalState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counters: [...state.counters, action.payload],
      };
    case REMOVE_COUNTER: {
      const newCounters = state.counters.filter(
        counter => counter.id !== action.payload,
      );

      return {
        ...state,
        counters: [...newCounters],
      };
    }
    case INCREMENT:
      {
        const id = action.payload;
        const selectedCounter = state.counters.find(item => item.id === id);
        if (selectedCounter) {
          const newCounters = state.counters.filter(
            counter => counter.id !== id,
          );
          return {
            ...state,
            counters: [
              ...newCounters,
              {
                id,
                title: selectedCounter.title,
                numbers: selectedCounter.numbers + 1,
              },
            ],
          };
        }
      }

      return {
        ...state,
      };

    case DECREMENT:
      {
        const id = action.payload;
        const selectedCounter = state.counters.find(item => item.id === id);
        if (selectedCounter) {
          const newCounters = state.counters.filter(
            counter => counter.id !== id,
          );
          return {
            ...state,
            counters: [
              ...newCounters,
              {
                id,
                title: selectedCounter.title,
                numbers: selectedCounter.numbers - 1,
              },
            ],
          };
        }
      }
      return {
        ...state,
      };

    case CLEAR_COUNTER:
      {
        const id = action.payload;
        const selectedCounter = state.counters.find(item => item.id === id);
        if (selectedCounter) {
          const newCounters = state.counters.filter(
            counter => counter.id !== id,
          );
          return {
            ...state,
            counters: [
              ...newCounters,
              {
                id,
                title: selectedCounter.title,
                numbers: 0,
              },
            ],
          };
        }
      }
      return {
        ...state,
      };

    default:
      return state;
  }
}
