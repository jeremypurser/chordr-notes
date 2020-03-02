import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesAPI from '../api';
import { State } from '../state';
import { noteCollectionSlice } from '../state/collection-slice';
import '../styles/NotesCollection.scss';
import GuitarNeck from './GuitarNeck';

export default function NotesCollection() {
  const [cancel, setCancel] = useState(false);
  const collection = useSelector((state: State) => state.collection);
  const dispatch = useDispatch();
  const { actions } = noteCollectionSlice;

  // console.log(collection);

  useEffect(() => {
    console.log('using effect');
    !cancel &&
      NotesAPI.get('1').then(result => {
        dispatch(actions.loadNotes(result.data));
      });
    return () => setCancel(true);
  }, [actions, cancel, dispatch]);

  const renderNotes = collection.map((props, i) => {
    return (
      <div key={i} className="collection-note">
        <GuitarNeck {...props} callback={() => {}} />
      </div>
    );
  });

  return <div className="container">{renderNotes}</div>;
}
