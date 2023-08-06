import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dateParser, isEmpty } from '../Utils';
import SignetButton from './SignetButton';
import DeleteCard from './DeleteCard';
import DownloadButton from './DownloadButton';

const Card = ({ document }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  const isPdf = document.faxe.endsWith('.pdf');

  return (
    <li className="doc-card-container" key={document._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="doc-card-left">
            {isPdf ? (
              <img
                src="/uploads/documents/pdf-pic.png"
                alt="pdf-pic"
                className="doc-card-pic"
              />
            ) : (
              <img
                src="/uploads/documents/word-pic.png"
                alt="word-pic"
                className="doc-card-pic"
              />
            )}
          </div>
          <div className="doc-card-right">
            <div className="doc-card-header">
              <p>{document.title}</p>
              <span>{dateParser(document.createdAt)}</span>
            </div>

            <div className="doc-item">
              {document.tags ? (
                <p>Tags: {document.tags}</p>
              ) : (
                <p>Tags: Aucun</p>
              )}
            </div>
            <div className="card-footer">
              <SignetButton document={document} />
              <DownloadButton document={document} />
              <img src="/img/icons/share.svg" alt="share" />
              {userData._id === document.documenterId ? (
                <div className="button-container">
                  <DeleteCard id={document._id} />
                </div>
              ) : (
                <div>
                  <h3>
                    <h6>by</h6>
                    {!isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user._id === document.documenterId)
                            return user.pseudo;
                          else return null;
                        })
                        .join('')}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
