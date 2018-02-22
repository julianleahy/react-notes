import React, { Component } from 'react';
import Note from './Note/Note';
import NoteInput from './NoteInput/NoteInput';
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

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent
      })

      this.setState({
        note: previousNotes
      })
    })

  }

  handleDeleteNote = (index) => {
    const noteCopy = [...this.state.note];
    noteCopy.splice(index, 1);
    this.setState({ note: noteCopy });
  }


  handeInputChange = (event) => {
    this.setState({ newNote: event.target.value });
  }

  handleAddNote = () => {
    if (this.state.newNote.length === 0) {
      return false;
    }

    this.database.push().set({ noteContent: this.state.newNote })
  }

  render() {
    const notes = this.state.note.map((note, index) => {
      return <Note
        content={note.noteContent}
        key={index}
        delete={() => this.handleDeleteNote(index)} />
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
