import './App.css';
import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes,setNotes] = useState([]);
  useEffect(() => {
  fetch("http://localhost:8080/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
    .catch(err => console.error("Fetch error:", err));
}, []);
  const [view ,setView] = useState("display");
  const addNote = (note) => {
  setNotes(prev => [...prev, note]);
};
  const deleteNote = (id) =>{
    setNotes(notes.filter((n) => n.id !== id));
  };
  return (
    <div >
      <nav className='nav-bar'><span onClick={()=> setView("display")}style={{ cursor: "pointer" }}>Display Notes</span>  |   <span onClick={()=> setView("add")}style={{ cursor: "pointer" }}>Add Notes</span> </nav>
       <h1>Notes App</h1>
       {view === "display" && (
        <NoteList notes={notes} deleteNote={deleteNote} />
       )}
       {view === "add" && (
        <NoteForm addNote={addNote} />
       )}
       
       
    </div>
  );
}

export default App;
