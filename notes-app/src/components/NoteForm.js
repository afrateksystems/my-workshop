import axios from "axios";
import { useState } from "react";
import '../App.css';
function NoteForm({ addNote}){
    const [note,setNote] = useState({
        title:"note 1",
        content:"",
        date :"",
        time:"",
        status:"open",
        priority:5
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = {};
    if (!note.title.trim()) {
      newErrors.title = "Title is required";
    } else if (note.title.length > 100) {
      newErrors.title = "Title cannot exceed 100 characters";
    }
    if (!note.date || !note.time) {
      newErrors.datetime = "Date and time are required";
    } 
    else {
        const selectedDateTime = new Date(`${note.date}T${note.time}`);
        const now = new Date();
        if (selectedDateTime < now) {
            newErrors.datetime = "Date and time cannot be in the past";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!validate()) return;
        
        //if(!note.trim()) return;
        sendPostRequest(note);
        addNote(note);
        //setNote("");
    };
    const sendPostRequest = (note)=>{
     axios.post("http://localhost:3001/notes",note,{
        headers:{
            "content-type":"application/json",
        },
    })
    }
    
    return(
        <form className="note-form"onSubmit={handleSubmit}>
            <input className="note-input" placeholder="Enter the title"  value={note.title} onChange={(e) => setNote({...note,title:e.target.value})}/>
            <label>Status:</label>
            <label className="radioclosedlabel"><input type="radio" className="radioclosed" name="status" value="open" checked={note.status === "open"} onChange={(e) => setNote({ ...note, status: e.target.value })}/>Open</label>
            <label className="radioopenlabel"><input type="radio" name="status" className="radioopen"value="closed" checked={note.status === "closed"} onChange={(e) => setNote({ ...note, status: e.target.value })}/> Closed </label>
            {errors.title && <p className="error">{errors.title}</p>}
            <input className="note-input" placeholder="enter the content" value={note.content} onChange={(e) => setNote({...note,content:e.target.value})}/>
            {errors.content && <p className="error">{errors.content}</p>}
            <input className="note-input" type="datetime-local" onChange={(e) => { const value = e.target.value; const [date, time] = value.split("T"); setNote({ ...note, date, time });}}/>
            {errors.datetime && <p className="error">{errors.datetime}</p>}
            <label>Priority</label><input className="note-inputrange" type="range" min="1" max="20" value={note.priority} onChange={(e) => setNote({ ...note, priority: parseInt(e.target.value) })}/>
            <button className="add-btn">Add</button>        
        </form>
    );
}

export default NoteForm;