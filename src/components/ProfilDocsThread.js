import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocuments } from '../actions/document.actions';
import Card from './Document/Card';

const ProfilDocsThread = () => {
  const [loadDocument, setLoadDocument] = useState(true);
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.documentReducer);
  const userData = useSelector((state) => state.userReducer);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadDocument(true);
    }
  };

  useEffect(() => {
    if (loadDocument) {
      dispatch(getDocuments());
      setLoadDocument(false);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadDocument, dispatch]);

  return (
    <>
      <div className="profilthread-container">
        <ul>
          {documents.some(
            (document) => userData._id === document.documenterId
          ) ? (
            documents.map((document) => {
              if (userData._id === document.documenterId) {
                return <Card document={document} key={document._id} />;
              } else {
                return null;
              }
            })
          ) : (
            <div className="zero-document">
              <p>Aucun document disponible.</p>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default ProfilDocsThread;
