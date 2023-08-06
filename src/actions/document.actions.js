import axios from 'axios';

// documents
export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export const GET_ALL_DOCUMENTS = 'GET_ALL_DOCUMENTS';
export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const SIGNET_DOCUMENT = 'SIGNET_DOCUMENT';
export const UNSIGNET_DOCUMENT = 'UNSIGNET_DOCUMENT';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const DOWNLOAD_DOCUMENT = 'DOWNLOAD_DOCUMENT';

// errors
export const GET_DOCUMENT_ERRORS = 'GET_DOCUMENT_ERRORS';

export const getDocuments = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/document/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_DOCUMENTS, payload: array });
        dispatch({ type: GET_ALL_DOCUMENTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addDocument = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/document/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_DOCUMENT_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_DOCUMENT_ERRORS, payload: '' });
        }
      });
  };
};

export const signetDocument = (documentId, userId) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url:
        `${process.env.REACT_APP_API_URL}api/document/signet-document/` +
        documentId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: SIGNET_DOCUMENT, payload: { documentId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unsignetDocument = (documentId, userId) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url:
        `${process.env.REACT_APP_API_URL}api/document/unsignet-document/` +
        documentId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNSIGNET_DOCUMENT, payload: { documentId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteDocument = (documentId) => {
  return (dispatch) => {
    return axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}api/document/${documentId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_DOCUMENT, payload: { documentId } });
      })
      .catch((err) => console.log(err));
  };
};

export const downloadDocument = (documentId, userId) => {
  return (dispatch) => {
    return axios({
      method: 'post',
      url:
        `${process.env.REACT_APP_API_URL}api/document/download-document/` +
        documentId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: DOWNLOAD_DOCUMENT, payload: { documentId, userId } });
      })
      .catch((err) => console.log(err));
  };
};
