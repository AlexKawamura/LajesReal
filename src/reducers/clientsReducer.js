import { SET_CLIENTS } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case SET_CLIENTS:
      return action.clients;
    default:
        return state;
  }
}