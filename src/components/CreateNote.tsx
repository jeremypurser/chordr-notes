import 'bulma';
import React from 'react';
import ChordDetailsForm from './ChordDetailsForm';
import GuitarNeck from './GuitarNeck';
import Header from './Header';

export default function CreateNote() {
  return (
    <div className="container is-fluid">
      <Header />
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
    </div>
  );
}