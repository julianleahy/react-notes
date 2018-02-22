import React from 'react';
import './Note.css';

const Note = (props) => (
  <div className="Note">
    <p className="NoteContent">
      {props.content}
    </p>
    <button 
      className="NoteDelete"
      onClick={props.delete}>X</button>
  </div>
);

export default Note;

