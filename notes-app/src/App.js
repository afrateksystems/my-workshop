import './App.css';
import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes,setNotes] = useState([]);
  const [view ,setView] = useState("display");
  const addNote = (note) =>{
    const newNote = { ...note };
    newNote.id = Date.now();
    setNotes([...notes,newNote]);
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
