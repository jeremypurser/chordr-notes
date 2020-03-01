import 'bulma';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../assets/img/chordrnotes.png';
import '../styles/App.scss';
import CreateNote from './CreateNote';
import NotesCollection from './NotesCollection';

export default function App() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} width="112" height="28" alt="logo" />
          </a>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/collection">
                My Notes
              </Link>
              <Link className="navbar-item" to="/create">
                Create Note
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container is-fluid">
        <Route path="/collection" component={NotesCollection} />
        <Route path="/create" component={CreateNote} />
      </div>
    </>
  );
}
