import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDocument } from '../../actions/document.actions';

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deleteDocument(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm('Voulez-vous supprimer ce document ?')) {
          deleteQuote();
        }
      }}
    >
      <img src="/img/icons/trash.svg" alt="trash" />
    </div>
  );
};

export default DeleteCard;
