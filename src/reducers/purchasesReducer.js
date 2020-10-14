import { SET_PURCHASES } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case SET_PURCHASES:
      return action.purchases;
    default:
        return state;
  }
}