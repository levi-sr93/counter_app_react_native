import * as actions from '../redux/actions/countersActions';
import countersReducers, {
  inititalState,
} from '../redux/reducers/countersReducers';
import {generateId} from '../utils/generateId';

describe('Reducer', () => {
  const title = 'Test counter';
  const id = generateId();
  const mockCounter = {
    id,
    title,
    numbers: 0,
  };

  it('Should have initial empty state', () => {
    expect(countersReducers(undefined, {})).toEqual(inititalState);
  });

  it('Should add counter', () => {
    const expectedResult = {
      counters: [mockCounter],
    };

    expect(
      countersReducers(undefined, actions.addCounter({title, id})),
    ).toEqual(expectedResult);
  });

  it('Should delete counter', () => {
    const initialState = {
      counters: [
        {
          id,
          title,
          numbers: 0,
        },
      ],
    };
    const expectedResult = {
      counters: [],
    };

    expect(countersReducers(initialState, actions.removeCounter(id))).toEqual(
      expectedResult,
    );
  });

  it('Should increment number', () => {
    const initialState = {
      counters: [
        {
          id,
          title,
          numbers: 0,
        },
      ],
    };
    const expectedResult = {
      counters: [
        {
          id,
          title,
          numbers: 1,
        },
      ],
    };

    expect(countersReducers(initialState, actions.increment(id))).toEqual(
      expectedResult,
    );
  });

  it('Should decrement number', () => {
    const initialState = {
      counters: [
        {
          id,
          title,
          numbers: 1,
        },
      ],
    };
    const expectedResult = {
      counters: [
        {
          id,
          title,
          numbers: 0,
        },
      ],
    };

    expect(countersReducers(initialState, actions.decrement(id))).toEqual(
      expectedResult,
    );
  });

  it('Should clear counter (reset numbers)', () => {
    const initialState = {
      counters: [
        {
          id,
          title,
          numbers: 10,
        },
      ],
    };
    const expectedResult = {
      counters: [
        {
          id,
          title,
          numbers: 0,
        },
      ],
    };

    expect(countersReducers(initialState, actions.clearCounter(id))).toEqual(
      expectedResult,
    );
  });
});
