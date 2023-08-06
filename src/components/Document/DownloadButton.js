import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../AppContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDispatch } from 'react-redux';
import { downloadDocument } from '../../actions/document.actions';

const DownloadButton = ({ document }) => {
  const [downloaded, setDownloaded] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const download = () => {
    dispatch(downloadDocument(document._id, uid));
    setDownloaded(true);
  };

  useEffect(() => {
    if (document.downloaders.includes(uid)) setDownloaded(true);
    else setDownloaded(false);
  }, [uid, document.downloaders, downloaded]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="/img/icons/download.svg" alt="download" />}
          position={['bottom center', 'bottom right', 'bottom left']}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour télécharger ce document !</div>
        </Popup>
      )}
      {uid && downloaded === false && (
        <a href={document.faxe} target="_blank" rel="noopener noreferrer">
          <img
            src="/img/icons/download.svg"
            onClick={download}
            alt="download"
          />
        </a>
      )}
      {uid && downloaded && (
        <a href={document.faxe} target="_blank" rel="noopener noreferrer">
          <img src="/img/icons/download-filled.svg" alt="undownload" />
        </a>
      )}
      <span>{document.downloaders.length}</span>
    </div>
  );
};

export default DownloadButton;
