import React from 'react';
import './Note.css';

const Note = (props) => (
  <div className="Note">
    <p className="NoteContent">
      {props.content}
    </p>
    <button className="NoteDelete">X</button>
  </div>
);

export default Note;

