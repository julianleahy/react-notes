import React, { Component } from 'react';
import Note from './Note/Note';
import NoteInput from './NoteInput/NoteInput';
import GitLink from './GitLink/GitLink';
import { DB_CONFIG } from './Config/Config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {

  state = {
    note: [],
    newNote: ''
  }

  app = firebase.initializeApp(DB_CONFIG);
  database = this.app.database().ref().child('notes');

  componentWillMount() {

    const previousNotes = this.state.note;

    // will run inially and any time a new note is added to DB
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent
      })
      this.setNoteState(previousNotes);
    }) // END added

    // anytime a note is removed from DB this will access it's key
    this.database.on('child_removed', snap => {
      // find index where state version matches key
      const i = previousNotes.findIndex(note => {
        return note.id === snap.key
      })
      // remove it from array and reset state
      previousNotes.splice(i,1);
      this.setNoteState(previousNotes);
    }) // END delete


  } // END componentWillMount

  setNoteState = (previousNotes) => {
    this.setState({note: previousNotes})
  }

  handleDeleteNote = (noteId) => {
    this.database.child(noteId).remove();
  }

  handeInputChange = (event) => {
    this.setState({ newNote: event.target.value });
  }

  handleAddNote = () => {
    if (this.state.newNote.length === 0) return; // no input

    this.database.push().set({ noteContent: this.state.newNote })
    // reset input value to an empty string
    this.setState({
      newNote : ''
    })
  }

  render() {
    const notes = this.state.note.map((note, index) => {
      return <Note
        content={note.noteContent}
        key={index}
        delete={() => this.handleDeleteNote(note.id)} />
    })

    return (
      <div className="App">
         <GitLink />
        <div className="NoteHeading">
          <h1>React Notes</h1>
        </div>
        <div className="NoteWrapper">
          {notes}
        </div>
        <footer className="NoteInputWrap">
          <NoteInput
            addNew={this.handeInputChange}
            value={this.state.newNote}
            click={this.handleAddNote} />
        </footer>
      </div>
    );
  }
}

export default App;
