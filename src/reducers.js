import { combineReducers } from 'redux';
import EventsReducer from './containers/EventsList/reducer';

// the syntax below allows us to avoid using the property name, 'reducer',
// as using that name could lead to naming conflicts


const rootReducer = combineReducers({
  events: EventsReducer,
});

export default rootReducer;
