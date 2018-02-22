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
    ],
    newNote : ''

  }

  handleDeleteNote = (noteId) => {
    // find index of note thats matched noteId
    const idx = this.state.note.findIndex(x => {
      return x.noteId === noteId
    })
    const noteCopy = [...this.state.note];
    noteCopy.splice(idx, 1);
    this.setState({note : noteCopy});
  }

  handeInputChange = (event) => {
    this.setState({ newNote : event.target.value });
  }

  handleAddNote = () => {
 
    if(this.state.newNote.length === 0){
      return false;
    }

    const newNoteContent = {
      noteContent : this.state.newNote,
      noteId : 4
    };

    const noteCopy = [...this.state.note];

    noteCopy.push(newNoteContent);

    this.setState(
      { 
        note : noteCopy,
        newNote : ''
      })
    
  }

  render() {

    const notes = this.state.note.map(note => {
      return <Note 
        content={note.noteContent} 
        key={note.noteId} 
        delete={() => this.handleDeleteNote(note.noteId)} />
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
