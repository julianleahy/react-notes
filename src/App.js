import React, { Component } from 'react';
import Note from './Note/Note';
import NoteInput from './NoteInput/NoteInput';
import './App.css';

class App extends Component {

  state = {
    note : [
      {noteContent : 'This is note 1', noteId : 1},
      {noteContent : 'This is note 2', noteId : 2},
      {noteContent : 'This is note 3', noteId : 3},
    ]
  }

  handleDeleteNote = (noteId) => {
    console.log(`id ${noteId}`)
  }

  render() {

    const notes = this.state.note.map(note => {
      return <Note 
        content={note.noteContent} 
        key={note.noteId} 
        delete={() => this.handleDeleteNote(note.noteId)}/>
    })


    return (
      <div className="App">
        <div className="NoteHeading">
          <h1>React Notes</h1>
        </div>
        <div className="NoteWrapper">
          {notes}
        </div>
        <footer className="NoteInputWrap">
          <NoteInput />
        </footer>
      </div>
    );
  }
}

export default App;
