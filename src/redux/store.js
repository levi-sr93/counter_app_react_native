import {createStore, combineReducers} from 'redux';

import countersReducer from './reducers/countersReducers';

const rootReducer = combineReducers({
  counters: countersReducer,
});

export default createStore(rootReducer);
