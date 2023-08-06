import { GET_POST_ERRORS } from '../actions/post.actions';
import { GET_USER_ERRORS } from '../actions/user.actions';
import { GET_DOCUMENT_ERRORS } from '../actions/document.actions';

const initialState = { userError: [], postError: [], documentError: [] };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_ERRORS:
      return {
        postError: action.payload,
        userError: [],
      };
    case GET_USER_ERRORS:
      return {
        userError: action.payload,
        postError: [],
      };
    case GET_DOCUMENT_ERRORS:
      return {
        documentError: action.payload,
        userError: [],
      };
    default:
      return state;
  }
}
