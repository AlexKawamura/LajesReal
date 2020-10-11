export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value
  }
}

export const EMPTY_FIELDS = 'EMPTY_FIELDS';
export const emptyFields = () => {
  return {
    type: EMPTY_FIELDS,
  }
}

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFields = item => ({
  type: SET_ALL_FIELDS,
  item: item
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM
});