import React from 'react';
import './NoteInput.css';

const NoteInput = (props) => (
  <div className="NoteInput">
    <input
      className="NewNote"
      type="text"
      placeholder="Add A New Note"
      onChange={props.addNew} 
      value={props.value}/>

    <button 
      className="AddNote" onClick={props.click}>Add</button>

  </div>
);

export default NoteInput;