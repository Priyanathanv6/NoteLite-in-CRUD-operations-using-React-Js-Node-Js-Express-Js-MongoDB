import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNoteById, updateNote } from "../services/notesService";
import NoteForm from "../components/NoteForm";


function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", content: "" });


  useEffect(() => {
    const fetchNote = async () => {
      const response = await getNoteById(id);
      setNote(response.data);
    };
    fetchNote();
  }, [id]);


  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNote(id, note);
    navigate("/");
  };


  return <NoteForm note={note} handleChange={handleChange} handleSubmit={handleSubmit} />;
}


export default EditNote;
