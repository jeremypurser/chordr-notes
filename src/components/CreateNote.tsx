import 'bulma';
import React from 'react';
import { guitarNeckContainer } from '../containers';
import ChordDetailsForm from './ChordDetailsForm';
import GuitarNeck from './GuitarNeck';

const GuitarNeckCreate = guitarNeckContainer(GuitarNeck);

export default function CreateNote() {
  return (
    <section className="columns">
      <div className="column is-one-fifth">
        <GuitarNeckCreate />
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
