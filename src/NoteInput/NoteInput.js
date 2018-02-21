import React, { Component } from 'react';
import './NoteInput.css';

class NoteInput extends Component {

  render() {
    return(
      <div className="NoteInput">
        <input 
          className="NewNote"
          type="text"
          placeholder="Add A New Note"/>

        <button className="AddNote">Add</button>

      </div>
    );
  }
}

export default NoteInput;