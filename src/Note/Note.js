import React from 'react';
import './Note.css';

const Note = (props) => (
  <div className="Note">
    <p className="NoteContent">
      lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus autem rerum sed distinctio eos! Eum, molestias voluptatem! Recusandae, optio voluptatibus?
        </p>
    <button className="NoteDelete">X</button>
  </div>
);

export default Note;

