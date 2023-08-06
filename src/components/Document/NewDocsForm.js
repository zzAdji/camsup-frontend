import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, timestampParser } from '../Utils';
import { NavLink } from 'react-router-dom';
import { addDocument, getDocuments } from '../../actions/document.actions';

const NewDocsForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  //const error = useSelector((state) => state.errorReducer.documentError);
  const dispatch = useDispatch();
  const [documentDocs, setDocumentDocs] = useState(null);
  const [docsType, setDocumentType] = useState(null);

  const handleDocument = async () => {
    if (title || tags || documentDocs) {
      const data = new FormData();
      data.append('documenterId', userData._id);
      data.append('title', title);
      data.append('tags', tags);
      if (file) data.append('file', file);

      await dispatch(addDocument(data));
      dispatch(getDocuments());
      cancelDocument();
    } else {
      alert('Veuillez entrer un titre');
    }
  };

  const handleDocs = (e) => {
    setDocumentDocs(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);

    // eslint-disable-next-line no-const-assign
    const fileType = e.target.files[0];

    if (fileType) {
      if (fileType.type === 'application/pdf') {
        setDocumentType('pdf');
      } else if (
        fileType.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setDocumentType('word');
      } else {
        setDocumentType('unknow');
      }
    }
  };

  const cancelDocument = () => {
    setTitle('');
    setTags('');
    setFile('');
    setDocumentDocs('');
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);
  }, [userData, title, tags]);

  return (
    <div className="docs-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          <div className="data">
            <p>
              <span>{userData.following ? userData.following.length : 0}</span>{' '}
              Abonnement
              {userData.following && userData.following.length > 1 ? 's' : null}
            </p>
            <p>
              <span>{userData.followers ? userData.followers.length : 0}</span>{' '}
              Abonné
              {userData.followers && userData.followers.length > 1 ? 's' : null}
            </p>
          </div>
          <NavLink exact to="/profil">
            <div className="user-info">
              <img src={userData.picture} alt="user-img" />
            </div>
          </NavLink>
          <div className="docs-form">
            <textarea
              name="title"
              id="title"
              placeholder="Insérer un titre"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              name="tags"
              id="tags"
              placeholder="Insérer des tags"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
            {title || tags || documentDocs > 20 ? (
              <li className="doc-card-container">
                <div className="doc-card-left">
                  {docsType === 'pdf' ? (
                    <img
                      src="/uploads/documents/pdf-pic.png"
                      alt="pdf-pic"
                      className="doc-card-pic"
                    />
                  ) : docsType === 'word' ? (
                    <img
                      src="/uploads/documents/word-pic.png"
                      alt="word-pic"
                      className="doc-card-pic"
                    />
                  ) : docsType === 'unknow' ? (
                    <img
                      src="/uploads/documents/unknow-pic.png"
                      alt="unknow-pic"
                      className="doc-card-pic"
                    />
                  ) : null}
                </div>
                <div className="doc-card-right">
                  <div className="doc-card-header">
                    <p>{title}</p>
                    <span>{timestampParser(Date.now())}</span>
                    <div className="doc-item">{tags && <p>{tags}</p>}</div>
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                <>
                  <img src="/img/icons/document.svg" alt="img" />
                  <input
                    type="file"
                    id="file-upload"
                    name="file"
                    accept=".pdf, .docx"
                    onChange={(e) => handleDocs(e)}
                  />
                </>
              </div>
              {/*{!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}*/}
              <div className="btn-send">
                {title || tags || documentDocs > 20 ? (
                  <button className="cancel" onClick={cancelDocument}>
                    Annuler
                  </button>
                ) : null}
                <button className="send" onClick={handleDocument}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewDocsForm;
