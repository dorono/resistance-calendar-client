import { FETCH_EVENTS } from './actions';

const INITIAL_STATE = {
  all: [],
  event: null
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_EVENTS:
    return {...state, all: action.payload};
  default:
    return state;
  }
}
