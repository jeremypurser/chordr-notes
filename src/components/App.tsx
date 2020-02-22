import React from 'react';
import GuitarNeck from './GuitarNeck';
import Header from './Header';
import 'bulma';

export default function App() {
  return (
    <div className="container is-fluid">
      <Header />
      <GuitarNeck />
    </div>
  );
}
