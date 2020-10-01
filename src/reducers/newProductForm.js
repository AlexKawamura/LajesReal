import { SET_FIELD_PRODUCTS } from '../actions';

const INITIAL_STATE = {
  productName: '',
  stored: 0,
  price: '',
  description: ''
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_FIELD_PRODUCTS:
      const clonedState = {...state};
      
      clonedState[action.field] = action.value;

      console.log(action.field, action.value)

      return clonedState;
    default:
      return state;
  }
}