import 'bulma';
import React from 'react';
import ChordDetailsForm from './ChordDetailsForm';
import GuitarNeck from './GuitarNeck';

export default function CreateNote() {
  return (
    <section className="columns">
      <div className="column is-one-fifth">
        <GuitarNeck />
      </div>
      <div className="column is-one-fifth">
        <div className="columns">
          <div className="column is-one-fifth" />
          <ChordDetailsForm />
        </div>
      </div>
    </section>
  );
}
