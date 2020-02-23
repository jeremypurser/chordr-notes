import React from 'react';
import GuitarNeck from './GuitarNeck';
import Header from './Header';
import ChordDetailsForm from './ChordDetailsForm';
import 'bulma';

export default function App() {
  return (
    <div className="container is-fluid">
      <Header />
      <section className="columns">
        <div className="column is-one-quarter">
          <GuitarNeck />
        </div>
        <div className="column is-one-fifth">
          <ChordDetailsForm />
        </div>
      </section>
    </div>
  );
}
