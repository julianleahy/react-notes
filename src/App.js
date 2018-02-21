import React, { Component } from 'react';
import Note from './Note/Note';
import NoteInput from './NoteInput/NoteInput';
import './App.css';

class App extends Component {
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
