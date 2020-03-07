import 'bulma';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import NotesAPI from '../api';
import logo from '../assets/img/chordrnotes.png';
import { State } from '../state';
import { noteCollectionSlice } from '../state/collection-slice';
import '../styles/App.scss';
import CreateNote from './CreateNote';
import NotesCollection from './NotesCollection';

export default function App() {
  const isRequestAllowed = useRef(true);
  const collection = useSelector((state: State) => state.collection);
  const dispatch = useDispatch();
  const { actions } = noteCollectionSlice;

  useEffect(() => {
    isRequestAllowed.current &&
      // change api arg to user state from redux
      NotesAPI.retrieveNotes('1').then(result => {
        dispatch(actions.loadNotes(result.data));
      });
    return () => {
      isRequestAllowed.current = false;
    };
  }, [actions, dispatch]);

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
        <Route
          path="/collection"
          render={props => (
            <NotesCollection {...props} collection={collection} />
          )}
        />
        <Route path="/create" component={CreateNote} />
      </div>
    </>
  );
}
