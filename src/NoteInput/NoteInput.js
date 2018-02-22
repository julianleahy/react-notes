import React from 'react';
import './NoteInput.css';

const NoteInput = (props) => (
  <div className="NoteInput">
    <input
      className="NewNote"
      type="text"
      placeholder="Add A New Note" />

    <button className="AddNote">Add</button>

  </div>
);

export default NoteInput;