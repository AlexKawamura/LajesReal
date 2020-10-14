import { SET_FIELD, SET_ALL_FIELDS, RESET_FORM } from '../actions';

const INITIAL_STATE = {
  id: null,
  name: '',
  cpf: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  uf: '',
  purchases: {}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_FIELD:
      const clonedState = {...state};
      
      clonedState[action.field] = action.value;

      return clonedState;
    case SET_ALL_FIELDS:
      return action.item
    case RESET_FORM:
      return INITIAL_STATE
    default:
      return state;
  }
}