import React, { useContext, useEffect, useState } from 'react';
import { UidContext } from '../AppContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDispatch } from 'react-redux';
import {
  signetDocument,
  unsignetDocument,
} from '../../actions/document.actions';

const SignetButton = ({ document }) => {
  const [signeted, setSigneted] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const signet = () => {
    dispatch(signetDocument(document._id, uid));
    setSigneted(true);
  };

  const unsignet = () => {
    dispatch(unsignetDocument(document._id, uid));
    setSigneted(false);
  };

  useEffect(() => {
    if (document.signeters.includes(uid)) setSigneted(true);
    else setSigneted(false);
  }, [uid, document.signeters, signeted]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="/img/icons/heart.svg" alt="signet" />}
          position={['bottom center', 'bottom right', 'bottom left']}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour mettre en favoris un document !</div>
        </Popup>
      )}
      {uid && signeted === false && (
        <img src="/img/icons/signet.svg" onClick={signet} alt="signet" />
      )}
      {uid && signeted && (
        <img
          src="/img/icons/signet-filled.svg"
          onClick={unsignet}
          alt="unsignet"
        />
      )}
      <span>{document.signeters.length}</span>
    </div>
  );
};

export default SignetButton;
