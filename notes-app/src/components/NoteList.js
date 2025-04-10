import React from "react";
import { Link } from "react-router-dom";


function NoteList({ notes, handleDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <Link to={`/edit/${note._id}`} className="btn">Edit</Link>
          <button onClick={() => handleDelete(note._id)} className="btn delete">Delete</button>
        </li>
      ))}
    </ul>
  );
}


export default NoteList;


