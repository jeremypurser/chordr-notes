import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesAPI from '../api';
import { State } from '../state';
import { noteCollectionSlice } from '../state/collection-slice';

export default function NotesCollection() {
  const [cancel, setCancel] = useState(false);
  const collection = useSelector((state: State) => state.collection);
  const dispatch = useDispatch();
  const { actions } = noteCollectionSlice;

  console.log(collection);

  useEffect(() => {
    !cancel &&
      NotesAPI.get('1').then(result => {
        dispatch(actions.loadNotes(result.data));
      });
    return () => setCancel(true);
  });

  return <div>hiii</div>;
}
