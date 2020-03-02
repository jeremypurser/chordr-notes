import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesAPI from '../api';
import { State } from '../state';
import {
  noteCollectionSlice,
  NoteCollectionState,
} from '../state/collection-slice';
import '../styles/NotesCollection.scss';

export interface NotesCollectionProps {
  collection: NoteCollectionState;
}

export default function notesCollectionContainer(
  NotesCollection: React.ComponentType<NotesCollectionProps>
) {
  return () => {
    const [cancel, setCancel] = useState(false);
    const collection = useSelector((state: State) => state.collection);
    const dispatch = useDispatch();
    const { actions } = noteCollectionSlice;

    useEffect(() => {
      console.log('using effect');
      !cancel &&
        NotesAPI.get('1').then(result => {
          dispatch(actions.loadNotes(result.data));
        });
      return () => setCancel(true);
    }, [actions, cancel, dispatch]);

    return <NotesCollection collection={collection} />;
  };
}
