import { EMPTY_FIELDS, SET_FIELD } from '../actions';

const INITIAL_STATE = {
  name: '',
  cpf: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  uf: ''
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