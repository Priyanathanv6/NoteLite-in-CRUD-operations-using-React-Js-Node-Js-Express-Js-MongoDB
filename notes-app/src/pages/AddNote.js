import React, { useState } from "react";
import { createNote } from "../services/notesService";
import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";


function AddNote() {
  const [note, setNote] = useState({ title: "", content: "" });
  const navigate = useNavigate();


  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote(note);
    navigate("/");
  };


  return <NoteForm note={note} handleChange={handleChange} handleSubmit={handleSubmit} />;
}


export default AddNote;


