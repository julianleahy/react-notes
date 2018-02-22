import React, { Component } from 'react';
import Note from './Note/Note';
import NoteInput from './NoteInput/NoteInput';
import './App.css';

class App extends Component {

  state = {
    note : [
      {noteTitle : 'This is note 1', noteId : 1},
      {noteTitle : 'This is note 2', noteId : 2},
      {noteTitle : 'This is note 3', noteId : 3},
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="NoteHeading">
          <h1>React Notes</h1>
        </div>
        <div className="NoteWrapper">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
        <footer className="NoteInputWrap">
          <NoteInput />
        </footer>
      </div>
    );
  }
}

export default App;
