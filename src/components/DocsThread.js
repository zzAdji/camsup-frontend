import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocuments } from '../actions/document.actions';
import Card from './Document/Card';
import { isEmpty } from './Utils';

const DocsThread = () => {
  const [loadDocument, setLoadDocument] = useState(true);
  const [count, setCount] = useState(10);
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.documentReducer);

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
      dispatch(getDocuments(count));
      setLoadDocument(false);
      setCount(count + 10);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadDocument, dispatch, count]);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(documents[0]) &&
          documents.map((document) => {
            return <Card document={document} key={document._id} />;
          })}
      </ul>
    </div>
  );
};

export default DocsThread;
