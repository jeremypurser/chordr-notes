import React from 'react';
import { NotesCollectionProps } from '../containers/NotesCollectionContainer';
import '../styles/NotesCollection.scss';
import GuitarNeck from './GuitarNeck';

export default function NotesCollection(props: NotesCollectionProps) {
  const renderNotes = props.collection.map((note, i) => {
    return (
      <div key={i} className="collection-note">
        <GuitarNeck {...note} callback={() => {}} />
      </div>
    );
  });

  return <div className="container">{renderNotes}</div>;
}
