import React from "react";
import "../form.css";  // Importing the form.css file




function NoteForm({ note, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        value={note.content}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="btn">Save Note</button>
    </form>
  );
}


export default NoteForm;




