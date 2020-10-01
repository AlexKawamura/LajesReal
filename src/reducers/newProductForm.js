import { EMPTY_FIELDS, SET_FIELD } from '../actions';

const INITIAL_STATE = {
  productName: '',
  stored: 0,
  price: '',
  description: ''
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_FIELD:
      const clonedState = {...state};
      
      clonedState[action.field] = action.value;

      return clonedState;
    case EMPTY_FIELDS:
      return INITIAL_STATE;
    default:
      return state;
  }
}