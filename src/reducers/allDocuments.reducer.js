import { GET_ALL_DOCUMENTS } from '../actions/document.actions';

const initialState = {};

export default function allDocumentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DOCUMENTS:
      return action.payload;
    default:
      return state;
  }
}
