import { SET_FIELD } from '../actions';

const INITIAL_STATE = {
  name: '',
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_FIELD:
      const clonedState = {...state};
      
      clonedState[action.field] = action.value;

      console.log(action.field, action.value)

      return clonedState;
    default:
      return state;
  }
}