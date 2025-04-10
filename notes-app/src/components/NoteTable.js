import React from "react";
import { Link } from "react-router-dom";
import "./NoteTable.css"; // Import the CSS file


function NoteTable({ notes, handleDelete }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note._id}>
              <td>{note.title}</td>
              <td>{note.content}</td>
              <td>
                <Link to={`/edit/${note._id}`} className="btn edit">Edit</Link>
                <button onClick={() => handleDelete(note._id)} className="btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default NoteTable;
