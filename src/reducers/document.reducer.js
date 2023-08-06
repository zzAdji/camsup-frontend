import {
  DELETE_DOCUMENT,
  GET_DOCUMENTS,
  SIGNET_DOCUMENT,
  UNSIGNET_DOCUMENT,
  DOWNLOAD_DOCUMENT,
} from '../actions/document.actions';

const initialState = [];

export default function documentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOCUMENTS:
      return action.payload;
    case SIGNET_DOCUMENT:
      return state.map((document) => {
        if (document._id === action.payload.documentId) {
          return {
            ...document,
            signeters: [action.payload.userId, ...document.signeters],
          };
        }
        return document;
      });
    case UNSIGNET_DOCUMENT:
      return state.map((document) => {
        if (document._id === action.payload.documentId) {
          return {
            ...document,
            signeters: document.signeters.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return document;
      });
    case DELETE_DOCUMENT:
      return state.filter(
        (document) => document._id !== action.payload.documentId
      );
    case DOWNLOAD_DOCUMENT:
      return state.map((document) => {
        if (document._id === action.payload.documentId) {
          return {
            ...document,
            downloaders: [action.payload.userId, ...document.downloaders],
          };
        }
        return document;
      });
    default:
      return state;
  }
}
