import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import api from "./mockApi.js";

export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
  return {
    type: FETCH_EVENTS,
    payload: api.getMockEvents()
  };
}
