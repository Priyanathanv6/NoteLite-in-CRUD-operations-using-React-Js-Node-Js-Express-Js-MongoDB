import React, { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../services/notesService";
import { Link } from "react-router-dom";
import NoteTable from "../components/NoteTable";


function Home() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    fetchNotes();
  }, []);


  const fetchNotes = async () => {
    const response = await getNotes();
    const sortedNotes = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by newest
    setNotes(sortedNotes);
};




  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };


  return (
    <div>
      <Link to="/add" className="btn">Add Note</Link>
      <NoteTable notes={notes} handleDelete={handleDelete} />
    </div>
  );
}


export default Home;
