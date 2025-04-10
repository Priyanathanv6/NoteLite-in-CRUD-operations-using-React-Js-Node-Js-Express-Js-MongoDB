import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
//dev

function App() {
  return (
    <div className="container">
      <h1>Notes App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </div>
  );
}


export default App;